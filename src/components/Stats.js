import React from 'react';

import arrow_down from "./images/arrow-down.svg";

class Stats extends React.Component{
    render () {
        return (
            
                <div className="stats">
            <div className="card card--orange">
                <div className="card__tabs">
                    <div className="tabs__tab">
                        <div className="tab__count">12</div>
                        <div className="tab__caption">done courses</div>
                    </div>
                    <div className="tabs__tab tabs__tab--inactive">
                        <div className="tab__count">3</div>
                        <div className="tab__caption">unfinished courses</div>
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__item">Basic for UX Designer</div>
                    <div className="card__item">10 steps to improve your wireframe</div>
                    <div className="card__item">A Better Way To Request App Ratings</div>
                    <div className="card__item">How To Speed Up Your WordPress Website</div>
                </div>
                <div className="card__more">
                    <div className="more__caption">Show more</div>
                    <img className="more__icon" src={arrow_down} />
                </div>
            </div>
            <div className="card card--purple">
                <div className="card__tabs">
                    <div className="tabs__tab">
                        <div className="tab__count">27</div>
                        <div className="tab__caption">asking questions</div>
                    </div>
                    <div className="tabs__tab tabs__tab--inactive">
                        <div className="tab__count">7</div>
                        <div className="tab__caption">answered questions</div>
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__item">How to make good logo?</div>
                    <div className="card__item">What are the best mobile apps for ...</div>
                    <div className="card__item">
                        What's the difference between UI and ...
                    </div>
                    <div className="card__item">What logos include hidden messages ...</div>
                </div>
                <div className="card__more">
                    <div className="more__caption">Show more</div>
                    <img className="more__icon" src={arrow_down} />
                </div>
            </div>
            <div className="card card--green">
                <div className="card__tabs">
                    <div className="tabs__tab">
                        <div className="tab__count">19</div>
                        <div className="tab__caption">following exams</div>
                    </div>
                    <div className="tabs__tab tabs__tab--inactive">
                        <div className="tab__count">88</div>
                        <div className="tab__caption">done exams</div>
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__item">Junior web designer</div>
                    <div className="card__item">
                        Which is the best way to pass the PMP ...
                    </div>
                    <div className="card__item">
                        What are great examples of viral UX/UI ...
                    </div>
                    <div className="card__item">
                        Why is consistency important in design?
                    </div>
                </div>
                <div className="card__more">
                    <div className="more__caption">Show more</div>
                    <img className="more__icon" src={arrow_down} />
                </div>
            </div>
        </div>
        
        );
    }
}


export default Stats;