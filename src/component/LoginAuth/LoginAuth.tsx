export default function LoginAuth() {
  const login = "Login";
  const signup = "Signup";
  const email = "Email Address";
  const password = "Password";
  const forgotPassword = "Forgot password?";
  const log_in = "Log In";
  const google = "Continue with Google";
  const github = "Continue with Github";
  const dontAcc = "Don't have an account?";
  const dontAccSignup = "Signup";
  return (
    <>
      <div className="bg-gray-50 w-100 shadow-2xl h-150 mt-40 ml-100 border rounded-2xl">
        <button className="bg-gray-200 border-white rounded  w-25 mt-10 mr-20 hover:bg-white cursor-pointer transition-transform duration-300 ease-in-out">
          {login}
        </button>
        <img
          src="https://cdn-icons-png.flaticon.com/128/1828/1828395.png"
          alt="login"
          width={15}
          className="ml-29 -mt-5"
        />
        <button className="bg-gray-200 border-white rounded  w-25 h-6 absolute top-58.5 left-245 hover:bg-white cursor-pointer transition-transform duration-300 ease-in-out">
          <h1 className="-mt-1.5">{signup}</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9633/9633868.png"
            alt=""
            width={15}
            className="ml-1 -mt-5"
          />
        </button>

        <h1 className="mt-15 mr-50">{email}</h1>
        <input
          type="email"
          placeholder="Enter your email address"
          className="mt-2 ml-5 border border-black rounded-md p-2 w-80"
        />
        <a href="#" className="absolute top-101.5 left-247">
          {forgotPassword}
        </a>
        <h1 className="mt-5 mr-58">{password}</h1>
        <input
          type="password"
          placeholder="Enter your password"
          className="mt-1 ml-5 border border-black rounded-md p-2 w-80"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/7191/7191313.png"
          alt=""
          width={20}
          className="absolute top-111 left-270"
        />
        <div>
          <button className="mt-5 border border-black bg-black w-80 ml-5 p-3 rounded-md font-medium cursor-pointer transition duration-300 ease-in-out shadow-md hover:scale-110  text-white">
            {log_in}
          </button>
          <p className="mt-5">OR</p>
          <button className="w-80 ml-5 mt-5 p-2 border rounded-md cursor-pointer hover:bg-gray-200">
            <img
              src="https://cdn-icons-png.flaticon.com/128/104/104093.png"
              alt="google"
              width={20}
              className="mt-1 ml-10"
            />
            <p className="-mt-5.5">{google}</p>
          </button>
          <button className="w-80 ml-5 mt-5 p-2 border rounded-md cursor-pointer hover:bg-gray-200">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
              alt="google"
              width={20}
              className="mt-1 ml-10"
            />
            <p className="-mt-5.5">{github}</p>
          </button>
        </div>
        <footer>
          <p className="mt-7 mr-29 text-gray-500">{dontAcc}</p>
          <a
            href="#"
            className="absolute top-186.5 left-250 font-bold underline"
          >
            {dontAccSignup}
          </a>
        </footer>
      </div>
    </>
  );
}
