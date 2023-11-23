import React from "react";

function HomeDashboard() {
  const date = new Date();

  return (
    <div className="w-full bg-[#43637A] p-10">
      <div className="flex justify-between max-h-[400px]">
        <div className="bg-gega-white flex items-start justify-between max-w-[400px] p-3 gap-2">
          <div className="min-w-[100px] h-auto">
            <img
              src="student-profile.jpeg"
              alt=""
              className="w-full h-full rounded-[10px]"
            />
          </div>
          <div className="flex justify-between items-start flex-col pr-5">
            <p className="text-xl font-semibold">Senan Memmedov</p>
            <p className="text-[10px]">İnformasiya Texnologiyaları</p>
            <p className="text-[12px] pt-3">Tələbə</p>
            <p className="text-[10px]">
              {date.getFullYear()} - {date.getMonth() + 1} - {date.getDate()}
            </p>
          </div>
        </div>
        <div className="min-w-[50px]">
          <img src="avatar.png" className="w-[80%] h-auto" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
