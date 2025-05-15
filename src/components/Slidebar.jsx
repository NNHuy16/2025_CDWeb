import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineChatAlt2, HiOutlineShoppingCart, HiOutlineClipboardList, HiOutlineUserCircle, HiClock } from "react-icons/hi";


const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <aside className="w-80 h-full min-h-screen bg-black text-white p-4 space-y-6">
      {/* Box xác thực tài khoản */}
      <div className="bg-white text-black p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-2">Xác thực tài khoản</h3>
        <ul className="text-sm space-y-1">
          <li>✅ Tăng mức độ uy tín thương hiệu</li>
          <li>✅ Bảo vệ thương hiệu trước giả mạo</li>
        </ul>
        <button className="mt-3 w-full bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
          Xác thực ngay
        </button>
      </div>

      {/* Navigation items */}
      <div className="space-y-4">
        <div>
          <h4 className="uppercase text-xs text-gray-400 mb-2">Dashboard</h4>
          <div className="flex items-center gap-2 text-white hover:text-orange-400 cursor-pointer"
          onClick={() => navigate("/dashboard")}>
            <HiOutlineChatAlt2 />
            <span>Tin nhắn</span>
          </div>
        </div>

        <div>
          <h4 className="uppercase text-xs text-gray-400 mb-2">Dịch vụ</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 hover:text-orange-400 cursor-pointer"
            onClick={() => navigate("/dashboard/mua-dich-vu")}>
              <HiOutlineShoppingCart />
              <span>Mua dịch vụ</span>
            </div>
            <div className="flex items-center gap-2 hover:text-orange-400 cursor-pointer">
              <HiOutlineClipboardList />
              <span>Dịch vụ của tôi</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 hover:text-orange-400 cursor-pointer">
          <HiClock />
          <span>Lịch sử hoạt động</span>
        </div>

        <div className="flex items-center gap-2 bg-orange-400 px-3 py-2 rounded text-black font-semibold cursor-pointer">
          <HiOutlineUserCircle />
          <span>Hồ sơ</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
