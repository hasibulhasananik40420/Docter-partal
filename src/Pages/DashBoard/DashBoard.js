import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
           <h1 className='text-3xl text-primary font-bold'>DashBoard</h1>
          <Outlet></Outlet>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li><Link to='/dashboard'>My Appointment</Link></li>
            <li><Link to='/dashboard/review'>My Review </Link></li>
            <li><Link to='/dashboard/history'>My History </Link></li>
            <li><Link to='/dashboard/users'>All Users </Link></li>
          </ul>

        </div>
      </div>
    );
};

export default DashBoard;