// import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-6'>
      <div className='w-full max-w-lg'>
        <div className='backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8'>
          <h1 className='text-4xl font-bold text-center text-white mb-8'>
            Sign Up <span className='text-blue-500'>ChatApp</span>
          </h1>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='label p-0 mb-2'>
                <span className='text-base text-gray-200'>Full Name</span>
              </label>

              <input
                type='text'
                placeholder='John Doe'
                className='w-full input input-bordered bg-black/20 border-white/10 text-white placeholder:text-gray-400'
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
              />
            </div>

            <div>
              <label className='label p-0 mb-2'>
                <span className='text-base text-gray-200'>Username</span>
              </label>

              <input
                type='text'
                placeholder='johndoe'
                className='w-full input input-bordered bg-black/20 border-white/10 text-white placeholder:text-gray-400'
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>

            <div>
              <label className='label p-0 mb-2'>
                <span className='text-base text-gray-200'>Password</span>
              </label>

              <input
                type='password'
                placeholder='Enter Password'
                className='w-full input input-bordered bg-black/20 border-white/10 text-white placeholder:text-gray-400'
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>

            <div>
              <label className='label p-0 mb-2'>
                <span className='text-base text-gray-200'>
                  Confirm Password
                </span>
              </label>

              <input
                type='password'
                placeholder='Confirm Password'
                className='w-full input input-bordered bg-black/20 border-white/10 text-white placeholder:text-gray-400'
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>

            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={inputs.gender}
            />

            <Link
              to='/login'
              className='text-sm text-gray-300 hover:text-blue-400 hover:underline inline-block'
            >
              Already have an account?
            </Link>

            <button
              type='submit'
              className='btn btn-block bg-blue-600 hover:bg-blue-700 border-none text-white mt-2'
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
