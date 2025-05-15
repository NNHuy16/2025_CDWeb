import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { title: "Bánh ngọt", img: "/src/assets/img/banh4.png", desc: "Ngọt mềm, trứng, đường, kem." },
  { title: "Bánh quy", img: "/src/assets/img/banh7.png", desc: "Giòn, ngọt, bơ, trứng." },
  { title: "Bánh mì", img: "/src/assets/img/banh9.png", desc: "Mềm, thịt nguội, rau, bơ, trứng." },
  { title: "Sandwich", img: "/src/assets/img/banh3.png", desc: "Thịt nguội, rau, phô mai, nướng." },
];

const products = [
  { name: "Bánh tart dâu", price: "60.000đ", rating: 5, img: "/src/assets/img/banh2.png" },
  { name: "Bánh kem cam", price: "80.000đ", rating: 5, img: "/src/assets/img/banh3.png" },
  { name: "Bánh quy hạt ối", price: "50.000đ", rating: 4, img: "/src/assets/img/banh4.png" },
  { name: "Bánh trái cây", price: "70.000đ", rating: 5, img: "/src/assets/img/banh5.png" },
  { name: "Bánh quy socola", price: "60.000đ", rating: 4, img: "/src/assets/img/banh6.png" },
  { name: "Bánh mựt ceng", price: "90.000đ", rating: 4, img: "/src/assets/img/banh7.png" },
  { name: "Bánh mì kẹp", price: "30.000đ", rating: 5, img: "/src/assets/img/banh8.png" },
  { name: "Bánh bò", price: "40.000đ", rating: 5, img: "/src/assets/img/banh9.png" },
];
const jobs = [
  {
    title: "NHÂN VIÊN KINH DOANH - TH...",
    salary: "5 triệu - 10 triệu",
    location: "Hồ Chí Minh",
    type: "Bán thời gian",
    company: "CÔNG TY TNHH BẤT ĐỘNG SẢN NHÀ UNI",
    companyLogo: "/path/to/logo.png", // Thay bằng đường dẫn thực tế
    verified: true,
    isHot: true,
  },
  
];
const HomePage = () => {
  return (
    <div className="container mx-auto px-4 font-sans p-8 bg-white">

    <section className="flex flex-col md:flex-row items-center justify-between bg-[#fdf9f3] p-8 rounded-xl mb-12">
      {/* Text */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h3 className="text-red-500 font-semibold text-sm uppercase mb-2">Chào mừng đến với</h3>
        <h1 className="text-4xl font-bold text-[#233d4d] mb-4">Đăng Neiv</h1>
        <p className="text-gray-700 mb-6">
          Việc tìm kiếm việc làm chưa bao giờ dễ dàng hơn với chúng tôi.

        </p>
        <p className="text-gray-700 mb-6">Chúng tôi cung cấp một nền tảng trực tuyến giúp bạn tìm kiếm việc làm nhanh chóng và hiệu quả.</p>
        <div className="flex gap-4">
          <button className="bg-[#dc7915] hover:bg-[#dc7915] text-black px-6 py-2 rounded font-semibold transition">
           TÌM VIỆC NGAY
          </button>
          <Link
            to="/ve-chung-toi"
            className="border border-[#233d4d] hover:bg-[#233d4d] hover:text-white px-6 py-2 rounded font-semibold transition inline-block text-center"
          >
            VỀ CHÚNG TÔI
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" // Replace with your actual image path
          alt="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </section>

      <section className="text-center mb-16 ">
        
        
        <h1 className="text-2xl font-bold mb-2">
          Tìm Việc <span className="text-[#dc7915]">Theo</span> Nhu Cầu
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Khám phá & tim kiếm việc làm theo nhu cầu của bạn. Chúng tôi cung cấp nhiều danh mục việc làm đa dạng và phong phú, giúp bạn dễ dàng tìm thấy công việc phù hợp với mình.
        </p>
      </section>
      <div className="mt-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 bg-white rounded-lg shadow-md p-4">
          {/* Địa điểm chọn */}
          <div className="w-full md:w-1/3">
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-c19d66-400">
              <option>Hồ Chí Minh</option>
              <option>Buôn Ma Thuột</option>
              <option>Đà Nẵng</option>
              <option>Hà Nội</option>
              <option>Bình Dương</option>
            </select>
          </div>

          {/* Ô tìm kiếm */}
          <div className="w-full md:w-3/4 flex items-center border border-gray-300 rounded px-3 py-2">
            <input
              type="text"
              placeholder="Tìm kiếm công việc"
              className="flex-1 outline-none text-sm text-gray-700"
            />
            <button className="ml-2 bg-[#dc7915] text-white px-4 py-2 rounded hover:bg-orange-600 transition text-sm font-semibold">
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>

      <section className="text-center">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  {jobs.map((job, i) => (
    <Link to="/job" key={i}>
      <div className="bg-white rounded-xl p-4 shadow-md border hover:-translate-y-1 transition-transform relative">
        {/* HOT label */}
        {job.isHot && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            HOT
          </span>
        )}

        {/* Job title */}
        <h3 className="font-semibold text-base mt-6">{job.title}</h3>

        {/* Salary */}
        <p className="text-[#e63946] font-bold text-sm mt-1">
          {job.salary} /tháng
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">
            {job.location}
          </span>
          <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">
            {job.type}
          </span>
        </div>

        {/* Company */}
        <div className="flex items-center gap-2 mt-4 border-t pt-2">
          <img
            src={job.companyLogo}
            alt={job.company}
            className="w-6 h-6 object-contain"
          />
          <span className="text-sm font-medium">{job.company}</span>
          {job.verified && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 16.17l-3.88-3.88-1.41 1.41L9 19 20.29 7.71l-1.41-1.41z" />
            </svg>
          )}
        </div>
      </div>
    </Link>
  ))}
</div>

      </section>
     

      {/* Vị trí cửa hàng Section */}
      <section className="bg-white py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto bg-[#fdfdfd] rounded-xl shadow-md p-8 grid md:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <div>
            <h4 className="text-red-500 font-semibold uppercase mb-2">Vị trí chi nhánh</h4>
            <h2 className="text-2xl font-bold text-[#233d4d] mb-4">Mời Bạn Tham Khảo !</h2>
            <p className="text-[#e63946] font-semibold mb-2">
              📍 77 Hoàng Diệu 2, Linh Trung, Thủ Đức, TPHCM
            </p>
            <p className="text-gray-700 mb-4">
              Cần Việc làm nhanh hãy đến chúng tôi.
            </p>
            <ul className="text-gray-700">
              <li>📅 Ngày thường: 8:00 SA / 17:00 CH</li>
              <li>📅 Cuối tuần: 8:00 SA / 12:00 AM</li>
            </ul>
          </div>

          {/* Right - Map */}
          <div>
            <iframe
              title="Google Map Cupakery"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6978745781974!2d106.76715947481896!3d10.831379289325398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752745f7e940a7%3A0x2f79b6b8a5416b11!2zS2h1IHBo4buRIE5naOG7hyBN4bqhaSBU4burbmcgLSBMb2dvIGLhuqFuZw!5e0!3m2!1svi!2s!4v1715077352411!5m2!1svi!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-md shadow"
            ></iframe>
          </div>
        </div>
      </section>

      


    </div>
  );
};

export default HomePage;
