import React from "react";

const TaoCV = () => {
  const inputStyle =
    "border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none";

  return (
    <div className="flex justify-center pb-20 bg-gray-100 py-10 px-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-4">Tên hồ sơ của bạn</h1>
        <hr className="mb-6" />

        <h2 className="text-lg font-medium mb-4">Thông tin cơ bản</h2>

        {/* Upload Avatar */}
        <div className="flex items-center gap-6 mb-6">
          <div className="w-32 h-32 border-2 border-dashed rounded-full flex items-center justify-center text-gray-500 cursor-pointer">
            + Upload
          </div>
          <input
            type="text"
            placeholder="Họ và tên"
            className={`flex-1 ${inputStyle}`}
          />
        </div>

        {/* Grid thông tin cá nhân */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="date" className={inputStyle} />
          <select className={inputStyle}>
            <option>Giới tính</option>
            <option>Nam</option>
            <option>Nữ</option>
            <option>Khác</option>
          </select>

          <input placeholder="Vị trí ứng tuyển" className={inputStyle} />
          <select className={inputStyle}>
            <option>Bằng cấp</option>
            <option>Đại học</option>
            <option>Cao đẳng</option>
            <option>Khác</option>
          </select>

          <select className={inputStyle}>
            <option>Năm kinh nghiệm</option>
            <option>1 năm</option>
            <option>2 năm</option>
            <option>5+ năm</option>
          </select>
          <input placeholder="Mức lương" className={inputStyle} />

          <div className="flex">
            <select className="rounded-l-xl border border-gray-300 px-4 py-3 text-sm">
              <option>vn +84</option>
              <option>us +1</option>
            </select>
            <input
              placeholder="Số điện thoại"
              className="flex-1 border-t border-b border-r border-gray-300 rounded-r-xl px-4 py-3 text-sm"
            />
          </div>
          <input placeholder="Email" className={inputStyle} />

          <input placeholder="Khu vực làm việc" className={inputStyle} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <input type="text" placeholder="Địa chỉ" className={inputStyle} />
          <input
            type="text"
            placeholder="Trang web cá nhân"
            className={inputStyle}
          />
        </div>

        {/* Mục tiêu nghề nghiệp */}
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-2">Mục tiêu nghề nghiệp</h2>
          <textarea
            rows="4"
            placeholder="Vui lòng nhập mục tiêu nghề nghiệp"
            className={`w-full ${inputStyle}`}
          />
        </div>

        {/* Kinh nghiệm làm việc */}
        <div className="mt-8 bg-gray-50 p-4 rounded-xl">
          <h2 className="text-lg font-medium mb-4">Kinh nghiệm làm việc</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Vị trí" className={inputStyle} />
            <input
              type="text"
              placeholder="Tên công ty"
              className={inputStyle}
            />
            <input type="date" className={inputStyle} />
            <input type="date" className={inputStyle} />
          </div>
          
        </div>
        <textarea
            rows="4"
            placeholder="Vui lòng nhập Mô tả công việc"
            className={`w-full ${inputStyle}`}
          />

        {/* Học vấn */}
          <div className="mt-8 bg-gray-50 p-4 rounded-xl">
          <h2 className="text-lg font-medium mb-4">Học vấn</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Vui lòng nhập tên trường" className={inputStyle} />
            <input
              type="text"
              placeholder="Vui lòng nhập tên ngành học"
              className={inputStyle}
            />
            <input type="date" className={inputStyle} />
            <input type="date" className={inputStyle} />
          </div>
          
        </div>
        <textarea
            rows="4"
            placeholder="Vui lòng nhập Mô tả công việc"
            className={`w-full ${inputStyle}`}
          />

           {/* Chứng nhận*/}
          <div className="mt-8 bg-gray-50 p-4 rounded-xl">
          <h2 className="text-lg font-medium mb-4">Chứng nhận</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Vui lòng nhập tên chứng nhận" className={inputStyle} />
           
            
            <input type="date" className={inputStyle} />
          </div>
          
        </div>
        <textarea
            rows="4"
            placeholder="Vui lòng nhập Mô tả công việc"
            className={`w-full ${inputStyle}`}
          />
          <div>
        <button className=" w-full bg-[#dc7915] text-white py-2 px-4 rounded hover:bg-orange-600 transition font-semibold text-sm">
           Lưu
        </button>
        </div>
      </div>
      
    </div>
  );
};

export default TaoCV;
