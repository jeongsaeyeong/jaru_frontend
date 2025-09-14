import React from 'react'
import Right from '../../../../assets/img/user/mypage/ask/button_right.svg'
import Down from '../../../../assets/img/user/mypage/ask/button_down.svg'

const Ask_Write = () => {
    return (
        <div className='Ask_Write_wrap'>
            <div className="header">
                <img src={Right} alt="" />
                <h2>마이페이지</h2>
            </div>
            <div className="main">
                <div className="top">
                    <h2>문의하기</h2>
                    <p>JARU 이용 중에 생긴 불편한 점이나 문의사항을 보내주세요</p>
                </div>
                <div className="bottom">
                    <div className="ask">
                        <div>
                            <h2>이메일</h2>
                            <div>
                                <input type="checkbox" id='check' />
                                <label htmlFor="check"></label>
                                <p>답변 알림 이메일로 받기</p>
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder='이메일을 입력하세요' />
                            <button>변경</button>
                        </div>
                    </div>
                    <div className="ask">
                        <div>
                            <h2>연락처</h2>
                            <div>
                                <input type="checkbox" id='check' />
                                <label htmlFor="check"></label>
                                <p>답변 알림 SMS로 받기</p>
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder='이메일을 입력하세요' />
                            <button>변경</button>
                        </div>
                    </div>
                    <div className="ask">
                        <div>
                            <h2>문의 유형</h2>
                        </div>
                        <div>
                            <select name="" id="">
                                <option value="">유형을 선택해주세요</option>
                            </select>
                            <img src={Down} alt="" />
                        </div>
                    </div>
                    <div className="ask">
                        <div>
                            <h2>내용</h2>
                        </div>
                        <textarea name="" id="" placeholder='내용을 작성해주세요'></textarea>
                    </div>
                    <button>보내기</button>
                </div>
            </div>
        </div>
    )
}

export default Ask_Write