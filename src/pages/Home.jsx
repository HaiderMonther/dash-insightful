import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  isValid,
  startOfToday,
} from "date-fns";
import { arSA } from "date-fns/locale";
import { useState } from "react";
import { PiStudentDuotone } from "react-icons/pi";
import { RiContractLine } from "react-icons/ri";
import StatsCard from "../components/StatsCard";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Home() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);


  let [currentMonth, setCurrentMonth] = useState(
    format(today, "yyyy-MM", { locale: arSA })
  );

  let firstDayCurrentMonth = parse(currentMonth, "yyyy-MM", new Date(), {
    locale: arSA,
  });

  if (!isValid(firstDayCurrentMonth)) {
    firstDayCurrentMonth = today;
  }

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPrevMonth, "yyyy-MM", { locale: arSA }));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "yyyy-MM", { locale: arSA }));
  }

  return (
    <>
      <div className="pt-16">
        <div
          className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6"
          dir="ltr"
        >
          <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
            <div className="md:pr-14">
              <div className="flex items-center">
                <h2 className="flex-auto font-semibold text-gray-900">
                  {isValid(firstDayCurrentMonth)
                    ? format(firstDayCurrentMonth, "MMMM yyyy", {
                        locale: arSA,
                      })
                    : "Invalid Date"}
                </h2>
                <button
                  type="button"
                  onClick={previousMonth}
                  className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Previous month</span>
                  <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  onClick={nextMonth}
                  type="button"
                  className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Next month</span>
                  <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
              <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                <div>الأحد</div>
                <div>الاثنين</div>
                <div>الثلاثاء</div>
                <div>الأربعاء</div>
                <div>الخميس</div>
                <div>الجمعة</div>
                <div>السبت</div>
              </div>
              <div className="grid grid-cols-7 mt-2 text-sm">
                {days.map((day, dayIdx) => (
                  <div
                    key={day.toString()}
                    className={classNames(
                      dayIdx === 0 && colStartClasses[getDay(day)],
                      "py-1.5"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={classNames(
                        isEqual(day, selectedDay) && "text-white",
                        !isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "bg-[#1B3E5D]",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          isSameMonth(day, firstDayCurrentMonth) &&
                          "text-gray-900",
                        !isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          !isSameMonth(day, firstDayCurrentMonth) &&
                          "text-gray-400",
                        isEqual(day, selectedDay) &&
                          isToday(day) &&
                          "bg-[#1B3E5D]",
                        isEqual(day, selectedDay) &&
                          !isToday(day) &&
                          "bg-gray-900",
                        !isEqual(day, selectedDay) && "hover:bg-gray-500",
                        (isEqual(day, selectedDay) || isToday(day)) &&
                          "font-semibold",
                        "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                      )}
                    >
                      <time dateTime={format(day, "yyyy-MM-dd")}>
                        {format(day, "d")}
                      </time>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-around" dir="rtl">
              <div className=" bg-[#ffffff] rounded p-3 w-36 text-lg items-center flex flex-col justify-center text-[#1B3E5D] font-light">
                <p className="text-4xl">
                  <PiStudentDuotone />
                </p>
                <h2 className=" text-center text-base mt-1 ">
                  الطلبة الحاضرين لهذا اليوم
                </h2>
                <p>12</p>
              </div>
              <div className=" bg-[#ffffff] p-3 rounded w-36 text-lg items-center flex flex-col  justify-center text-[#1B3E5D]">
                <p className="text-4xl">
                  <RiContractLine />
                </p>
                <h2 className=" text-center text-base mt-1 ">
                  الدورات المقامة اليوم
                </h2>
                <p>12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div>
        <StatsCard
          governorate="بغداد"
          students={5000}
          teachers={300}
          courses={50}
          presentStudents={4500}
          ongoingCourses={5}
        />
        <StatsCard
          governorate="النجف"
          students={5000}
          teachers={300}
          courses={50}
          presentStudents={4500}
          ongoingCourses={5}
        />
    </div>
    </>
  );
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default Home;
