import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Section/Main'
import License_List from './components/License/License_List/License_List'
import License_Detail from './components/License/License_List/License_Detail'
import License_Month from './components/License/License_Month/License_Month'
import Mypage from './components/User/Mypage/Mypage'
import Mypage_Write from './components/User/Mypage/Mypage_Write'
import Mypage_Comment from './components/User/Mypage/Mypage_Comment'
import Mypage_Month from './components/User/Mypage/Mypage_Month'
import Login from './components/User/Login/Login'
import Nav from './components/Section/Nav'
import Community from './components/Community/Community'

const App = () => {
    return (
        <BrowserRouter>
            {/* Routes 안에 Route를 설정하는 것으로 url을 만들 수 있습니다. 
                필요하신 페이지에 맞춰 자유롭게 추가해주시되, 어렵지 않은 단어로 부탁드려요! */}
            <Nav />
            <Routes>
                {/* Main */}
                <Route path='/' element={<Main />} />

                {/* License */}
                <Route path='/licese' element={<License_List />} />
                <Route path='/licese_detail/:id' element={<License_Detail />} />
                <Route path='/licese_month' element={<License_Month />} />

                {/* User */}
                {/* Mypage */}
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/mypage_write' element={<Mypage_Write />} />
                <Route path='/mypage_comment' element={<Mypage_Comment />} />
                <Route path='/mypage_month' element={<Mypage_Month />} />

                {/* Login */}
                <Route path='/login' element={<Login />} />

                {/* Community */}
                <Route path='/community' element={<Community />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App