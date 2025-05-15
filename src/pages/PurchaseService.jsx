import React from "react";

const plans = [
  {
    title: "Hội Viên Kim Cương",
    price: "6.997.500 VNĐ",
    oldPrice: "8.970.000 VNĐ",
    discount: "22%",
    highlight: true,
    features: [
      "Trải nghiệm trong: 365 ngày",
      "Đăng tuyển: 80 vị trí",
      "Ứng viên gửi CV xem không giới hạn",
      "Sử dụng hệ thống quản lý tuyển dụng",
      "Xem ứng viên tiềm năng: 50 ứng viên",
    ],
    color: "blue",
  },
  {
    title: "Hội Viên Vàng",
    price: "3.747.500 VNĐ",
    oldPrice: "4.485.000 VNĐ",
    discount: "16%",
    features: [
      "Trải nghiệm trong: 180 ngày",
      "Đăng tuyển: 30 vị trí",
      "Ứng viên gửi CV xem không giới hạn",
      "Sử dụng hệ thống quản lý tuyển dụng",
      "Xem ứng viên tiềm năng: 20 ứng viên",
    ],
    color: "yellow",
  },
  {
    title: "Hội Viên Bạch Kim",
    price: "1.997.500 VNĐ",
    oldPrice: "2.242.500 VNĐ",
    discount: "10%",
    features: [
      "Trải nghiệm trong: 90 ngày",
      "Đăng tuyển: 10 vị trí",
      "Ứng viên gửi CV xem không giới hạn",
      "Sử dụng hệ thống quản lý tuyển dụng",
      "Xem ứng viên tiềm năng: 5 ứng viên",
    ],
    color: "gray",
  },
  {
    title: "Hội Viên Bạc",
    price: "747.500 VNĐ",
    oldPrice: null,
    discount: null,
    features: [
      "Trải nghiệm trong: 30 ngày",
      "Đăng tuyển: 3 vị trí",
      "Ứng viên gửi CV xem không giới hạn",
      "Sử dụng hệ thống quản lý tuyển dụng",
      "Xem ứng viên tiềm năng: 1 ứng viên",
    ],
    color: "purple",
  },
];

const PurchaseService = () => {
  const topPlan = plans[0];
  const bottomPlans = plans.slice(1);

  return (
    <div className="w-full px-6 py-10">
      <h1 className="text-3xl font-bold mb-2 text-center">Gói dịch vụ doanh nghiệp</h1>
      <p className="text-center text-gray-600 mb-8">
        Đăng ký gói dịch vụ ngay để sử dụng nhiều tính năng hấp dẫn
      </p>

      {/* GÓI TRÊN CÙNG - KIM CƯƠNG */}
      <div className="flex justify-center mb-10">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md relative">
          {topPlan.discount && (
            <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs px-2 py-1 rounded">
              Giảm giá đến {topPlan.discount}
            </span>
          )}
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-1">{topPlan.title}</h2>
            <p className="text-orange-600 text-2xl font-semibold">{topPlan.price}</p>
            {topPlan.oldPrice && (
              <p className="text-gray-400 line-through text-sm">{topPlan.oldPrice}</p>
            )}
          </div>
          <button
            className="w-full py-2 rounded font-semibold text-white mt-3 bg-blue-500 hover:bg-blue-600"
          >
            Nâng cấp ngay
          </button>
          <ul className="mt-5 space-y-2 text-sm text-gray-700">
            {topPlan.features.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3 GÓI BÊN DƯỚI */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-20">
        {bottomPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 relative "
          >
            {plan.discount && (
              <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs px-2 py-1 rounded">
                Giảm giá đến {plan.discount}
              </span>
            )}
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 mb-1">{plan.title}</h2>
              <p className="text-orange-600 text-2xl font-semibold">{plan.price}</p>
              {plan.oldPrice && (
                <p className="text-gray-400 line-through text-sm">{plan.oldPrice}</p>
              )}
            </div>
            <button
              className={`w-full py-2 rounded font-semibold text-white mt-3 ${
                plan.color === "yellow"
                  ? "bg-yellow-400 hover:bg-yellow-500"
                  : plan.color === "gray"
                  ? "bg-gray-400 hover:bg-gray-500"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              Nâng cấp ngay
            </button>
            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              {plan.features.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseService;
