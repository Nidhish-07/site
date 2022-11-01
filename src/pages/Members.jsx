import React from 'react'
import { Alumni, Mentor, Main, Assistant } from './team/index'
import { Link } from 'react-router-dom'

const Members = () => {
    return (
        <div className="dropdown dropdown-hover ">
            <label tabIndex={0} className="m-1 rounded-none hover:bg-[#2e2d2d] bg-base-100 border-none text-[#2e2d2d] text-xl font-semibold p-2 hover:text-white">Members</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/alumni">Alumni</Link></li>
                <li><Link to="/main">Main</Link></li>
                <li><Link to="/assistant">Assistant</Link></li>
                <li><Link to="/mentor">Member</Link></li>
            </ul>
        </div>
    )
}

export default Members