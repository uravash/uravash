import React from 'react';
import { NotificationsNone, Language, Settings, Person } from '@material-ui/icons';
import './topbar.css'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className="logo"> <Person className="admin" />ADMIN</span>
                </div>
                <div className="topright">

                    <div className="topbariconcontiner"> <NotificationsNone /><span className="topiconbadge">2</span></div>
                    <div className="topbariconcontiner"> <Language /></div>
                    <div className="topbariconcontiner"><Settings /> </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6XGQ9b93y4-wdN-oXWxQJuvWoLwbx5ChHQ&usqp=CAU" alt="profile " className="topavtar" />
                </div>
            </div>
        </div>
    )
}


