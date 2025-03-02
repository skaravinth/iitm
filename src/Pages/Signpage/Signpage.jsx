import { useState } from "react";
import InputField from "../../Components/inputfield/inputField";
import ButtonComponent from "../../Components/Button/button";
import Dog from '../../assets/image.png'

const SingFrom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    console.log(password)
    console.log(email)
    e.preventDefault();
    console.log({ email, password, remember });
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
              id="email"
              placeholder="Enter your User name"
              value={email}
              isRequired={true} 
              customPlaceholderStyle="bg-transparent outline-none"
              type="email"
              inputOnChange={(e) => setEmail(e.target.value)}
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
              isRequired={true} 
              customPlaceholderStyle="bg-transparent outline-none"
              type="email"
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
              className=""
               customPlaceholderStyle="bg-transparent outline-none"
              isRequired={true}  
              type="password"
              inputOnChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center mb-4">
          </div>
          <div onClick={handleSubmit}>
            <ButtonComponent
            buttonText="Sing-up"
            bgColor="bg-blue-500"
            />
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
