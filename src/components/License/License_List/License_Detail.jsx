import React from 'react'
import Star from '../../../assets/img/license/button_star.svg'
import StarBin from '../../../assets/img/license/button_star_bin.svg'
import Right from '../../../assets/img/license/button_right.svg'

const License_Detail = () => {
    return (
        <div className='License_Detail_wrap'>
            <h2>자격시험명: SQLD</h2>
            <div className="main">
                <div className="introduce_wrap">
                    <h2>시험 개요</h2>
                    <div>
                        <h3>한국데이터산업진흥원</h3>
                        <p>
                            SQL 개발자(SQLD*, SQL Developer)란 데이터베이스와 데이터 모델링에 대한 지식을 바탕으로 응용 소프트웨어를 개발하면서 데이터를 조작하고 추출하는데 있어서 정확하고 최적의 성능을 발휘하는 SQL을 작성할 수 있는 개발자를 말한다.
                        </p>
                        <div>
                            <div>
                                <h3>난이도</h3>
                                <div>
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={StarBin} alt="" />
                                </div>
                            </div>
                            <div>
                                <h3>응시료</h3>
                                <p>50,000원</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="date_wrap">
                    <h2>2025 시험 일정</h2>
                    <div className="date">
                        <div>
                            <p className="count">제56회</p>
                            <p className="get">접수일 : 2.3 ~ 2.7</p>
                            <p className="kind">필기시험</p>
                            <p className="today">시험일 : 3.8(토)</p>
                            <p className="notice">합격(예정)자 발표 : 3.28 ~ 4.1</p>
                        </div>
                        <div>
                            <p className="count">제56회</p>
                            <p className="get">접수일 : 2.3 ~ 2.7</p>
                            <p className="kind">필기시험</p>
                            <p className="today">시험일 : 3.8(토)</p>
                            <p className="notice">합격(예정)자 발표 : 3.28 ~ 4.1</p>
                        </div>
                        <div>
                            <p className="count">제56회</p>
                            <p className="get">접수일 : 2.3 ~ 2.7</p>
                            <p className="kind">필기시험</p>
                            <p className="today">시험일 : 3.8(토)</p>
                            <p className="notice">합격(예정)자 발표 : 3.28 ~ 4.1</p>
                        </div>
                        <div className='last'>
                            <p className="count">제56회</p>
                            <p className="get">접수일 : 2.3 ~ 2.7</p>
                            <p className="kind">필기시험</p>
                            <p className="today">시험일 : 3.8(토)</p>
                            <p className="notice">합격(예정)자 발표 : 3.28 ~ 4.1</p>
                        </div>
                    </div>
                </div>
                <div className="info_wrap">
                    <h2>시험 정보</h2>
                    <div className="list_wrap">
                        <div className="list">
                            <h3>응시 자격</h3>
                            <p>
                                제한 없음
                            </p>
                            <div></div>
                        </div>
                        <div className="list">
                            <h3>합격 기준</h3>
                            <p>
                                총점 60점 이상
                            </p>
                            <div></div>
                        </div>
                        <div className="list">
                            <h3>시험 내용</h3>
                            <p>
                                총 2과목, 필기 50문항
                            </p>
                            <div></div>
                        </div>
                        <div className="list">
                            <h3>접수 방법</h3>
                            <p>
                                1. 응시 자격 자가진단<br />
                                2. 수험원서 제출<br />
                                3. 수험표 발급<br />
                                4. 응시
                            </p>
                            <div></div>
                        </div>
                    </div>
                    <div className='btn_wrap'>
                        <button>더 자세한 정보 보러 가기</button>
                    </div>
                </div>
                <div className="kind_wrap">
                    <h2>비슷한 자격증</h2>
                    <div className="list_wrap">
                        <div>
                            <div>
                                <p>정보처리기사</p>
                                <div>
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={StarBin} alt="" />
                                </div>
                            </div>
                            <button><img src={Right} alt="" /></button>
                        </div>
                        <div>
                            <div>
                                <p>정보처리기사</p>
                                <div>
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={StarBin} alt="" />
                                </div>
                            </div>
                            <button><img src={Right} alt="" /></button>
                        </div>
                        <div>
                            <div>
                                <p>정보처리기사</p>
                                <div>
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={StarBin} alt="" />
                                </div>
                            </div>
                            <button><img src={Right} alt="" /></button>
                        </div>
                        <div>
                            <div>
                                <p>정보처리기사</p>
                                <div>
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={StarBin} alt="" />
                                </div>
                            </div>
                            <button><img src={Right} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default License_Detail