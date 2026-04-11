// import { Link } from "react-router-dom";
// import { useState } from "react";
// import useLogin from "../../hooks/useLogin";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const { loading, login } = useLogin();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(username, password);
//   };

//   return (
//     <div className='flex items-center justify-center min-h-screen px-4'>
//       <div className='w-full max-w-md p-8 rounded-2xl backdrop-blur-lg bg-black/30 border border-white/10 shadow-2xl'>
//         <h1 className='text-4xl font-bold text-center text-white mb-8'>
//           Login <span className='text-blue-500'>ChatApp</span>
//         </h1>

//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-gray-200'>
//                 Username
//               </span>
//             </label>

//             <input
//               type='text'
//               placeholder='Enter username'
//               className='w-full input input-bordered h-10 bg-white/10 text-white border-white/10 placeholder:text-gray-400'
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div className='mt-4'>
//             <label className='label'>
//               <span className='text-base label-text text-gray-200'>
//                 Password
//               </span>
//             </label>

//             <input
//               type='password'
//               placeholder='Enter Password'
//               className='w-full input input-bordered h-10 bg-white/10 text-white border-white/10 placeholder:text-gray-400'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <Link
//             to='/signup'
//             className='text-sm hover:underline hover:text-blue-400 mt-4 inline-block text-gray-300'
//           >
//             Don&apos;t have an account?
//           </Link>

//           <div>
//             <button
//               type='submit'
//               className='btn btn-block btn-sm mt-4 border border-slate-700 bg-blue-600 hover:bg-blue-700 text-white'
//               disabled={loading}
//             >
//               {loading ? (
//                 <span className='loading loading-spinner'></span>
//               ) : (
//                 "Login"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center px-4'>
      <div className='w-full max-w-md mx-auto'>
        <div className='backdrop-blur-xl bg-black/30 border border-white/10 rounded-3xl shadow-2xl p-8'>
          <h1 className='text-4xl font-bold text-center text-white mb-8'>
            Login <span className='text-blue-500'>ChatApp</span>
          </h1>

          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <label className='block text-gray-200 mb-2'>Username</label>
              <input
                type='text'
                placeholder='Enter username'
                className='w-full input input-bordered bg-white/10 border-white/10 text-white placeholder:text-gray-400'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label className='block text-gray-200 mb-2'>Password</label>
              <input
                type='password'
                placeholder='Enter Password'
                className='w-full input input-bordered bg-white/10 border-white/10 text-white placeholder:text-gray-400'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Link
              to='/signup'
              className='text-sm text-gray-300 hover:text-blue-400 hover:underline block'
            >
              Don&apos;t have an account?
            </Link>

            <button
              type='submit'
              className='btn w-full bg-blue-600 hover:bg-blue-700 border-none text-white'
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;