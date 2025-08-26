import React from "react";

const PostView = () => {
    
  const posts = [
    { type: "후기", category: "어학", title: "이번 토익이 많이 어려웠나요?" },
    { type: "팁", category: "IT / 컴퓨터", title: "정보처리기사 정답 공유합니다" },
    { type: "질문", category: "어학", title: "이번 토익이 많이 어려웠나요?" },
    { type: "자유", category: "IT / 컴퓨터", title: "정보처리기사 정답 공유합니다" },
  ];

  return (
    <section className="post-view">
      <div className="post-header">
        <h2 className="post-title">자격증 TALK</h2>
        <p className="post-subtitle">BEST 게시글</p>
      </div>

      <table className="post-table">
        <tbody>
          {posts.map((post, idx) => (
            <tr key={idx}>
              <td className="post-type">{post.type}</td>
              <td className="post-icon">≫</td>
              <td className="post-category">{post.category}</td>
              <td className="post-divider">|</td>
              <td className="post-badge">BEST</td>
              <td className="post-title-text">{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="post-footer">
        <button className="post-more-btn">더 많은 게시글 보러가기</button>
      </div>
    </section>
  );
};

export default PostView;