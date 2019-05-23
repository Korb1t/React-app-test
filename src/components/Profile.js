import React from 'react';

import avatar from "./images/profile/avatar.png";
import rating_active from "./images/profile/rating-active.png";
import rating from "./images/profile/rating.png";
import experience from "./images/profile/experience.svg";
import edit from "./images/profile/edit.svg";
import logout from "./images/profile/logout.svg";

class Profile extends React.Component {
    render (){
        return(
                <div className="profile">
                        <div className="profile__container">
                            <div className="profile__avatar">
                                <img src={avatar} alt="avatar" />
                            </div>
                            <div className="profile__info">
                                <div className="info__container">
                                    <div className="info__name">HOANG NGUYEN</div>
                                    <div className="info__rating">
                                        <img className="info__rating-star" src={rating_active} alt="rating" />
                                        <img className="info__rating-star" src={rating_active} alt="rating" />
                                        <img className="info__rating-star" src={rating_active} alt="rating" />
                                        <img className="info__rating-star" src={rating} alt="rating" />
                                        <img className="info__rating-star" src={rating}  alt="rating" />
                                    </div>
                                </div>
                                <div className="info__container">
                                    <div className="info__role">Student</div>
                                    <div className="info__dot">&#8226;</div>
                                    <a href="#" className="info__link">Learn more</a>
                                </div>
                                <div className="info__container">
                                    <img src={experience} alt="exp" />
                                    <div className="info__experience">8,782 exp</div>
                                </div>
                            </div>
                            <div className="profile__controls">
                                <div className="profile__control">
                                    <img src={edit} alt="edit" />
                                </div>
                                <div className="profile__control">
                                    <img src={logout} alt="edit" />
                                </div>
                            </div>
                        </div>
                        <div className="profile__tabs">
                            <div className="tabs__tab">knowledge</div>
                            <div className="tabs__tab">course</div>
                            <div className="tabs__tab">exam</div>
                            <div className="tabs__tab">q&a</div>
                            <div className="tabs__tab">news</div>
                            <div className="tabs__tab">activity</div>
                            <div className="tabs__tab">friends</div>
                        </div>
                </div>
        );
    }
}

export default Profile;