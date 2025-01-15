import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import polnustar from '../Assets/polnustar.jpg'

import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useNavigate } from "react-router-dom";

import Pembelajaran from "../DataMap/Pembelajaran";

const Home = () => {
  const Navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPembelajaran, setFilteredPembelajaran] = useState([]);

  

  const handleSearch = () => {
    const filtered = Pembelajaran.filter((item) => item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPembelajaran(filtered);
    console.log(filtered);
  }

  const displayedPembelajaran = searchQuery ? filteredPembelajaran : Pembelajaran;


  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  const handleButtonClick = (description) => {
    const formattedDescription = description.toLowerCase().replace(/\s/g, "-");
    Navigate(`/pembelajaran/${formattedDescription}`);
  }

  console.log(Pembelajaran);
  console.log(filteredPembelajaran);
  console.log(searchQuery);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="pt-20">
        <div className="w-full h-[600px] flex relative overflow-clip ml-12">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center">
            <h1>Learning Management System</h1>
            <br />
            <hr className="border-white" />
            <br />
            <h3>Politeknik Negeri Nusa Utara</h3>
            <h3>Teknologi Informatika - Sistem Informasi</h3>
          </div>
          <img
            className="w-full h-auto object-cover brightness-[.5]"
            src={polnustar}
          />
        </div>
        <section className="p-24 ml-32 px-32 bg-[#F4F6FF]">
          <div className="pb-32">
            <div className="flex flex-row justify-between items-center">
              <h2>Methode Pembelajaran</h2>
              <div className="flex flex-row gap-8">
                <div className="flex flex-row bg-white border border-black gap-4 rounded-md p-4 w-96">
                  <button onClick={handleSearch}><FaMagnifyingGlass /></button>
                  <input onKeyPress={handleKeyPress} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className=" bg-none focus:outline-none w-full" type="text" placeholder="Cari..." />
                </div>
              </div>
            </div>
            <br />
            <hr className="border-black" />
            <div className="mt-8">
              <h4>Temukan {displayedPembelajaran.length} pembelajaran dari {Pembelajaran.length}</h4>
            </div>
            {/* Cards Wrapper */}
            <div className="grid grid-cols-5 gap-8 mt-8">
              {/* Cards */}
              {(filteredPembelajaran.length > 0 ? filteredPembelajaran : Pembelajaran).map((value, index) => (
                <button onClick={() => handleButtonClick(value.description)}
                  key={index}
                  className="bg-white shadow-md rounded-md overflow-clip ImageScale border-b-orange-500 border-b-8">
                  <div className="flex overflow-clip w-full h-64">
                    <img
                      className="w-full object-cover h-auto transition-all duration-500"
                      src={value.image}
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-[1.3rem]">{value.description}</h4>
                    <div className="my-4">
                      <p>{value.NamaDosen}</p>
                      <p>{value.RoleDosen}</p>
                    </div>
                    <hr className="border-black" />
                    <br />
                    <p>Semester {value.semester}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="pb-32">
            <h2>Section2</h2>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
