import React from 'react'
import Google from '../../../assets/img/user/join/button_google.svg'

const Join = () => {
    return (
        <div className='Join_wrap'>
            <h2>회원가입</h2>
            <div className="google_wrap">
                <h3>
                    기본 정보 <strong>*</strong>
                </h3>
                <div>
                    <div className="google">
                        <img src={Google} alt="" />
                        <p>Google 로그인</p>
                        <div></div>
                    </div>
                    <p>완료</p>
                </div>
            </div>
            <div className="phone_wrap">
                <h3>휴대폰 번호 인증<strong>*</strong></h3>
                <p>전화번호를 등록하고 다가오는 일정을 SMS로 편하게 확인하세요.</p>
                <div className="phone">
                    <input type="text" placeholder="전화번호를 '-'를 제외하고 입력하세요." />
                    <button>인증번호 전송</button>
                </div>
            </div>
            <div className="check_wrap">
                <h3>이용약관동의 <strong>*</strong></h3>
                <div className="check">
                    <p>개인정보 공개에 모두 동의합니다.</p>
                    <input type="checkbox" id='check' />
                    <label htmlFor="check"></label>
                </div>
                <div className="check">
                    <div>
                        <p>[필수] ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㄹ</p>
                        <button>내용보기</button>
                    </div>
                    <input type="checkbox" id='check' />
                    <label htmlFor="check"></label>
                </div>
                <div className="check">
                    <div>
                        <p>[필수] ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㄹ</p>
                        <button>내용보기</button>
                    </div>
                    <input type="checkbox" id='check' />
                    <label htmlFor="check"></label>
                </div>
            </div>
        </div>
    )
}

export default Join