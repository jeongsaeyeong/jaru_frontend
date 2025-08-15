import React, { useState } from 'react'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Search from '../../../assets/img/license/button_search.svg'
import Reset from '../../../assets/img/license/button_reset.svg'
import Book from '../../../assets/img/license/button_book.svg'
import BookClick from '../../../assets/img/license/button_book_click.svg'

const License_Month = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='License_Month_wrap'>
            <div className="left">
                <div className="month">
                    <Calendar
                        value={value}
                        onChange={onChange}
                        formatDay={(locale, date) => date.getDate()}
                    ></Calendar>
                    <div className="plus">
                        <div className="top">
                            <button><img src={Book} alt="" /></button>
                            <h3>빅데이터분석기사 제11회 필기시험 원서접수</h3>
                        </div>
                        <p>2025년 8월 4일(월) ~ 8월 8일(금)</p>
                    </div>
                    <div className="another">
                        <h2>관련 일정</h2>
                        <div className="plus">
                            <div className="top">
                                <button><img src={Book} alt="" /></button>
                                <h3>빅데이터분석기사 제11회 필기시험 원서접수</h3>
                            </div>
                            <p>2025년 8월 4일(월) ~ 8월 8일(금)</p>
                        </div>
                        <div className="plus">
                            <div className="top">
                                <button><img src={Book} alt="" /></button>
                                <h3>빅데이터분석기사 제11회 필기시험 원서접수</h3>
                            </div>
                            <p>2025년 8월 4일(월) ~ 8월 8일(금)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>월간 자격증 일정</h2>
                <div className="tage_wrap">
                    <button className='click'>전체</button>
                    <button>IT / 컴퓨터</button>
                    <button>어학</button>
                    <button>디자인 / 영상</button>
                    <button>보건 / 의료</button>
                    <button>경영 / 회계</button>
                    <button>조리 / 미용</button>
                    <button>전기 / 전자</button>
                    <button>운전 / 운송</button>
                    <button>화학 / 바이오</button>
                    <button>영업판매</button>
                </div>
                <div className="search_wrap">
                    <div>
                        <input type="text" placeholder='자격명을 입력하세요' />
                        <button><img src={Search} alt="" /></button>
                    </div>
                    <button><img src={Reset} alt="" /></button>
                </div>
                <div className="list_wrap">
                    <div className="list">
                        <p className="date">08.01(목)</p>
                        <div className="info">
                            <div>
                                <div className="tage">시험</div>
                                <button><img src={BookClick} alt="" /></button>
                                <p>기사 제2회 실기시험</p>
                            </div>
                            <div>
                                <div className="tage">시험</div>
                                <button><img src={Book} alt="" /></button>
                                <p>기사 제2회 실기시험</p>
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
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        <p className="date">08.01(목)</p>
                        <div className="info">
                            <div>
                                <div className="tage">시험</div>
                                <button><img src={Book} alt="" /></button>
                                <p>기사 제2회 실기시험</p>
                            </div>
                            <div>
                                <div className="tage get">접수</div>
                                <button><img src={Book} alt="" /></button>
                                <p>기사 제2회 실기시험</p>
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        <p className="date">08.01(목)</p>
                        <div className="info">
                            <div>
                                <div className="tage">시험</div>
                                <button><img src={Book} alt="" /></button>
                                <p>기사 제2회 실기시험</p>
                            </div>
                            <div>
                                <div className="tage get">접수</div>
                                <button><img src={Book} alt="" /></button>
                                <p>기사 제2회 실기시험</p>
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        <p className="date">08.01(목)</p>
                        <div className="info">
                            <div>
                                <div className="tage">시험</div>
                                <button><img src={Book} alt="" /></button>
                                <p>기사 제2회 실기시험</p>
                            </div>
                            <div>
                                <div className="tage get">접수</div>
                                <button><img src={Book} alt="" /></button>
                                <p>기사 제2회 실기시험</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default License_Month