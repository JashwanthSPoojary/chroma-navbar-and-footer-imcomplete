import  demo  from '../../assets/logo.svg'
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { BsCartFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";




const Navbar = () => {
  return (
    <div className="flex flex-row items-center absolute w-full h-20 top-0 bg-black">
        <div className="flex flex-row gap-12 items-center px-4 py-6 ml-44">
            <img src={demo} alt="chroma logo" className='w-32' />
            <div className='text-white flex flex-row'><IoIosMenu color='white' size={24} /> Menu</div>
            <div className="relative w-auto">
                <input 
                    type="text" 
                    className="w-96 pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What are you looking for?"
                />
                <button className="absolute inset-y-0 right-0 flex items-center pr-3 ">
                    <CiSearch className="text-gray-500" />
                </button>
            </div>
        </div>
        <div className="ml-36 flex flex-row gap-12 items-center px-4 py-6">
            <div className="flex flex-row gap-2 items-center text-white text-xs"><IoLocationSharp color='white' size={13} /> Mumbai,400049 <RiPencilFill color='white' size={9} /></div>
            <FaUser color='white' size={20} />
            <BsCartFill color='white' size={20} />
        </div>
    </div>
  )
}

export default Navbar