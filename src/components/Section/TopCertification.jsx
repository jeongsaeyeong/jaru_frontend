import React, { useState } from "react";

// 더미 데이터
const dummyCertifications = [
  { id: 1, title: "정보처리기사", category: "IT / 컴퓨터", period: "2025-03-01 ~ 2025-03-10" },
  { id: 2, title: "빅데이터분석기사", category: "IT / 컴퓨터", period: "2025-06-01 ~ 2025-06-05" },
  { id: 3, title: "토익(TOEIC)", category: "어학", period: "상시" },
  { id: 4, title: "토플(TOEFL)", category: "어학", period: "상시" },
  { id: 5, title: "그래픽스운용기능사", category: "디자인 / 영상", period: "2025-04-10 ~ 2025-04-15" },
  { id: 6, title: "멀티미디어콘텐츠제작전문가", category: "디자인 / 영상", period: "2025-07-01 ~ 2025-07-05" },
  { id: 7, title: "요양보호사", category: "보건 / 의료", period: "2025-04-01 ~ 2025-04-05" },
  { id: 8, title: "간호조무사", category: "보건 / 의료", period: "2025-05-01 ~ 2025-05-10" },
  { id: 9, title: "펀드투자권유자문인력", category: "금융 / 회계", period: "2025-07-01 ~ 2025-07-05" },
  { id: 10, title: "재무관리사", category: "금융 / 회계", period: "2025-08-01 ~ 2025-08-05" },
  { id: 11, title: "조리기능사", category: "조리 / 미용", period: "2025-09-01 ~ 2025-09-05" },
  { id: 12, title: "미용사(일반)", category: "조리 / 미용", period: "2025-09-10 ~ 2025-09-15" },
  { id: 13, title: "전기기사", category: "전기 / 전자", period: "2025-10-01 ~ 2025-10-10" },
  { id: 14, title: "전자기사", category: "전기 / 전자", period: "2025-10-15 ~ 2025-10-20" },
  { id: 15, title: "운전면허 1종 대형", category: "운전 / 운송", period: "상시" },
  { id: 16, title: "화물운송종사자격증", category: "운전 / 운송", period: "2025-11-01 ~ 2025-11-05" },
];


const jobCategories = [
  "IT / 컴퓨터",
  "어학",
  "디자인 / 영상",
  "보건 / 의료",
  "금융 / 회계",
  "조리 / 미용",
  "전기 / 전자",
  "운전 / 운송",
];


export default function TopCertification() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filteredCerts =
    activeCategory === "전체"
      ? dummyCertifications
      : dummyCertifications.filter((c) => c.category === activeCategory);

  // 4개까지만 보여주기
  const displayedCerts = filteredCerts.slice(0, 4);

  return (
    <div className="top-certifications">
      {/* 제목 + 탭 */}
      <div className="title-bar">
        <div className="title">직무별 TOP 자격증</div>
        <div className="tabs">
          {jobCategories.map((cat) => (
            <button
              key={cat}
              className={`tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 카드 리스트 */}
      <div className="certifications-card-list">
        {displayedCerts.length > 0 ? (
          displayedCerts.map((cert) => (
            <div key={cert.id} className="card">
              <div className="card-text">
                <div className="card-title">{cert.title}</div>
                <div className="card-period">{cert.period}</div>
              </div>
              <div className="card-arrow">→</div>
            </div>
          ))
        ) : (
          <p>해당 직무의 자격증이 없습니다.</p>
        )}
      </div>

    <button className="more-btn">더 많은 자격증 보러가기</button>
    </div>
  );
}