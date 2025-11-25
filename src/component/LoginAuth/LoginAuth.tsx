import { useEffect, useState } from "react";

interface LoginAuthProps {
  onLogin: () => void;
}

export default function LoginAuth({ onLogin }: LoginAuthProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isPassword, setIsPassword] = useState("");
  const [isEmail, setIsEmail] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (!isPassword) {
      setIsPassword(e.target.value);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEmail && isPassword) {
      console.log("Email:", isEmail);
      console.log("Password:", isPassword);

      onLogin();
    } else {
      console.log("Invalid email or password");
    }
  };

  useEffect(() => {
    console.log("Email changed:", isEmail);
  }, [isEmail]);

  useEffect(() => {
    console.log("Password changed:", isPassword);
  }, [isPassword]);

  const TEXT = {
    login: "Login",
    signup: "Signup",
    email: "Email Address",
    password: "Password",
    forgotPassword: "Forgot password?",
    log_in: "Log In",
    google: "Continue with Google",
    github: "Continue with Github",
    dontAcc: "Don't have an account?",
    dontAccSignup: "Signup",
    or: "OR",
  } as const;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 w-100 shadow-2xl h-150 mt-40 ml-100 border rounded-2xl">
          <button className="bg-gray-200 border-white rounded  w-25 mt-10 mr-20 hover:bg-white cursor-pointer transition-transform duration-300 ease-in-out">
            {TEXT.login}
          </button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828395.png"
            alt="login"
            width={15}
            className="ml-29 -mt-5"
          />
          <button className="bg-gray-200 border-white rounded  w-25 h-6 absolute top-58.5 left-245 hover:bg-white cursor-pointer transition-transform duration-300 ease-in-out">
            <h1 className="-mt-1.5">{TEXT.signup}</h1>
            <img
              src="https://cdn-icons-png.flaticon.com/128/9633/9633868.png"
              alt=""
              width={15}
              className="ml-1 -mt-5"
            />
          </button>

          <h1 className="mt-15 mr-50">{TEXT.email}</h1>
          <input
            onChange={handleEmailChange}
            type="email"
            placeholder="Enter your email address"
            className="mt-2 ml-5 border border-black rounded-md p-2 w-80"
          />
          <a href="#" className="absolute top-101.5 left-247">
            {TEXT.forgotPassword}
          </a>
          <h1 className="mt-5 mr-58">{TEXT.password}</h1>
          <input
            onChange={handlePasswordChange}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="mt-1 ml-5 border border-black rounded-md p-2 w-80"
          />
          <img
            onClick={handleShowPassword}
            src="https://cdn-icons-png.flaticon.com/128/7191/7191313.png"
            alt={showPassword ? "Hide password" : "Show password"}
            width={20}
            className="absolute top-111 left-270"
          />
          <div>
            <button
              className="mt-5 border border-black bg-black w-80 ml-5 p-3 rounded-md font-medium cursor-pointer transition duration-300 ease-in-out shadow-md hover:scale-110  text-white"
              type="submit"
            >
              {TEXT.log_in}
            </button>
            <p className="mt-5">{TEXT.or}</p>
            <button className="w-80 ml-5 mt-5 p-2 border rounded-md cursor-pointer hover:bg-gray-200">
              <img
                src="https://cdn-icons-png.flaticon.com/128/104/104093.png"
                alt="google"
                width={20}
                className="mt-1 ml-10"
              />
              <p className="-mt-5.5">{TEXT.google}</p>
            </button>
            <button className="w-80 ml-5 mt-5 p-2 border rounded-md cursor-pointer hover:bg-gray-200">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                alt="google"
                width={20}
                className="mt-1 ml-10"
              />
              <p className="-mt-5.5">{TEXT.github}</p>
            </button>
          </div>
          <footer>
            <p className="mt-7 mr-29 text-gray-500">{TEXT.dontAcc}</p>
            <a
              href="#"
              className="absolute top-186.5 left-250 font-bold underline"
            >
              {TEXT.dontAccSignup}
            </a>
          </footer>
        </div>
      </form>
    </>
  );
}
