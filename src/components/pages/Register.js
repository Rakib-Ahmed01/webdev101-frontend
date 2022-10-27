import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

export default function SignUp() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    url: '',
  });
  const navigate = useNavigate();

  const {
    logout,
    signInWithProvider,
    updateUserProfile,
    createUserWithMailAndPass,
    verifyEmail,
  } = useContext(AuthContext);

  const { email, password, name, url } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithMailAndPass(email, password)
      .then((res) => {
        updateUserProfile(name, url);
        e.target.reset();
        toast.success(
          `We've sent a verification mail to you email(Spam Folder). Please verify your email`
        );
        verifyEmail();
        logout(false);
        navigate('/login');
      })
      .catch((err) => {
        toast.error(err.message.replace('Firebase: ', ''));
      });
  };

  const signUpWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithProvider(googleProvider)
      .then((res) => {
        toast.success('Logged In Successfully');
        navigate('/all-courses');
      })
      .catch((err) => {
        toast.error(err.message.replace('Firebase: ', ''));
      });
  };

  const signUpWithGitHub = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithProvider(githubProvider)
      .then((res) => {
        toast.success('Logged In Successfully');
        navigate('/all-courses');
      })
      .catch((err) => {
        toast.error(err.message.replace('Firebase: ', ''));
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen  w-full">
      <div className="flex flex-col items-center mb-2">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white -mb-1">
          Register
        </h1>

        <div className="mx-auto">
          <span className="inline-block w-32 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>
      <div className="md:w-[450px] mx-auto ">
        <div className="border rounded">
          <form className="p-3" onSubmit={handleSubmit}>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="name">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="p-1 rounded-[4px] outline-none border"
                onBlur={handleChange}
                required
              />
            </div>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="url">Profile Picture URL (optional)</label>
              <input
                type="url"
                name="url"
                id="url"
                placeholder="Enter Your Profile Picture Link"
                className="p-1 rounded-[4px] outline-none border"
                onBlur={handleChange}
              />
            </div>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="p-1 rounded-[4px] outline-none border"
                onBlur={handleChange}
                required
              />
            </div>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="password">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className="p-1 rounded-[4px] outline-none border"
                onBlur={handleChange}
                required
              />
            </div>
            <small>
              Already have an acoount?{' '}
              <Link to="/login" className="underline text-blue-500">
                Login
              </Link>
            </small>
            <button type="submit" className="btn block w-full mt-4">
              Sign Up
            </button>
          </form>
        </div>
        <div>
          <button
            type="submit"
            className="btn flex items-center justify-center w-full my-2 gap-1"
            onClick={signUpWithGoogle}
          >
            <FcGoogle className="text-xl mt-[2px]" />
            <span>Sign In With Google</span>
          </button>
          <button
            type="submit"
            className="btn flex items-center justify-center w-full my-2 gap-1"
            onClick={signUpWithGitHub}
          >
            <BsGithub className="text-xl mt-[2px]" />
            <span>Sign In With GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
}
