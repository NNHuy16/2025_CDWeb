import Sidebar from "../components/SlideBar";
import { Outlet } from "react-router-dom";

const MaterLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar cố định bên trái */}
      <Sidebar />

      {/* Nội dung chỉ cuộn phần Outlet */}
      <div className="flex-1 overflow-hidden p-6">
        <div className="h-full max-w-[1000px] mx-auto bg-white rounded shadow">
          <div className="h-full overflow-y-auto pr-4">
            <Outlet />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MaterLayout;
