import React from 'react'
import Pagenation from '../../../Community/Pagenation'
import Right from '../../../../assets/img/user/mypage/ask/button_right.svg'
import Down from '../../../../assets/img/user/mypage/ask/button_down.svg'
import { useNavigate } from 'react-router-dom'

const Ask = () => {
    const navigation = useNavigate();

    const onDetail = () => {
        navigation('/ask/detail/1')
    }

    const onWrite = () =>{
        navigation('/ask/write')
    }

    return (
        <div className='Ask_wrap'>
            <div className="header">
                <img src={Right} alt="" />
                <h2>마이페이지</h2>
            </div>
            <div className="main">
                <h2>문의하기</h2>
                <div className="btn_wrap">
                    <div className="left">
                        <select name="" id="">
                            <option value="">유형 선택</option>
                        </select>
                        <img src={Down} alt="" />
                    </div>
                    <button>문의하기</button>
                </div>
                <div className="list_wrap">
                    <div className="top">
                        <div className="kind">유형</div>
                        <div className="title">내용</div>
                        <div className="date">작성일</div>
                        <div className="ing">처리상태</div>
                    </div>
                    <div onClick={() => { onDetail() }} className="list">
                        <div className="kind">오류</div>
                        <div className="title">실행 시 계정 변경시 계속 오류가 발생합니다</div>
                        <div className="date">2025.08.01</div>
                        <div className="ing">처리중</div>
                    </div>
                    <div onClick={() => { onDetail() }} className="list">
                        <div className="kind">오류</div>
                        <div className="title">실행 시 계정 변경시 계속 오류가 발생합니다</div>
                        <div className="date">2025.08.01</div>
                        <div className="ing">처리중</div>
                    </div>
                    <div onClick={() => { onDetail() }} className="list">
                        <div className="kind">오류</div>
                        <div className="title">실행 시 계정 변경시 계속 오류가 발생합니다</div>
                        <div className="date">2025.08.01</div>
                        <div className="ing">처리중</div>
                    </div>
                    <div onClick={() => { onDetail() }} className="list">
                        <div className="kind">오류</div>
                        <div className="title">실행 시 계정 변경시 계속 오류가 발생합니다</div>
                        <div className="date">2025.08.01</div>
                        <div className="ing done">처리완료</div>
                    </div>
                    <div onClick={() => { onDetail() }} className="list">
                        <div className="kind">오류</div>
                        <div className="title">실행 시 계정 변경시 계속 오류가 발생합니다</div>
                        <div className="date">2025.08.01</div>
                        <div className="ing done">처리완료</div>
                    </div>
                </div>
                <Pagenation />
            </div>
        </div>
    )
}

export default Ask