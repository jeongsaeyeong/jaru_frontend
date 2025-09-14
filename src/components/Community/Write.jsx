import React from 'react'
import Left from '../../assets/img/community/button_left.svg'
import Down from '../../assets/img/community/button_down.svg'
import Plus from '../../assets/img/community/button_plus.svg'
import File from '../../assets/img/community/button_file.svg'

const Write = () => {
    return (
        <div className='Write_wrap Detail_wrap'>
            <div className="header">
                <button><img src={Left} alt="" /><p>목록</p></button>
            </div>
            <div className="main">
                <h2>자격증 TALK 게시글 작성</h2>
                <div className="cate_wrap">
                    <div>
                        <select name="" id="">
                            <option value="">유형 선택</option>
                        </select>
                        <img src={Down} alt="" />
                    </div>
                    <div>
                        <select name="" id="">
                            <option value="">카테고리 선택</option>
                        </select>
                        <img src={Down} alt="" />
                    </div>
                </div>
                <div className="title_wrap">
                    <p>제목</p>
                    <input type="text" placeholder='제목을 입력해주세요.' />
                </div>
                <div className="content_wrap">
                    <p>내용</p>
                    <textarea name="" id="" placeholder='내용을 입력해주세요.'></textarea>
                </div>
                <div className="vote_wrap">
                    <p>투표</p>
                    <input type="text" placeholder='1. 항목을 입력하세요' />
                    <input type="text" placeholder='2. 항목을 입력하세요' />
                    <button>
                        <img src={Plus} alt="" />
                        <p>항목 추가</p>
                    </button>
                    <div className="check_wrap">
                        <input type="checkbox" name="" id="check" />
                        <label htmlFor="check"></label>
                        <p>복수 선택 가능</p>
                    </div>

                </div>
                <div className="file_wrap">
                    <p>파일 업로드</p>
                    <input type="file" id='file' />
                    <label htmlFor="file">
                        <p>파일 찾아보기</p>
                        <img src={File} alt="" />
                    </label>
                </div>
                <div className="btn_wrap">
                    <button>취소</button>
                    <button className='click'>등록</button>
                </div>
            </div>
        </div>
    )
}

export default Write