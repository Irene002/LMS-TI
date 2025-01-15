import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Pembelajaran from "../../DataMap/Pembelajaran";

import MateriSectionCard from "../../Components/Cards/MateriSectionCard";

import { FaArrowRight, FaChevronDown } from "react-icons/fa6"
import { useNavigate, useParams } from "react-router-dom"



const PembelajaranDetail = () => {

    const Navigate = useNavigate();
    const { description } = useParams();
    const pembelajaran = Pembelajaran.find((item) => item.description.toLowerCase().replace(/\s/g, "-") === description);
    
    
    
    return (
        <>
            <Navbar />
            <main className="p-48 px-[40rem] bg-[#F4F6FF]">
                <section className="">
                    <div>
                        <div className="flex flex-row gap-4 mb-4">
                            <button onClick={() => Navigate('/')} className="transition-all duration-300 hover:opacity-100 hover:text-orange-500">
                                Home
                            </button>
                            /
                            <button onClick={() => Navigate('/')} className="transition-all duration-300 hover:opacity-100 hover:text-orange-500">
                                Metode Pembelajaran
                            </button>
                            /
                            <div className="text-orange-500">
                                {pembelajaran.description}
                            </div>
                        </div>
                        <h1>{pembelajaran.description}</h1>
                        <br />
                        <hr className="border-black" />
                        <div>
                            <div className="bg-white rounded-md shadow-md mt-8 p-8">
                                <h4>SELAMAT DATANG!</h4>
                                <li className="flex flex-col gap-4 mt-2">
                                    <div className="flex flex-row justify-between items-center py-2">
                                        <p>Pengenalan Kelas</p>
                                        <button className="transition-all duration-300 hover:text-white hover:bg-orange-500 p-2 rounded-full">
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                    <div className="flex flex-row justify-between items-center py-2">
                                        <p>Pengenalan Tools dan Persiapan Pembelajaran</p>
                                        <button className="transition-all duration-300 hover:text-white hover:bg-orange-500 p-2 rounded-full">
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </li>
                            </div>

                            <MateriSectionCard/>
                            <MateriSectionCard/>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default PembelajaranDetail