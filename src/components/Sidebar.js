import React from 'react';


import qa from './images/sidebar/qa.svg';
import avatar from "./images/sidebar/avatar.png";
import dashboard from "./images/sidebar/dashboard.svg";
import course from "./images/sidebar/course.svg";
import exam from "./images/sidebar/exam.svg";
import news from "./images/sidebar/news.svg";

class Sidebar extends React.Component{
    render () {
        return (
                <div className="sidebar">
        <div className="sidebar__header">
            <div className="header__avatar">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="header__name">HOANG NGUYEN</div>
        </div>
        <div className="sidebar__navigation">
            <div className="sidebar__item sidebar__item-active">
                <img className="sidebar__item-icon" src={dashboard} />
                <div className="sidebar__item-name">dashboard</div>
            </div>
            <div className="sidebar__item">
                <img className="sidebar__item-icon" src={course} />
                <div className="sidebar__item-name">course</div>
            </div>
            <div className="sidebar__item">
                <img className="sidebar__item-icon" src={exam} />
                <div className="sidebar__item-name">exam</div>
            </div>
            <div className="sidebar__item">
                <img className="sidebar__item-icon" src={qa} />
                <div className="sidebar__item-name">q&a</div>
            </div>
            <div className="sidebar__item">
                <img className="sidebar__item-icon" src={news} />
                <div className="sidebar__item-name">news</div>
            </div>
        </div>
    </div>
        
        );
    }
}

export default Sidebar;