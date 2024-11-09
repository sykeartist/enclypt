import { NavLink } from "react-router-dom";
import {BiNotification} from 'react-icons/bi'
import { FaUserFriends } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { HiHome, HiChatBubbleLeftRight  } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";






const Navitem = ({ to, icon: Icon, text }) => {
    const isActive = window.location.pathname === to;
  
    return (
        <>
        <NavLink
          to={to} 
          className={`my-12 mx-auto px-2 py-1  h-6 block w-full text-center font-semibold text-lg color-white rounded-l-lg`}
        //   ${isActive ? "bg-white": ""}             
          style={{ color: isActive ? "white" : "gray" }}
        >
          <Icon className='m-auto p-3 w-auto h-14  drop-shadow-lg'/>

          {text}
        </NavLink>
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
            <div className="h-auto w-[7%]  flex flex-col rounded-r-lg bg-green-500">
                <Navitem to={"/"}  icon={HiHome} />
                <Navitem  icon={HiChatBubbleLeftRight } />
                <Navitem  icon={TiUser} />
                <Navitem  icon={FaUserFriends } />
                <Navitem  icon={FaPeopleGroup} />
                <Navitem  icon={BiNotification} />
                <Navitem  icon={IoMdSettings} />
            </div>
        </div>
    );
};

export default Home;