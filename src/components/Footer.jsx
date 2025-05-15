import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f2c26] text-white pt-16 pb-8 relative">

  {/* Wave separator */}
  <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none -translate-y-full z-10">
    <svg
      className="w-full h-[100px]"
      viewBox="0 0 1440 50"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
    <path
      d="M0,30 
         C 120,60 240,0 360,30 
         C 480,60 600,0 720,30 
         C 840,60 960,0 1080,30 
         C 1200,60 1320,0 1440,30 
         L1440,100 L0,100 Z"
      fill="#0f2c26"
    />
    </svg>
  </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Logo + Quote */}
       

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-sm text-gray-200">
          {/* Contact */}
          <div>
            <h2 className="text-white font-semibold mb-4">Liên Hệ</h2>
            <h3>Địa chỉ</h3>
            <p className="mt-2">Hoàng Diệu 2, Linh Trung, Thủ Đức, TP.HCM</p>
            <p className="mt-2">hotro@dawgNeiv.com</p>
            <p className="mt-2">0869001947</p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-white font-semibold mb-4">Thông tin</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Trang Chủ</Link></li>
              <li><Link to="/san-pham" className="hover:underline">Điều khoản sử dụng</Link></li>
              <li><Link to="/gioi-thieu" className="hover:underline">Giới Thiệu</Link></li>
              <li><Link to="/lien-he" className="hover:underline">Liên Hệ</Link></li>
              <li><Link to="/dieu-khoan" className="hover:underline">Điều khoản sử dụng</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nhận thông tin ưu đãi sớm nhất !</h3>
            <p className="text-sm mb-4">
              Đăng ký nhận bản tin ưu đãi độc quyền qua mail với vô vàn khuyến mãi hấp dẫn dành riêng cho dịp đặc biệt của bạn.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Địa chỉ Email"
                className="p-2 rounded w-full text-black bg-white"
              />
              <button className="bg-yellow-300 text-black px-4 rounded font-semibold hover:bg-yellow-400">
                NHẬN ƯU ĐÃI
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Bản quyền sở thuộc Đăng Neiv</p>
          <div className="flex justify-center space-x-4 mt-4 text-white text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaTiktok />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
