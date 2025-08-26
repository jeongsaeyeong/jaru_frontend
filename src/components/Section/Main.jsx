import React from 'react'
import PostView from './PostView'
import TopCertification from './TopCertification'
import CalendarCertView from './CalendarCertView'

const Main = () => {
    return (
        <div className='Main_wrap'>
            <TopCertification/>
            <CalendarCertView/>
            <PostView/>
        </div>
    )
}

export default Main