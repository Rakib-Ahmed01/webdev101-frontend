import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
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
    console.log(data);

    createUserWithMailAndPass(email, password)
      .then((res) => {
        updateUserProfile(name, url);
        e.target.reset();
        verifyEmail();
        logout();
        navigate('/login');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signUpWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithProvider(googleProvider)
      .then((res) => {
        console.log('User created!');
        navigate('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen  w-full">
      <div className="w-[450px] mx-auto ">
        <div className="border rounded">
          <form className="p-3" onSubmit={handleSubmit}>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="p-1 rounded-[4px] outline-none border"
                onBlur={handleChange}
              />
            </div>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="url">Profile Picture (url)</label>
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="p-1 rounded-[4px] outline-none border"
                onBlur={handleChange}
              />
            </div>
            <div className=" flex flex-col justify-center ">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className="p-1 rounded-[4px] outline-none border"
                onBlur={handleChange}
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
          >
            <BsGithub className="text-xl mt-[2px]" />
            <span>Sign In With GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
}
