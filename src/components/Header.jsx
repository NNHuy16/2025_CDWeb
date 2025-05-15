import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Runads from "./Runads";
import {
  HiOutlineMenu,
  HiX,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiOutlineUser
} from "react-icons/hi";

const Header = ({onLoginClick}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const userMenuRef = useRef(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Tìm kiếm:", searchQuery);
    setIsSearchOpen(false);
  };
  

  // Tự đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#000000] py-4 shadow-sm border-b z-50">
      <div className="container mx-auto px-2 flex justify-start items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-[160px] h-auto ml-[-10px]">
              <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                <style>
                  {`.text-orange { fill: #dc7915; font-family: 'Arial Black', sans-serif; font-weight: bold; }
                    .text-white { fill: #ffffff; font-family: 'Arial Black', sans-serif; font-weight: bold; }`}
                </style>
                <text x="10" y="40" fontSize="36" className="text-orange">N</text>
                <g transform="translate(45, 10)">
                  <rect x="5" y="5" width="4" height="22" fill="#dc7915" />
                  <polygon points="7,27 4,34 10,34" fill="#dc7915" />
                  <circle cx="7" cy="2" r="2" fill="#dc7915" />
                </g>
                <text x="70" y="40" fontSize="36" className="text-orange">e</text>
                <g transform="translate(105, 10)">
                  <polygon points="0,25 10,15 20,25" fill="#ffffff" />
                  <rect x="6" y="25" width="8" height="10" fill="#ffffff" />
                  <rect x="9" y="30" width="2" height="5" fill="#dc7915" />
                </g>
              </svg>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#e3eaee]">
          <Link to="/" className="hover:text-[#dc7915]">TRANG CHỦ</Link>
          <div className="relative group">
            <button className="hover:text-[#dc7915] flex items-center gap-1">
              CÔNG VIỆC <span>▼</span>
            </button>
            <div className="absolute left-0 top-full mt-2 w-60 bg-white border rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
              <Link to="/cv-gap" className="block px-4 py-2 hover:bg-gray-100 text-[#000000]">Công việc gần đây</Link>
              <Link to="/tuyen-gap" className="block px-4 py-2 hover:bg-gray-100 text-[#000000]">Tuyển gấp</Link>
              <Link to="/create-cv" className="block px-4 py-2 hover:bg-gray-100 text-[#000000]">Tạo CV Online</Link>
            </div>
          </div>
          <Link to="/upload" className="border border-[#dc7915] px-4 py-1 bg-[#dc7915] rounded hover:bg-[#dc7915] hover:text-white transition">ĐĂNG TIN</Link>
        </nav>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4 ml-auto relative" ref={userMenuRef}>
          <button
            onClick={() => setIsUserMenuOpen((prev) => !prev)}
            className="flex items-center bg-[#2c2c2c] hover:bg-[#dc7915] rounded-full px-2 py-1 transition-colors duration-200"
          >
            <HiOutlineMenu className="w-8 h-7 text-white mr-1" />
            <HiOutlineUser className="w-8 h-8 text-white bg-[#d1d1d1] rounded-full p-1" />
          </button>

          {isUserMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-70 bg-white text-black rounded shadow-lg z-50 py-2">
             <button onClick={onLoginClick}
                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                Đăng nhập
              </button>
              <Link to="/register" className="block px-4 py-2 hover:bg-gray-100">Đăng ký</Link>
              <Link to="/upload" className="block px-4 py-2 hover:bg-gray-100">Đăng tin lên Neiv</Link>
              <Link to="/support" className="block px-4 py-2 hover:bg-gray-100">Hỗ trợ</Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <HiOutlineMenu className="w-6 h-6 text-[#e3eaee]" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-transparent z-40" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-64 bg-[#fdf9f3] shadow-lg z-50 p-6">
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <HiX className="w-8 h-8 text-[#e3eaee]" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-[#e3eaee] font-semibold">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#dc7915]">TRANG CHỦ</Link>
              <div>
                <p className="font-bold">CÔNG VIỆC</p>
                <div className="pl-4 mt-1 flex flex-col gap-1 text-sm">
                  <Link to="/cv-gap" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#dc7915]">Công việc gần đây</Link>
                  <Link to="/tuyen-gap" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#dc7915]">Tuyển gấp</Link>
                  <Link to="/create-cv" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#dc7915]">Tạo CV Online</Link>
                </div>
              </div>
              <Link to="/upload" onClick={() => setIsMobileMenuOpen(false)} className="border border-[#dc7915] text-center py-2 rounded hover:bg-[#dc7915] hover:text-white transition">ĐĂNG TIN</Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
