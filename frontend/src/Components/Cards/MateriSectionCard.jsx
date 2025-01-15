import { useState } from "react"
import { FaChevronDown } from "react-icons/fa6"

const MateriSectionCard = ({materiTitle, indexCategory,MateriCategory}) => {

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(prevState => !prevState)
    }
    return (
        <>
            <div className="bg-white rounded-md shadow-md mt-8 p-8">
                <div className="flex flex-row justify-between items-center">
                    <h4>{materiTitle}</h4>
                    <button onClick={toggleExpand} className={`transition-all duration-300 p-2 hover:text-white hover:bg-orange-500 rounded-full ${isExpanded ? 'rotate-180 duration-700' : ''}`}>
                        <FaChevronDown />
                    </button>
                </div>
                <div className={` ${isExpanded ? 'h-[100%] max-h-[1000px]' : 'h-[0%] max-h-[0px]'} transition-all duration-700 overflow-clip`}>
                    <li className="flex flex-col gap-4 mt-2">
                        <div key={indexCategory} className="flex flex-row justify-between items-center py-4">
                            <p>{MateriCategory}</p>
                            <button className="transition-all duration-300 hover:text-orange-500">
                                Lihat materi
                            </button>
                        </div>
                    </li>
                </div>
            </div>
        </>
    )
}

export default MateriSectionCard