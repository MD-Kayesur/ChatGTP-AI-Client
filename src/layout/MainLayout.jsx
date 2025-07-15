import Navber from "../component/Navber";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navber></Navber>
      <div>
      
        <Outlet></Outlet> 
      </div>
    </div>
  );
};

export default MainLayout;
