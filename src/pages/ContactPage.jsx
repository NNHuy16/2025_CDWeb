import React from 'react';

const ContactPage = () => {
  return (
    <section className="bg-[#fdfbf7] pb-20">

      {/* Header Section */}
      <div className="bg-[#dc7915] text-white py-20 text-center relative">
        <h4 className="text-[#d7d46d] uppercase font-semibold tracking-wider mb-2">Liên hệ</h4>
        <h1 className="text-4xl font-bold">Liên hệ với chúng tôi</h1>
        <div className="text-sm mt-2 opacity-80">
       
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 top-50 overflow-hidden leading-none">
          <svg
            className="w-full h-[100px]"
            viewBox="0 0 1440 100"
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
              fill="#fdfbf7"
            />
          </svg>
        </div>
      </div>
      
      {/* Google Map */}
      <div className="w-[800px] h-[400px] mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3824133591294!2d106.78283647482005!3d10.859366257597065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731dc5b6c6f%3A0xc457d3599d6a59c5!2zVHLGsOG7nW5nIMSQw6Agbm9uZyBMw6JtIFRIUCBIw4AgQ0hJIE1JTkg!5e0!3m2!1svi!2s!4v1681464582762!5m2!1svi!2s"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-4 border-blue-300"
        ></iframe>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 mt-12 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h4 className="text-[#c0504d] font-bold uppercase mb-4">Liên hệ</h4>
          <p className="text-gray-700 mb-4">
            Xin cảm ơn quý khách hàng đã trải nghiệm dịch vụ tìm việc làm của chúng tôi.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Liên hệ chúng tôi</h2>
          <ul className="text-gray-600 text-sm mb-6 space-y-1">
            <li>Hoàng Diệu 2, Linh Trung, Thủ Đức, TP.HCM</li>
            <li>hotro@dawgNeiv.com</li>
            <li>1900 8198</li>
          </ul>

          <h2 className="text-md font-semibold text-gray-800 mb-2">Theo dõi chúng tôi</h2>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-[#1877f2]">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-700 hover:text-[#1da1f2]">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-[#e1306c]">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-700 hover:text-[#ff0000]">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#f4f2ed] p-6 rounded-md">
          <p className="text-gray-800 mb-4">
            Hãy liên hệ với chúng tôi khi bạn muốn khiếu nại hay phản ánh về dịch vụ bên chúng tôi.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Tên của Bạn"
              className="w-full p-3 rounded border border-gray-300"
            />
            <input
              type="email"
              placeholder="Địa chỉ Email"
              className="w-full p-3 rounded border border-gray-300"
            />
            <input
              type="tel"
              placeholder="Số điện thoại"
              className="w-full p-3 rounded border border-gray-300"
            />
            <textarea
              placeholder="Nội dung"
              className="w-full p-3 rounded border border-gray-300 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-[#d7d46d] text-black font-semibold py-2 px-6 rounded hover:opacity-90"
            >
              GỬI
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
