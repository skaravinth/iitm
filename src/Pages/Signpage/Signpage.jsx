import { useState } from "react";
import InputField from "../../Components/inputfield/inputField";
import ButtonComponent from "../../Components/Button/button";
import Dog from '../../assets/image.png'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SingFrom = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone_number, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/signup", {
        name,  
        email,
        password,
        phone_number,
      });
  
      console.log("Signup successful:", response.data);
      alert("User registered successfully!");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert(error.response?.data?.error || "Signup failed");
    }
  };
  
  

  return (
    <div className="flex items-center justify-center h-screen bg-[#6B4F4F]">
      <div className="bg-[#6B4F4F] p-8 rounded-lg border-1  text-white w-230 justify-evenly flex">
     <div >
     <h2 className="text-2xl font-bold text-center">Sign-up</h2>
     <div className="flex mt-10">
          <div className="mb-4">
            <div className="flex ">User name</div>
           
            <InputField
              placeholder="Enter your User name"
              value={name}
              className="w-70"
              customPlaceholderStyle="bg-transparent outline-none"
              inputOnChange={(e) => setName(e.target.value)}
            />
          </div>
          </div>
        <div className="flex">
          <div className="mb-4">
            <div className="flex ">Email</div>
           
            <InputField
              id="email"
              placeholder="Enter your email"
              value={email}
              className="w-70"
              customPlaceholderStyle="bg-transparent outline-none"
              inputOnChange={(e) => setEmail(e.target.value)}
            />
          </div>
          </div>
          <div className="flex">
          <div className="mb-4">
            <div className="flex ">Phone Number</div>
           
            <InputField
              placeholder="Enter your Phone no"
              className="w-70"
              value={phone_number}
              customPlaceholderStyle="bg-transparent outline-none"
              inputOnChange={(e) => setPhonenumber(e.target.value)}
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
              isRequired={true}  
              type="password"
              inputOnChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center mb-4">
          </div>
          <div onClick={handleSubmit}>
          <button className="bg-blue-700 h-10 w-30 rounded-xl">
              Sign Up
            </button>
          </div>
       
        </div>
        <div >
            <img  src={Dog} className="w-120 h-100"/>
        </div>
        </div>
      </div>
  );
};

export default SingFrom;
