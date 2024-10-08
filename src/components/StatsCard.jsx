import React from "react";
import { PiStudentDuotone } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiFileList2Line, RiContractLine } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";

function StatsCard({ governorate, students, teachers, courses, presentStudents, ongoingCourses }) {
  return (
    <div className="max-w-lg mx-auto my-4 p-4 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-medium text-center text-gray-700 mb-4">{governorate} - إحصائيات المحافظة</h2>
      <div className="grid grid-cols-3 gap-2 text-center">
        
        {/* عدد الطلبة */}
        <div className="bg-[#ECF2F5] text-[#1B3E5D] p-3 rounded-lg">
          <p className="text-3xl">
            <PiStudentDuotone />
          </p>
          <h3 className="text-lg mt-2">عدد الطلبة</h3>
          <p className="text-lg font-semibold">{students}</p>
        </div>

 
        {/* عدد الأساتذة */}
        <div className="bg-[#ECF2F5] text-[#1B3E5D] p-4 rounded-lg">
          <p className="text-4xl">
            <FaChalkboardTeacher />
          </p>
          <h3 className="text-lg mt-2">عدد الأساتذة</h3>
          <p className="text-xl font-semibold">{teachers}</p>
        </div>

        {/* عدد الدورات */}
        <div className="bg-[#ECF2F5] text-[#1B3E5D] p-4 rounded-lg">
          <p className="text-4xl">
            <RiFileList2Line />
          </p>
          <h3 className="text-lg mt-2">عدد الدورات</h3>
          <p className="text-xl font-semibold">{courses}</p>
        </div>

        {/* الطلبة الحاضرين */}
        <div className="bg-[#ECF2F5] text-[#1B3E5D] p-4 rounded-lg">
          <p className="text-4xl">
            <BsFillPeopleFill />
          </p>
          <h3 className="text-lg mt-2">الطلبة الحاضرين</h3>
          <p className="text-xl font-semibold">{presentStudents}</p>
        </div>

        {/* الدورات المقامة */}
        <div className=" text-[#1B3E5D] p-4 rounded-lg bg-[#ECF2F5] col-span-2">
          <p className="text-4xl">
            <RiContractLine />
          </p>
          <h3 className="text-lg mt-2">الدورات المقامة</h3>
          <p className="text-xl font-semibold">{ongoingCourses}</p>
        </div>

      </div>
    </div>
  );
}

export default StatsCard;
