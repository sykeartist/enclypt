import { NavLink } from "react-router-dom";
import {BiHome, BiChat, BiNotification, BiCog, BiLogOutCircle} from 'react-icons/bi'

const Navitem = ({ to, icon: Icon }) => {
    const isActive = window.location.pathname === to;
  
    return (
        <>
        <NavLink
          to={to} 
          className={`m-auto block w-28 h-16 rounded-l-lg
           ${isActive
             ? "bg-white" 
             : ""}`}
             
          style={{ color: isActive ? "#454545" : 'white' }}
        >
          <Icon className='m-auto p-3 w-28 h-16  drop-shadow-lg'/>

        </NavLink>
        
        <div className={`w-2 h-16 bg-[#454545] rounded-l-lg absolute drop-shadow-md right-2 top-0
         ${ isActive
          ? "block" 
          : "hidden" }`} 
        >   
        </div>
        </>
    );
  };


const Home = () => {
    return (
        <div>
            <div className="">
                <div className=" flex m-auto p-3 justify-between ">
                    <div className="flex  gap-3">
                    <div
                     className="logo flex gap-1 text-center">
                        <img
                         className="h-10 w-full"
                         src="/ENCLYPT LOGO.png"
                         alt="" 
                        />
                    </div>
                    </div>
                    <div className="flex  gap-3">
                        <NavLink className={'text-green-700  px-2 py-1 text-xl font-semibold'} to={'/registration'}>SIGN UP</NavLink>
                        <NavLink className={'text-green-700  px-2 py-1 text-xl font-semibold'} to={'/login'}>SIGN IN</NavLink>
                    </div>
                </div>
            </div>
            <div className="h-full  mt-20 w-[7%]  bg-green-500">
                <Navitem to={"/"} icon={BiHome} />
                <Navitem  icon={BiChat} />
                <Navitem  icon={BiNotification} />
                <Navitem  icon={BiCog} />
                <Navitem  icon={BiLogOutCircle} />
            </div>
        </div>
    );
};

export default Home;