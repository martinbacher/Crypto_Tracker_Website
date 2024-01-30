import React from "react";
import Logout from "./Logout";
import UserWatchList from "./UserWatchList";
import SideBarNav from "./SideBarNav";

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="text-center p-4">
        <h1 className="text-white text-2xl">User Dashboard</h1>
      </div>
      <div className="flex-1 p-4">
        <UserWatchList />
        <SideBarNav />
        <Logout />
      </div>
    </div>
  );
};

export default UserDashboard;
