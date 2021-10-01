import React from 'react';
import './sidebar.css';
import {
    LineStyle, Timeline, TrendingUp, PersonOutline, CreditCardOutlined, AttachMoney, Mail, Message, DynamicFeed, AssessmentOutlined, CardTravel
} from '@material-ui/icons'

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem active"><LineStyle className="sidebaricon" />Home</li>
                        <li className="sidebarlistitem"><Timeline className="sidebaricon" />Analyits</li>
                        <li className="sidebarlistitem"><TrendingUp className="sidebaricon" />Sales</li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Quick Menu</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem active"><PersonOutline className="sidebaricon" />Users</li>
                        <li className="sidebarlistitem"><CreditCardOutlined className="sidebaricon" />Products</li>
                        <li className="sidebarlistitem"><AttachMoney className="sidebaricon" />Transactions</li>
                        <li className="sidebarlistitem"><AssessmentOutlined className="sidebaricon" />Reports</li>

                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Notifications</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem active"><Mail className="sidebaricon" />Mail</li>
                        <li className="sidebarlistitem"><DynamicFeed className="sidebaricon" />Feedback</li>
                        <li className="sidebarlistitem"><Message className="sidebaricon" />Messages</li>
                    </ul>
                </div>
                <div className="sidebarmenu">
                    <h3 className="sidebartitle">Staff</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem active"><CardTravel className="sidebaricon" />Manage</li>
                        <li className="sidebarlistitem"><Timeline className="sidebaricon" />Analyits</li>
                        <li className="sidebarlistitem"><AssessmentOutlined className="sidebaricon" />Reports</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
