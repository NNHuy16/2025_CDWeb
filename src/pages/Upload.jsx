import Sidebar from "../components/SlideBar";

const Upload = () => {
    return (
         <div className="flex">
      
    <div className="mt-10 w-full max-w-[800px] mx-auto bg-white p-6 rounded-md shadow-md max-h-[140vh] mb-30">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Đăng tin tuyển dụng</h2>

    {/* Form fields */}
    <form className="space-y-5">
        {/* Tên công ty */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tên công ty</label>
        <input
            type="text"
            placeholder="Nhập tên công ty"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        </div>

        {/* Vị trí tuyển dụng */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Vị trí tuyển dụng</label>
        <input
            type="text"
            placeholder="Nhập vị trí tuyển dụng"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        </div>
        {/* Lương */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Lương</label>
        <input
            type="text"
            placeholder="Nhập lương"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        </div>

        {/* Địa điểm */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Địa điểm</label>
        <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option>Hồ Chí Minh</option>
            <option>Buôn Ma Thuột</option>
            <option>Đà Nẵng</option>
            <option>Hà Nội</option>
            <option>Bình Dương</option>
        </select>
        </div>

        {/* Mô tả công việc */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả công việc</label>
        <textarea
            rows="5"
            placeholder="Nhập mô tả công việc"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>
        </div>
        {/* Yêu cầu công việc */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Yêu cầu công việc</label>   
        <textarea
            rows="5"
            placeholder="Nhập yêu cầu công việc"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400" 
        ></textarea>
        </div>  
        {/* Thời gian làm việc */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Thời gian làm việc</label>
        <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Thực tập</option>
            <option>Freelance</option>
        </select>
        </div>
        {/* Hạn nộp hồ sơ */}
        <div>
         <label className="block text-sm font-medium text-gray-700 mb-1">Tuyển dụng</label>
        <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400">
            <option>Tuyển gấp</option>
            <option>Tuyển thường</option>
        </select>
        </div>
        {/* Thông tin liên hệ */}
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Thông tin liên hệ</label>
        <input
            type="text"
            placeholder="Nhập thông tin liên hệ"
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        </div>



        {/* Nút đăng tin */}
        <div>
        <button className="w-full bg-[#dc7915] text-white py-2 px-4 rounded hover:bg-orange-600 transition font-semibold text-sm">
            Đăng tin
        </button>
        </div>
    </form>
</div>
</div>

)
;};
export default Upload