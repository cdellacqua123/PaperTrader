
//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from "react-router-dom";
//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
// import "./Header.css";


const Sidebar = (accounts) => {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        // menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(false);
    };

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                {/* collapsed={menuCollapse} */}
                <ProSidebar collapsed={false}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            {/* <p>{menuCollapse ? "Logo" : "Big Logo"}</p> */}
                        </div>
                        {/* onClick={menuIconClick} */}
                        <div className="closemenu" >
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                
                                <FiArrowRightCircle />
                                
                            ) : (
                                <div className="sidebar">
                                    {/* <FiArrowLeftCircle /> */}
                                    <ul>


                                    <li className="sidebar-li">
                                    {/* <h1 > */}
                                        
                                    {/* </h1> */}
                                    <Link className='sidebar-links' to={'/users/show'}>Home</Link>
                                    </li>
                                    


                                    <li className="sidebar-li">
                                    {/* <h1> */}
                                        
                                    {/* </h1> */}
                                    <Link className='sidebar-links' to={'/users/account/create'}>Create New Account</Link>
                                    </li>
                                    

                                    <li className="sidebar-li">
                                    {/* <h1> */}
                                        
                                    {/* </h1> */}
                                    <Link className='sidebar-links' to={'/users/trades/show'}>Place a Trade</Link>
                                    </li>


                                    <li className="sidebar-li">
                                    {/* <h1> */}
                                        
                                    {/* </h1> */}
                                    <Link className='sidebar-links' to={'/users/accounts/show'}>View Accounts</Link>
                                    </li>
                                    

                                    <li className="sidebar-li"> 
                                    {/* <h1> */}
                                        
                                    {/* </h1> */}
                                    <Link className='sidebar-links' to={'/users/trades/history'}>Trade History</Link>
                                    </li>
                                    

                                    <li className="sidebar-li">
                                    {/* <h1> */}
                                        
                                    {/* </h1> */}
                                    <Link className='sidebar-links' to={'/users/accounts/edit'}>Edit Accounts</Link>
                                    </li>
                                    </ul>
                                    </div>
                            )}
                        </div>
                        {/* <SidebarContent>
                            <Menu iconShape="square">
                                <MenuItem active={true} icon={<FiHome />}>
                                    Home
                                </MenuItem>
                                <MenuItem icon={<FaList />}>Category</MenuItem>
                                <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
                                <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
                                <MenuItem icon={<BiCog />}>Settings</MenuItem>
                                
                            </Menu>
                        </SidebarContent> */}
                        <SidebarFooter>
                            {/* <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu> */}
                        </SidebarFooter>
                    </SidebarHeader>
                    
                </ProSidebar>
            </div>
        </>
    );
};

export default Sidebar;

// https://medium.com/how-to-react/create-a-sidebar-menu-in-react-js-3463b306ca9a