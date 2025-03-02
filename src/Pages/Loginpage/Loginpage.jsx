import { useState } from "react";
import InputField from "../../Components/inputfield/inputField";
import ButtonComponent from "../../Components/Button/button";
import Dog from '../../assets/image.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e) => {
    console.log("hi");
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      console.log("Login successful:", response.data);
      alert("Login successful");
      navigate("/dashboard");
      localStorage.setItem("userData", JSON.stringify(response.data));
    } catch (error) {
      console.error("Login error:", error.response?.data?.error || error.message);
      setError(error.response?.data?.error || "Something went wrong");
    }
  };

const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-screen bg-[#6B4F4F]">
      <div className="bg-[#6B4F4F] p-8 rounded-lg border-1  text-white w-230 justify-evenly flex">
     <div >
     <h2 className="text-2xl font-bold text-center">Welcome back</h2>
        <p className="text-center mb-6">Please enter your details</p>
        <div className="flex">
          <div className="mb-4">
            <div className="flex ">Email</div>
           
            <InputField
              id="email"
              placeholder="Enter your email"
              value={email}
              isRequired={true} 
              className="w-70"
              customPlaceholderStyle="bg-transparent outline-none"
              inputOnChange={(e) => setEmail(e.target.value)}
            />
          </div>
          </div>
          <div className="mb-4">
            <div className="flex">Password</div>
            <InputField
              id="password"
              placeholder="Enter your password"
              value={password}
              className="w-70"
               customPlaceholderStyle="bg-transparent outline-none"
              type="password"
              inputOnChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center mb-4">
          </div>
          <div onClick={handleSubmit}>
            <button className="bg-blue-700 h-10 w-30 rounded-xl">
              Login
            </button>
          </div>
        <div className="text-center mt-4">
          Don't have an account?
          <div className="text-blue-400" onClick={()=> navigate('Singpage')}>
            Sign up
          </div>
        </div>
        </div>
        <div >
            <img  src={Dog} className="w-120 h-100"/>
        </div>
        </div>
      </div>
  );
};

export default LoginForm;
