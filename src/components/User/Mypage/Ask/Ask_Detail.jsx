import React from 'react'
import Left from '../../../../assets/img/community/button_left.svg'
import Down from '../../../../assets/img/community/button_down.svg'
import Up from '../../../../assets/img/community/button_up.svg'

const Ask_Detail = () => {
    return (
        <div className='Ask_Detail_wrap Detail_wrap'>
            <div className="header">
                <div className="left">
                    <button><img src={Left} alt="" /><p>목록</p></button>
                </div>
                <div className="right">
                    <button><img src={Up} alt="" /><p>이전글</p></button>
                    <button><img src={Down} alt="" /><p>다음글</p></button>
                </div>
            </div>
            <div className="main">
                <div className="question">
                    <div className="my">
                        <h2>내 문의</h2>
                        <p className="date">2025.08.01</p>
                    </div>
                    <div className="title">질문</div>
                    <div className="content">하나의 서비스 계정에 여러 개의 구글 계정을 연도할 수 있나요?</div>
                </div>
                <div className="answer">
                    <h2>답변</h2>
                    <div className="content">
                        현재 하나의 서비스 계정에는 기본적으로 하나의 구글 계정만 연동할 수 있습니다.<br />
                        여러 개의 구글 계정을 동시에 연결하는 기능은 지원되지 않습니다.<br /><br />

                        다만, 필요에 따라 다른 구글 계정을 이용하시려면 기존 계정의 연동을 해제한 뒤 새 계정을 연결하실 수 있습니다.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ask_Detail