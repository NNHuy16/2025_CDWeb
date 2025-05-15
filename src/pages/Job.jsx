import React from "react";

const Job = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 mb-20">
      <div className="flex flex-col md:flex-row gap-6">
        {/* LEFT COLUMN */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          {/* === Header Card === */}
          <div className="bg-white p-6 rounded-md shadow ">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              NHÂN VIÊN KINH DOANH - THU NHẬP KHÔNG GIỚI HẠN
            </h1>
            <p className="text-red-600 font-semibold text-lg mb-2">
              10 triệu - 20 triệu/Tháng
            </p>
            <div className="flex items-center text-gray-600 text-sm gap-4">
              <span>📍 Hồ Chí Minh</span>
              <span>
                ⏳ Hết hạn sau <strong>6 Ngày</strong>
              </span>
            </div>
          </div>

          {/* === Tabs Card === */}
          <div className="bg-white p-4 rounded-md shadow">
            <div className="flex gap-6 border-b  pb-2">
              <button className="font-semibold text-orange-600 border-b-2 border-orange-600">
                Thông tin công việc
              </button>
              <button className="text-gray-600">Mô tả công việc</button>
              <button className="text-gray-600">Yêu cầu</button>
              <button className="text-gray-600">Phúc lợi</button>
            </div>
          
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              📌 Thông tin công việc
            </h3>
            <div className="divide-y divide-gray-200 text-gray-700 text-sm">
              <div className="py-2 grid grid-cols-2">
                <span><strong>📌 Vị trí tuyển dụng:</strong> Sales BĐS/Môi giới</span>
                <span><strong>⭐ Kinh nghiệm:</strong> Không giới hạn</span>
              </div>
              <div className="py-2 grid grid-cols-2">
                <span><strong>👥 Số lượng:</strong> 20 người</span>
                <span><strong>🎓 Học vấn:</strong> Trung cấp</span>
              </div>
              <div className="py-2 grid grid-cols-2">
                <span><strong>🎯 Độ tuổi:</strong> 19 - 45</span>
                <span><strong>💰 Trả lương:</strong> Thanh toán hàng tháng</span>
              </div>
              <div className="py-2 grid grid-cols-2">
                <span><strong>🕒 Hình thức:</strong> Toàn thời gian</span>
              </div>
            </div>
          </div>

          {/* === Mô tả công việc Card === */}
          <div className="bg-white p-6 rounded-md shadow ">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">📝 Mô tả công việc</h3>
            <textarea
              rows="6"
              className="w-full  rounded px-3 py-2 text-sm text-gray-700 focus:outline-none"
              placeholder="Mô tả các công việc cụ thể..."
            ></textarea>
          </div>
          {/* === Yêu cầu Card === */}
            <div className="bg-white p-6 rounded-md shadow ">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📝 Yêu cầu công việc</h3>
                <textarea
                rows="6"
                className="w-full  rounded px-3 py-2 text-sm text-gray-700 focus:outline-none"
                placeholder="Mô tả các yêu cầu cụ thể..."
                ></textarea>
            </div>
            {/* === Phúc lợi Card === */}
            <div className="bg-white p-6 rounded-md shadow ">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">🎁 Phúc lợi</h3>
                <textarea
                rows="6"
                className="w-full  rounded px-3 py-2 text-sm text-gray-700 focus:outline-none"
                placeholder="Mô tả các phúc lợi cụ thể..."
                ></textarea>
            </div>
            {/* === Thổng tin liên hệ === */}
            <div className="bg-white p-6 rounded-md shadow ">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">📞 Thông tin liên hệ</h3>
                <textarea
                rows="1"
                className="w-full  rounded px-3 py-2 text-sm text-gray-700 focus:outline-none"
                placeholder="Mô tả các thông tin liên hệ cụ thể..."
                ></textarea>
                
            <iframe 
              title="Google "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6978745781974!2d106.76715947481896!3d10.831379289325398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752745f7e940a7%3A0x2f79b6b8a5416b11!2zS2h1IHBo4buRIE5naOG7hyBN4bqhaSBU4burbmcgLSBMb2dvIGLhuqFuZw!5e0!3m2!1svi!2s!4v1715077352411!5m2!1svi!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-md shadow "
            ></iframe>
        
            </div>

        </div>
     

        {/* RIGHT COLUMN */}
        <div className="w-full h-full md:w-1/3 p-6 rounded-md shadow-sm ">
          <div className="flex flex-col items-start text-center">
             <div className=" w-full bg-white p-6 rounded-md shadow mb-4 ">
                <img
                src="https://static.topcv.vn/company_logos/UNIlogo.png"
                alt="Logo"
                className="w-16 h-16 mb-3"
                />
                <h2 className="font-bold text-lg text-gray-800 mb-2">
                CÔNG TY TNHH BẤT ĐỘNG SẢN NHÀ UNI
                </h2>
                <p className="text-sm text-gray-600 mb-1 text-left w-full">
                📍 Văn Phòng 01, Tầng 9, Pearl Plaza, 561A Điện, P.25, Q.Bình Thạnh
                </p>
                <p className="text-sm text-gray-600 mb-1 text-left w-full">
                👤 Quy mô: 25-99
                </p>
                <p className="text-sm text-gray-600 mb-4 text-left w-full">
                📞 Phòng nhân sự
                </p>
                <button className="w-full bg-orange-600 text-white py-2 rounded mb-2 hover:bg-orange-700">
                📄 Ứng tuyển ngay
                </button>
                <button className="w-full border border-gray-300 py-2 rounded mb-2 text-gray-700 hover:bg-gray-100">
                📞 Gọi điện
                </button>
                <button className="w-full border border-gray-300 py-2 rounded text-gray-700 hover:bg-gray-100">
                💬 Chat với nhà tuyển dụng
                </button>
          </div>
          <div className=" w-full bg-white p-6 rounded-md shadow ">
            <h2 className="font-bold text-lg text-gray-800 mb-2">
              Nhắc nhở bảo mật từ Neiv:
            </h2>
            <p className="text-sm text-gray-600 mb-1 text-left w-full">
              Neiv nghiêm cấm các công ty và người tìm việc tham gia vào các hoạt động bất hợp pháp, bao gồm nhưng không giới hạn ở các hành vi vi phạm thuần phong mỹ tục và lừa đảo Các hoạt động cho vay và tài chính bất hợp pháp, xúi giục người tìm việc đi tìm việc ở nơi khác, sử dụng trái phép lý lịch, tịch thu tài liệu/tài sản, ....! Khi phát hiện hãy -báo cáo ngay
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
