import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li className="sidebar-li">
                    <Link className='sidebar-links' to={'/users/show'}>Home</Link>
                </li>
                <li className="sidebar-li">
                    <Link className='sidebar-links' to={'/users/account/create'}>Create New Account</Link>
                </li>
                <li className="sidebar-li">
                    <Link className='sidebar-links' to={'/users/trades/show'}>Place a Trade</Link>
                </li>
                <li className="sidebar-li">
                    <Link className='sidebar-links' to={'/users/accounts/show'}>View Accounts</Link>
                </li>
                <li className="sidebar-li">
                    <Link className='sidebar-links' to={'/users/trades/history'}>Trade History</Link>
                </li>
                <li className="sidebar-li">
                    <Link className='sidebar-links' to={'/users/accounts/edit'}>Edit Accounts</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
