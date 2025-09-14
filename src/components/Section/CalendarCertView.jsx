import React, { useState } from "react";

// 더미 이벤트 데이터
const events = [
  { title: "요양보호사", category: "보건 / 의료", start: "2025-01-01" },
  { title: "정보처리기사", category: "IT / 컴퓨터", start: "2025-01-03" },
  { title: "토익(TOEIC)", category: "어학", start: "2025-01-05" },
  { title: "간호조무사", category: "보건 / 의료", start: "2025-01-10" },
  { title: "펀드투자권유자문인력", category: "금융", start: "2025-01-15" },
  { title: "한국사능력검정시험", category: "인문 / 사회", start: "2025-01-20" },
  { title: "컴퓨터활용능력", category: "IT / 컴퓨터", start: "2025-02-10" },
  { title: "JLPT(일본어)", category: "어학", start: "2025-03-07" },
  { title: "사회복지사", category: "보건 / 의료", start: "2025-05-12" },
  { title: "투자자산운용사", category: "금융", start: "2025-09-20" },
  { title: "OPIc(오픽)", category: "어학", start: "2025-11-10" },
  { title: "ADsP(데이터분석 준전문가)", category: "IT / 컴퓨터", start: "2025-12-05" },
];

export default function CalendarCertView() {
  const today = new Date();
  const [year] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth()); // 0=1월
  const [currentIndex, setCurrentIndex] = useState(0);

  const monthNames = [
    "1월","2월","3월","4월","5월","6월",
    "7월","8월","9월","10월","11월","12월"
  ];

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  const daysInMonth = getDaysInMonth(year, selectedMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const monthEvents = events.filter(
    (e) =>
      new Date(e.start).getFullYear() === year &&
      new Date(e.start).getMonth() === selectedMonth
  );

  const eventsByDate = days.reduce((acc, d) => {
    acc[d] = monthEvents.filter(
      (e) => new Date(e.start).getDate() === d
    );
    return acc;
  }, {});

  // 5개씩 이동
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 5 < 0 ? Math.max(monthEvents.length - 5, 0) : prev - 5
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 5 >= monthEvents.length ? 0 : prev + 5
    );
  };

  return (
    <div className="calendar-wrap">
      <div className="calendar-body">
        <h2 className="calendar-title">{year}년 자격증 일정</h2>
        <button className="category-filter-btn">카테고리 필터</button>

        {/* 월 row */}
        <div className="calendar-table">
          <div className="month-row">
            {monthNames.map((m, idx) => (
              <div
                key={idx}
                className={`month ${selectedMonth === idx ? "active" : ""}`}
                onClick={() => {
                  setSelectedMonth(idx);
                  setCurrentIndex(0);
                }}
              >
                {m}
              </div>
            ))}
          </div>

          {/* 날짜 row */}
          <div className="day-row">
            {days.map((d) => {
              const dayEvents = eventsByDate[d] || [];
              return (
                <div
                  key={d}
                  className={`day-cell ${dayEvents.length > 0 ? "has-event" : ""}`}
                >
                <div className="day-number">{d}</div>
                {dayEvents.length > 0 && (
                  <div className="dots">
                    {dayEvents.slice(0, 2).map((event, i) => {
                      const categoryClass = event.category.replace(/[^a-zA-Z가-힣]/g, "");
                      return <div key={i} className={`dot ${categoryClass}`} />;
                    })}
                  </div>
                  )}      
                </div>

              );
            })}
          </div>
        </div>

        {/* 카드뷰 */}
        <div className="cert-view-section">
          {monthEvents.length > 0 && (
            <div className="event-slider">
              <button className="left-arrow-btn" onClick={handlePrev}>
                {"<"}
              </button>
              <div className="event-cards">
                {monthEvents
                  .slice(currentIndex, currentIndex + 5)
                  .map((event, i) => (
                    <div key={i} className={`event-card ${event.category.replace(/[^a-zA-Z가-힣]/g, "")}`}>
                      <p className="category">{event.category}</p>
                      <h3 className="title">{event.title}</h3>
                      <p className="start-date">{event.start}</p>
                    </div>
                  ))}
              </div>
              <button className="right-arrow-btn" onClick={handleNext}>
                {">"}
              </button>
            </div>
          )}
          {monthEvents.length === 0 && (
            <div className="cert-view-none">
              <p>이 달에는 일정이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}