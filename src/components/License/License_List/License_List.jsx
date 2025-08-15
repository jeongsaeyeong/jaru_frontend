import React from 'react'
import Book from '../../../assets/img/license/button_book.svg'
import BookClick from '../../../assets/img/license/button_book_click.svg'
import Search from '../../../assets/img/license/button_search_white.svg'
import { useNavigate } from 'react-router-dom'

const License_List = () => {
    const navigation = useNavigate();

    const onDetail = () =>{
        navigation('/license_detail/1')
    }

    return (
        <div className='License_List_wrap'>
            <div className="license_list">
                <div className="header">
                    <h2>다가오는 자격증</h2>
                    <h2 className="gray">직무별 TOP 자격증</h2>
                </div>
                <div className="list_wrap">
                    <div className="list" onClick={()=>{(onDetail())}}>
                        <div className="top">
                            <h3>정보처리기사</h3>
                            <button><img src={Book} alt="" /></button>
                        </div>
                        <div className="bottom">
                            <div className='top'>
                                <p className='left'>접수일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                            <div>
                                <p className='left'>시험일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                        </div>
                    </div>
                    <div className="list" onClick={()=>{(onDetail())}}>
                        <div className="top">
                            <h3>정보처리기사</h3>
                            <button><img src={Book} alt="" /></button>
                        </div>
                        <div className="bottom">
                            <div className='top'>
                                <p className='left'>접수일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                            <div>
                                <p className='left'>시험일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                        </div>
                    </div>
                    <div className="list" onClick={()=>{(onDetail())}}>
                        <div className="top">
                            <h3>정보처리기사</h3>
                            <button><img src={Book} alt="" /></button>
                        </div>
                        <div className="bottom">
                            <div className='top'>
                                <p className='left'>접수일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                            <div>
                                <p className='left'>시험일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                        </div>
                    </div>
                    <div className="list" onClick={()=>{(onDetail())}}>
                        <div className="top">
                            <h3>정보처리기사</h3>
                            <button><img src={Book} alt="" /></button>
                        </div>
                        <div className="bottom">
                            <div className='top'>
                                <p className='left'>접수일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                            <div>
                                <p className='left'>시험일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                        </div>
                    </div>
                    <div className="list" onClick={()=>{(onDetail())}}>
                        <div className="top">
                            <h3>정보처리기사</h3>
                            <button><img src={BookClick} alt="" /></button>
                        </div>
                        <div className="bottom">
                            <div className='top'>
                                <p className='left'>접수일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                            <div>
                                <p className='left'>시험일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                        </div>
                    </div>
                    <div className="list" onClick={()=>{(onDetail())}}>
                        <div className="top">
                            <h3>정보처리기사</h3>
                            <button><img src={Book} alt="" /></button>
                        </div>
                        <div className="bottom">
                            <div className='top'>
                                <p className='left'>접수일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                            <div>
                                <p className='left'>시험일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                        </div>
                    </div>
                    <div className="list" onClick={()=>{(onDetail())}}>
                        <div className="top">
                            <h3>정보처리기사</h3>
                            <button><img src={Book} alt="" /></button>
                        </div>
                        <div className="bottom">
                            <div className='top'>
                                <p className='left'>접수일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                            <div>
                                <p className='left'>시험일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                        </div>
                    </div>
                    <div className="list" onClick={()=>{(onDetail())}}>
                        <div className="top">
                            <h3>정보처리기사</h3>
                            <button><img src={Book} alt="" /></button>
                        </div>
                        <div className="bottom">
                            <div className='top'>
                                <p className='left'>접수일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                            <div>
                                <p className='left'>시험일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                        </div>
                    </div>
                    <div className="list" onClick={()=>{(onDetail())}}>
                        <div className="top">
                            <h3>정보처리기사</h3>
                            <button><img src={Book} alt="" /></button>
                        </div>
                        <div className="bottom">
                            <div className='top'>
                                <p className='left'>접수일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                            <div>
                                <p className='left'>시험일</p>
                                <p className='right'>2025.08.01</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="category_wrap">
                <div className="category">
                    <h2>카테고리</h2>
                    <button className='click'>IT / 컴퓨터</button>
                    <button>어학</button>
                    <button>디자인 / 영상</button>
                    <button>보건 / 의료</button>
                    <button className='click'>금융 / 회계</button>
                    <button>조리 / 미용</button>
                    <button>전기 / 전자</button>
                    <button className='last'>운전 / 운송</button>
                </div>
                <button>
                    <img src={Search} alt="" />
                    <p>조회하기</p>
                </button>
            </div>
        </div>
    )
}

export default License_List