import React from 'react'
import Down from '../../assets/img/community/button_down.svg'
import { useNavigate } from 'react-router-dom'
import Pagenation from './Pagenation'

const Community = () => {
    const navigtaion = useNavigate();

    const onDetail = () => {
        navigtaion('/community/detail/1')
    }
    
    return (
        <div className='Community_wrap'>
            <div className="header">
                <h2>자격증 TALK</h2>
                <div className="search_wrap">
                    <button><img src="" alt="" /></button>
                    <input type="text" placeholder='궁금한 내용을 검색해보세요' />
                </div>
            </div>
            <div className="main">
                <div className="choose_wrap">
                    <div className="left">
                        <div className='choose'>
                            <select name="" id="">
                                <option value="">유형 선택</option>
                            </select>
                            <img src={Down} alt="" />
                        </div>
                        <div className='choose'>
                            <select name="" id="">
                                <option value="">카테고리 선택</option>
                            </select>
                            <img src={Down} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <button className='choose click'>추천순</button>
                        <button className='choose'>최신순</button>
                    </div>
                </div>
                <div className="data_wrap">
                    <div className="top">
                        <div className='number'></div>
                        <div className="kind">유형</div>
                        <div className="cate">카테고리</div>
                        <div className="title">제목</div>
                        <div className="writer">작성자</div>
                        <div className="see">조회수</div>
                        <div className="date">작성일</div>
                    </div>
                    <div className="list_wrap">
                        <div className="list" onClick={() => { onDetail() }}>
                            <div className='number'>10</div>
                            <div className="kind">질문</div>
                            <div className="cate">IT / 컴퓨터</div>
                            <div className="title">
                                <p>일반기계기사 난이도 어떤가요?</p>
                                <p className="comment">[3]</p>
                            </div>
                            <div className="writer">user</div>
                            <div className="see">445,555</div>
                            <div className="date">2025.08.01</div>
                        </div>
                        <div className="list" onClick={() => { onDetail() }}>
                            <div className='number'>10</div>
                            <div className="kind">질문</div>
                            <div className="cate">IT / 컴퓨터</div>
                            <div className="title">
                                <p>일반기계기사 난이도 어떤가요?</p>
                                <p className="comment">[3]</p>
                            </div>
                            <div className="writer">user</div>
                            <div className="see">445,555</div>
                            <div className="date">2025.08.01</div>
                        </div>
                        <div className="list" onClick={() => { onDetail() }}>
                            <div className='number'>10</div>
                            <div className="kind">질문</div>
                            <div className="cate">IT / 컴퓨터</div>
                            <div className="title">
                                <p>일반기계기사 난이도 어떤가요?</p>
                                <p className="comment">[3]</p>
                            </div>
                            <div className="writer">user</div>
                            <div className="see">445,555</div>
                            <div className="date">2025.08.01</div>
                        </div>
                        <div className="list" onClick={() => { onDetail() }}>
                            <div className='number'>10</div>
                            <div className="kind">질문</div>
                            <div className="cate">IT / 컴퓨터</div>
                            <div className="title">
                                <p>일반기계기사 난이도 어떤가요?</p>
                                <p className="comment">[3]</p>
                            </div>
                            <div className="writer">user</div>
                            <div className="see">445,555</div>
                            <div className="date">2025.08.01</div>
                        </div>
                        <div className="list" onClick={() => { onDetail() }}>
                            <div className='number'>10</div>
                            <div className="kind">질문</div>
                            <div className="cate">IT / 컴퓨터</div>
                            <div className="title">
                                <p>일반기계기사 난이도 어떤가요?</p>
                                <p className="comment">[3]</p>
                            </div>
                            <div className="writer">user</div>
                            <div className="see">445,555</div>
                            <div className="date">2025.08.01</div>
                        </div>
                        <div className="list" onClick={() => { onDetail() }}>
                            <div className='number'>10</div>
                            <div className="kind">질문</div>
                            <div className="cate">IT / 컴퓨터</div>
                            <div className="title">
                                <p>일반기계기사 난이도 어떤가요?</p>
                                <p className="comment">[3]</p>
                            </div>
                            <div className="writer">user</div>
                            <div className="see">445,555</div>
                            <div className="date">2025.08.01</div>
                        </div>
                        <div className="list" onClick={() => { onDetail() }}>
                            <div className='number'>10</div>
                            <div className="kind">질문</div>
                            <div className="cate">IT / 컴퓨터</div>
                            <div className="title">
                                <p>일반기계기사 난이도 어떤가요?</p>
                                <p className="comment">[3]</p>
                            </div>
                            <div className="writer">user</div>
                            <div className="see">445,555</div>
                            <div className="date">2025.08.01</div>
                        </div>
                        <div className="list" onClick={() => { onDetail() }}>
                            <div className='number'>10</div>
                            <div className="kind">질문</div>
                            <div className="cate">IT / 컴퓨터</div>
                            <div className="title">
                                <p>일반기계기사 난이도 어떤가요?</p>
                                <p className="comment">[3]</p>
                            </div>
                            <div className="writer">user</div>
                            <div className="see">445,555</div>
                            <div className="date">2025.08.01</div>
                        </div>
                        <div className="list" onClick={() => { onDetail() }}>
                            <div className='number'>10</div>
                            <div className="kind">질문</div>
                            <div className="cate">IT / 컴퓨터</div>
                            <div className="title">
                                <p>일반기계기사 난이도 어떤가요?</p>
                                <p className="comment">[3]</p>
                            </div>
                            <div className="writer">user</div>
                            <div className="see">445,555</div>
                            <div className="date">2025.08.01</div>
                        </div>
                        <div className="list" onClick={() => { onDetail() }}>
                            <div className='number'>10</div>
                            <div className="kind">질문</div>
                            <div className="cate">IT / 컴퓨터</div>
                            <div className="title">
                                <p>일반기계기사 난이도 어떤가요?</p>
                                <p className="comment">[3]</p>
                            </div>
                            <div className="writer">user</div>
                            <div className="see">445,555</div>
                            <div className="date">2025.08.01</div>
                        </div>
                    </div>
                </div>
                <div className="btn_wrap">
                    <button>글쓰기</button>
                </div>
                <Pagenation />
            </div>
        </div>
    )
}

export default Community