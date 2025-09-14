import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login_wrap">
      <div className="login-box">
        <div className="login-title">로그인</div>
        <h2 className="login-info">자격증 루트 알리미 자루에 오신 걸 환영합니다!</h2>
        <h2 className="login-info">로그인하고 더 다양한 서비스를 즐겨보세요</h2>

        {/* 구글 로그인 버튼 */}
        <button className="login-btn">
          <FcGoogle size={20} />
          <span>구글로 계속하기</span>
        </button>

        <div className="sign-up-section">
          <h2 className="sign-up-info">JARU가 처음이신가요?</h2>
          <Link className="sign-up-btn" to="/signup">
            회원가입하러 가기
          </Link>
        </div>
      </div>
    </div>
  );
}