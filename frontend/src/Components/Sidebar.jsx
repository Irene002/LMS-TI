import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHouse,
  FaCircleInfo,
  FaGear,
  FaRightFromBracket,
  FaXmark,
  FaBoxesStacked
} from "react-icons/fa6";

const Sidebar = () => {
  const sideLinks = [
    { link: "/", label: <FaHouse />, name: "Home" },
    { link: "/", label: <FaBoxesStacked />, name: "Methode Pembelajaran" },
    { link: "/About", label: <FaCircleInfo />, name: "About" },
    { link: "/", label: <FaGear />, name: "Settings" },
  ];

  const [logout, setLogout] = useState(false);

  const handleLogout = () => {
    setLogout(true);
  }

  const handleCancel = () => {
    setLogout(false);
  }

  return (
    <>
    {logout && (
        <> 
      <div className="inset-0 z-50 bg-black bg-opacity-50 fixed flex justify-center items-center">
        <div className="bg-white p-8 rounded-md w-full max-w-[700px] min-w-[400px] FadeIn transition-all duration-500">
            <div className="flex justify-end">
                <button onClick={handleCancel} className="text-xl transition-all duration-500 p-2 rounded-md hover:bg-orange-500 hover:text-white"><FaXmark/></button>
            </div>
          <h3 className="pb-2">Confirm Logout</h3>
          <p>Are you sure you want to log out?</p>
          <div className="flex flex-row gap-4 justify-end mt-4">
            <button onClick={handleCancel} className="rounded-md p-4 bg-gray-400 text-white transition-all duration-500 hover:bg-gray-500">Cancel</button>
            <button className="rounded-md p-4 bg-red-500 text-white transition-all duration-500 hover:bg-red-600">Logout</button>
          </div>
        </div>
      </div>
        </>
    )}


      <div className="fixed w-32 bg-[#FAB12F] text-white h-full overflow-hidden py-24 z-30">
        <ul className="flex flex-col items-center justify-between h-full">
          <div className="flex flex-col items-center gap-12">
            {sideLinks.map((value, index) => (
              <Link
                className="text-2xl p-4 rounded-full transition-all duration-500 hover:bg-orange-400"
                key={index}
                to={value.link}
              >
                {" "}
                {value.label}
              </Link>
            ))}
          </div>
          <button onClick={handleLogout} className="text-2xl transition-all duration-500 p-4 rounded-full hover:bg-red-500">
            <FaRightFromBracket />
          </button>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
