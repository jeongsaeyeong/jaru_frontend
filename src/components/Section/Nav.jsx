import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/nav/img_logo.svg'
import Search from '../../assets/img/nav/button_search.svg'
import Select from '../../assets/img/nav/button_select.svg'

const Nav = () => {
    return (
        <div className='Nav_wrap'>
            <div className="navigation">
                <div>
                    <Link to='/'><img src={Logo} alt="" /></Link>
                    <div>
                        <Link to='/'>자격증 조회</Link>
                        <Link to='/'>자격증 알림받기</Link>
                        <Link to='/'>자격증 TALK</Link>
                        <Link to='/'>자격증 MY자격증</Link>
                    </div>
                </div>
                <Link className='login' to='/login'>로그인/회원가입</Link>
            </div>
            <div className="search_wrap">
                <h2>어떤 자격증을 찾고 계신가요?</h2>
                <div className="search">
                    <button><img src={Search} alt="" /></button>
                    <input type="text" placeholder='자격증 이름, 분야를 검색하세요.' />
                    <div>
                        <select>
                            <option value="it">카테고리</option>
                        </select>
                        <img src={Select} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav