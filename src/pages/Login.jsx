import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ onClose }) => {
  const [isPhone, setIsPhone] = useState(true);

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
        <button className="absolute top-2 right-2 text-gray-500 text-xl" onClick={onClose}>
          &times;
        </button>
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-orange-500">
            Ne<span className="text-black">iv</span>
          </h1>
          <h2 className="text-xl font-semibold mt-2">Đăng nhập</h2>
          <p className="text-sm mt-1 text-gray-600">Chào mừng bạn đã trở lại 👋🏻</p>
        </div>

        {/* Tabs */}
        <div className="flex mb-4 border-b">
          <button
            onClick={() => setIsPhone(true)}
            className={`flex-1 py-2 font-medium ${isPhone ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-600"}`}
          >
            Số điện thoại
          </button>
          <button
            onClick={() => setIsPhone(false)}
            className={`flex-1 py-2 font-medium ${!isPhone ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-600"}`}
          >
            Email
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {isPhone ? (
            <div className="flex gap-2">
              <select className="border rounded px-2 py-2 w-24">
                <option value="+84">VN +84</option>
              </select>
              <input type="text" placeholder="Số điện thoại" className="flex-1 border rounded px-3 py-2" />
            </div>
          ) : (
            <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
          )}
          <input type="password" placeholder="Nhập mật khẩu" className="w-full border rounded px-3 py-2" />
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Ghi nhớ đăng nhập
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">Quên mật khẩu?</a>
          </div>
          <button type="submit" className="w-full bg-gray-200 py-2 rounded text-gray-600 font-semibold cursor-pointer">
            Tiếp theo
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            Bạn chưa có tài khoản? <Link to="/register" className="text-orange-500 font-medium">Đăng ký ngay</Link>
          </p>
          <p className="mt-4 text-sm text-gray-500">hoặc đăng nhập bằng</p>
          <div className="flex justify-center mt-2 gap-4">
            <button className="flex items-center gap-2 border px-4 py-2 rounded">
              <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button className="flex items-center gap-2 border px-4 py-2 rounded">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-5 h-5" />
              Facebook
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Bạn gặp khó khăn khi tạo tài khoản? Vui lòng gọi tới số <strong>0869001947</strong> (Giờ hành chính)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
