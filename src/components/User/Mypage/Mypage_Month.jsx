import React, { useState } from 'react'
import Bell from '../../../assets/img/license/button_bell.svg'
import BellFull from '../../../assets/img/license/button_bell_full.svg'
import BookClick from '../../../assets/img/license/button_book_click.svg'
import Calendar from 'react-calendar'

const Mypage_Month = () => {
    const [click, setClick] = useState(false)
    const [value, onChange] = useState(new Date());

    return (
        <div className='Mypage_Month_wrap License_Month_wrap'>
            <div className="left">
                <div className="month">
                    <Calendar
                        value={value}
                        onChange={onChange}
                        formatDay={(locale, date) => date.getDate()}
                    ></Calendar>
                </div>
            </div>
            <div className="right">
                <h2>MY 자격증 일정</h2>
                <div className='btn_wrap'>
                    <button className={click && 'click'} onClick={() => { setClick(!click) }}>알림 설정한 일정만 보기</button>
                </div>

                {click ? (

                    <div className="list_wrap">
                        <div className="list">
                            <p className="date">08.01(목)</p>
                            <div className="info">
                                <div>
                                    <div className="tage">시험</div>
                                    <button><img src={BookClick} alt="" /></button>
                                    <p>기사 제2회 실기시험</p>
                                    <button><img src={BellFull} alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <p className="date">08.01(목)</p>
                            <div className="info">
                                <div>
                                    <div className="tage">시험</div>
                                    <button><img src={BookClick} alt="" /></button>
                                    <p>기사 제2회 실기시험</p>
                                    <button><img src={BellFull} alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <p className="date">08.01(목)</p>
                            <div className="info">
                                <div>
                                    <div className="tage">시험</div>
                                    <button><img src={BookClick} alt="" /></button>
                                    <p>기사 제2회 실기시험</p>
                                    <button><img src={BellFull} alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (

                    <div className="list_wrap">
                        <div className="list">
                            <p className="date">08.01(목)</p>
                            <div className="info">
                                <div className='click'>
                                    <div className="tage">시험</div>
                                    <button><img src={BookClick} alt="" /></button>
                                    <p>기사 제2회 실기시험</p>
                                    <button><img src={Bell} alt="" /></button>
                                </div>
                                <div>
                                    <div className="tage">시험</div>
                                    <button><img src={BookClick} alt="" /></button>
                                    <p>기사 제2회 실기시험</p>
                                    <button><img src={Bell} alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <p className="date">08.01(목)</p>
                            <div className="info">
                                <div>
                                    <div className="tage">시험</div>
                                    <button><img src={BookClick} alt="" /></button>
                                    <p>기사 제2회 실기시험</p>
                                    <button><img src={Bell} alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <p className="date">08.01(목)</p>
                            <div className="info">
                                <div>
                                    <div className="tage">시험</div>
                                    <button><img src={BookClick} alt="" /></button>
                                    <p>기사 제2회 실기시험</p>
                                    <button><img src={Bell} alt="" /></button>
                                </div>
                                <div>
                                    <div className="tage get">접수</div>
                                    <button><img src={BookClick} alt="" /></button>
                                    <p>기사 제2회 실기시험</p>
                                    <button><img src={Bell} alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <p className="date">08.01(목)</p>
                            <div className="info">
                                <div>
                                    <div className="tage">시험</div>
                                    <button><img src={BookClick} alt="" /></button>
                                    <p>기사 제2회 실기시험</p>
                                    <button><img src={Bell} alt="" /></button>
                                </div>
                                <div>
                                    <div className="tage get">접수</div>
                                    <button><img src={BookClick} alt="" /></button>
                                    <p>기사 제2회 실기시험</p>
                                    <button><img src={Bell} alt="" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <p className="date">08.01(목)</p>
                            <div className="info">
                                <div>
                                    <div className="tage">시험</div>
                                    <button><img src={BookClick} alt="" /></button>
                                    <p>기사 제2회 실기시험</p>
                                    <button><img src={Bell} alt="" /></button>
                                </div>
                                <div>
                                    <div className="tage get">접수</div>
                                    <button><img src={BookClick} alt="" /></button>
                                    <p>기사 제2회 실기시험</p>
                                    <button><img src={Bell} alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Mypage_Month