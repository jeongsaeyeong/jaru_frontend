import React from 'react'
import Left from '../../assets/img/community/button_left.svg'
import Right from '../../assets/img/community/button_right.svg'

const Pagenation = () => {
    return (
        <div className="pagenation_wrap">
            <button className="left"><img src={Left} alt="" /></button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="right"><img src={Right} alt="" /></button>
        </div>
    )
}

export default Pagenation