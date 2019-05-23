import React from 'react';

import graph from "./images/main/graph.png";
import time from "./images/main/time.svg";
import avatar1 from "./images/main/avatar1.png";
import avatar2 from "./images/main/avatar2.png";
import avatar3 from "./images/main/avatar3.png";
import avatar4 from "./images/main/avatar4.png";
import arrow_down from "./images/arrow-down.svg";


class Activity extends React.Component  {
    render () {
        return (
            <div>
                        <div className="activity">
            <div className="experience">
                <div className="experience__header">Experience gained</div>
                <div className="experience__stats">
                    <div className="stats__stat">
                        <div className="stat__gray">
                            <div className="stat__green"></div>
                        </div>
                        <div className="stat__caption">Course</div>
                    </div>
                    <div className="stats__stat">
                        <div className="stat__gray">
                            <div className="stat__green"></div>
                        </div>
                        <div className="stat__caption">question</div>
                    </div>
                    <div className="stats__stat">
                        <div className="stat__gray">
                            <div className="stat__green"></div>
                        </div>
                        <div className="stat__caption">Exam</div>
                    </div>
                    <div className="stat__info">
                        <div className="info__count">+142</div>
                        <div className="info__date">last month</div>
                    </div>
                </div>
                <div className="experience__graph">
                    <div className="experience__header">Experience per day</div>
                    <div className="graph">
                        <img src={graph} alt="graph" />
                    </div>
                    <div className="experience__days">
                        <div className="days__day">12</div>
                        <div className="days__day">13</div>
                        <div className="days__day">14</div>
                        <div className="days__day">15</div>
                        <div className="days__day">16</div>
                        <div className="days__day">17</div>
                        <div className="days__day">18</div>
                        <div className="days__day">19</div>
                        <div className="days__day">20</div>
                        <div className="days__day">21</div>
                        <div className="days__day">22</div>
                    </div>
                </div>
            </div>
            <div className="social">
                <div className="social__header">FRIEND ACTIVITY</div>
                <div className="social__comments">
                    <div className="comments__comment comments__comment-orange">
                        <img className="comment__avatar" src={avatar1} alt="avatar" />
                        <div className="comment__container">
                            <div className="comment__name">Shawn Peterson</div>
                            <div className="comment__action">Finished the course:</div>
                            <div className="comment__info">Basic for UX Designer</div>
                        </div>
                        <div className="comment__date">
                            <img className="date__img" src={time} alt="date" />
                            <div className="date__time">9:30 PM</div>
                        </div>
                    </div>
                    <div className="comments__comment comments__comment-purple">
                        <img className="comment__avatar" src={avatar2} alt="avatar" />
                        <div className="comment__container">
                            <div className="comment__name">Mary V. Robinson</div>
                            <div className="comment__action">Asked question:</div>
                            <div className="comment__info">
                                What is best grid for desktop web?
                            </div>
                        </div>
                        <div className="comment__date">
                            <img className="date__img" src={time} alt="date" />
                            <div className="date__time">9:20 PM</div>
                        </div>
                    </div>
                    <div className="comments__comment comments__comment-green">
                        <img className="comment__avatar" src={avatar3} alt="avatar" />
                        <div className="comment__container">
                            <div className="comment__name">Joe Ramos</div>
                            <div className="comment__action">Finished the exam:</div>
                            <div className="comment__info">Junior web designer</div>
                        </div>
                        <div className="comment__date">
                            <img className="date__img" src={time} alt="date" />
                            <div className="date__time">7:45 PM</div>
                        </div>
                    </div>
                    <div className="comments__comment comments__comment-purple">
                        <img className="comment__avatar" src={avatar4} alt="avatar" />
                        <div className="comment__container">
                            <div className="comment__name">Sean Walker</div>
                            <div className="comment__action">Answered question</div>
                            <div className="comment__info">How to make good logo?</div>
                        </div>
                        <div className="comment__date">
                            <img className="date__img" src={time} alt="date" />
                            <div className="date__time">9:30 PM</div>
                        </div>
                    </div>
                </div>
                <div className="social__more">
                    <div className="more__caption">Show more</div>
                    <img className="more__icon" src={arrow_down} />
                </div>
            </div>
        </div>
            </div>
        );
    }
}

export default Activity;