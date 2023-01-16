import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const location = useLocation();

  const path = location?.state?.from || '/all-courses';

  const { signInWithProvider, signInWithMailAndPass, logout } =
    useContext(AuthContext);

  const { email, password } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithMailAndPass(email, password)
      .then((res) => {
        toast.success('Logged In Successfully');
        if (res.user.emailVerified) {
          e.target.reset();
          navigate(path, { replace: true });
        } else {
          toast.error('Please verify your email');
          logout(false);
        }
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
        navigate(path, { replace: true });
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
        navigate(path, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message.replace('Firebase: ', ''));
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center mb-2">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white -mb-1">
          Login
        </h1>

        <div className="mx-auto">
          <span className="inline-block w-32 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>
      <div className="mx-auto  md:w-[450px]">
        <div className="border rounded">
          <form className="p-3" onSubmit={handleSubmit}>
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
                value={email}
                onChange={handleChange}
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
                placeholder={`Enter Your Password`}
                className="p-1 rounded-[4px] outline-none border"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <small className="block underline text-blue-500">
              Forgot Password?
            </small>
            <small className="block">
              Don't have an acoount?{' '}
              <Link to="/register" className="underline text-blue-500">
                Register
              </Link>
            </small>
            <button type="submit" className="btn block w-full mt-4">
              Login
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
