import React from 'react'
import Left from '../../assets/img/community/button_left.svg'
import Right from '../../assets/img/community/button_right.svg'
import Down from '../../assets/img/community/button_down.svg'
import Up from '../../assets/img/community/button_up.svg'
import Con from '../../assets/img/community/button_controll.svg'
import Profile from '../../assets/img/community/img_profile.svg'
import Modify from '../../assets/img/community/button_modify.svg'
import Delete from '../../assets/img/community/button_delete.svg'
import Good from '../../assets/img/community/button_good.svg'
import GoodClick from '../../assets/img/community/button_good_click.svg'
import Pagenation from './Pagenation'
import { useNavigate } from 'react-router-dom'

const Detail = () => {
    const navigation = useNavigate();

    const onWrite = () => {
        navigation('/community/write')
    }

    return (
        <div className='Detail_wrap'>
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
                <div className="content_wrap">
                    <p className="tage">전체</p>
                    <div className='t_wrap'>
                        <h2 className="title">일반기계기사 난이도 어떤 가요?</h2>
                        <div className="btn_wrap">
                            <button className="modify"><img src={Modify} alt="" /></button>
                            <button className="delete"><img src={Delete} alt="" /></button>
                        </div>
                    </div>
                    <div className="info">
                        <img src={Profile} alt="" />
                        <p className="name">USER1</p>
                        <p className="time">2025.08.01 13:33</p>
                        <p className="see">조회수 1,234</p>
                    </div>
                    <p className="content">
                        이번 일반기계기사 난이도 어땠나요?<br />
                        체감상 1과목 부분이 좀 어려웠던 것 같긴 한데<br /><br />

                        합격컷 어떻게 될까요?
                    </p>
                    {/* <div className="vote_wrap">
                        <h3>투표 139명 참여</h3>
                        <div className="vote">
                            <p>복수 선택 불가</p>
                            <div>
                                <p>어려웠다</p>
                                <p className="percent">81.3%(113명)</p>
                            </div>
                            <div>
                                <p>어려웠다</p>
                                <p className="percent">81.3%(113명)</p>
                            </div>
                        </div>
                    </div> */}
                    <button className="good_btn">
                        <img src={Good} alt="" />
                        <p>추천</p>
                    </button>
                </div>
                <button onClick={() => { onWrite() }}>글쓰기</button>
                <div className="comment_wrap">
                    <div className="comment_header">
                        <h2>댓글 [3]</h2>
                        <div>
                            <button className='click'>추천순</button>
                            <button>최신순</button>
                        </div>
                    </div>
                    <div className="list_wrap">
                        <div className="list">
                            <div className="top">
                                <div>
                                    <p className='user'>USER333</p>
                                    <p className='date'>2025.08.01 13:33</p>
                                </div>
                                <div className="button"><img src={Con} alt="" /></div>
                            </div>
                            <div className="content">
                                <p>저도 1과목 어려웠어요 역대급인 듯</p>
                                <div className="btn_wrap">
                                    <button>답글쓰기</button>
                                    <div className="button"><img src={GoodClick} alt="" /><p>추천3</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="list re">
                            <div className="top">
                                <div>
                                    <p className='user'>USER333</p>
                                    <p className='date'>2025.08.01 13:33</p>
                                </div>
                                <div className="button"><img src={Con} alt="" /></div>
                            </div>
                            <div className="content">
                                <p>저도 1과목 어려웠어요 역대급인 듯</p>
                                <div className="btn_wrap">
                                    <button>답글쓰기</button>
                                    <div className="button"><img src={Good} alt="" /><p>추천3</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="list">
                            <div className="top">
                                <div>
                                    <p className='user'>USER333</p>
                                    <p className='date'>2025.08.01 13:33</p>
                                </div>
                                <div className="button"><img src={Con} alt="" /></div>
                            </div>
                            <div className="content">
                                <p>저도 1과목 어려웠어요 역대급인 듯</p>
                                <div className="btn_wrap">
                                    <button>답글쓰기</button>
                                    <div className="button"><img src={GoodClick} alt="" /><p>추천3</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Pagenation />
                    <div className="comment_write">
                        <div>
                            <p className="user">USER1</p>
                            <input type="text" placeholder='댓글을 작성해보세요' />
                        </div>
                        <div className="btn_wrap">
                            <button>등록</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header header_bottom">
                <div className="left">
                    <button><img src={Left} alt="" /><p>목록</p></button>
                </div>
                <div className="right">
                    <button><img src={Up} alt="" /><p>이전글</p></button>
                    <button><img src={Down} alt="" /><p>다음글</p></button>
                </div>
            </div>
            <div className="another_wrap">
                <h2>자격증 TALK</h2>
                <div className="list_wrap">
                    <div className="list">
                        <div className="kind">후기</div>
                        <div className="cate">IT/컴퓨터</div>
                        <div className="title">
                            <p>일반기계기사 난이도 어떤가요?</p>
                            <p className="comment">[3]</p>
                        </div>
                        <div className="user">USER1</div>
                        <div className="date">2025.08.01</div>
                    </div>
                    <div className="list">
                        <div className="kind">후기</div>
                        <div className="cate">IT/컴퓨터</div>
                        <div className="title">
                            <p>일반기계기사 난이도 어떤가요?</p>
                            <p className="comment">[3]</p>
                        </div>
                        <div className="user">USER1</div>
                        <div className="date">2025.08.01</div>
                    </div>
                    <div className="list">
                        <div className="kind">후기</div>
                        <div className="cate">IT/컴퓨터</div>
                        <div className="title">
                            <p>일반기계기사 난이도 어떤가요?</p>
                            <p className="comment">[3]</p>
                        </div>
                        <div className="user">USER1</div>
                        <div className="date">2025.08.01</div>
                    </div>
                    <div className="list">
                        <div className="kind">후기</div>
                        <div className="cate">IT/컴퓨터</div>
                        <div className="title">
                            <p>일반기계기사 난이도 어떤가요?</p>
                            <p className="comment">[3]</p>
                        </div>
                        <div className="user">USER1</div>
                        <div className="date">2025.08.01</div>
                    </div>
                    <div className="list">
                        <div className="kind">후기</div>
                        <div className="cate">IT/컴퓨터</div>
                        <div className="title">
                            <p>일반기계기사 난이도 어떤가요?</p>
                            <p className="comment">[3]</p>
                        </div>
                        <div className="user">USER1</div>
                        <div className="date">2025.08.01</div>
                    </div>

                </div>
                <div className="pagenation_wrap">
                    <button className="left"><img src={Left} alt="" /></button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button className="right"><img src={Right} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Detail