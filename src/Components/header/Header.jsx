import React, { useState } from "react";
import Profile from "../../assets/profile.jpg";
import Profilepage from "../Profilepage/Profile";
import Summa from "../Dialog/summa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [Popup, setPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="text-black px-6 py-3 flex justify-between items-center border border-gray-300 shadow-lg">
      <div className="text-xl font-bold">Dogify</div>

      {Popup && (
        <div>
          <Summa direction="right" borderRadius="12px">
            <Profilepage setPopup={setPopup} />
          </Summa>
        </div>
      )}

      <div className="flex justify-end items-center">
      <div className="text-black font-bold mr-5" onClick={() => navigate("/Dashboard")}>
  HOME
</div>
<div className="text-black font-bold mr-5" onClick={() => navigate("/Dashboard")}>
  ABOUT
</div>
<div className="text-black font-bold mr-5" onClick={() => navigate("/shopping")}>
  SHOPPING PAGE
</div>

        <div className="p-2 rounded-full" onClick={() => setPopup(!Popup)}>
          <img src={Profile} className="w-12 h-12 rounded-full" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
