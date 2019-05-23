import React from 'react';

import account from "./images/header/account.svg";
import comment from "./images/header/comment.svg";
import notifications from "./images/header/notifications.svg";
import logo from "./images/header/logo.png";
import search from "./images/header/search.svg";

const Header = () => (
                <header className="header">
                    <div className="header__controls">
                        <img src={account} alt="account" className="header__icon" />
                        <img src={comment} alt="comments" className="header__icon" />
                        <div className="header__notifications">
                            <img src={notifications} alt="notifications" className="header__icon" />
                            <div className="header__count">2</div>
                        </div>
                    </div>
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <form className="header__form">
                        <input className="form__input" type="text" placeholder="Type for search" />
                        <button className="form__submit" type="submit">
                            <img src={search} alt="search" />
                        </button>
                    </form>
                </header>
           
)


export default Header;