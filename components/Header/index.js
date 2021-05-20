import React from 'react';

import cls from './header.module.scss';
import {AccountIcon, CartIcon, LanguageIcon, LogoIcon, SearchIcon} from "../svg";

export default function Header() {
    return (
        <div className={cls.container}>
            <div className="container">
                <nav>
                    <div className={cls.logo}>
                        <LogoIcon/>
                    </div>
                    <ul>
                        <li>Developer Tools
                            <div className={cls.dropdown}>
                                <ul>
                                    <p>IDEs</p>
                                    <li> salom</li>
                                </ul>
                            </div>
                        </li>
                        <li>Team Tools</li>
                        <li>Learning Tools</li>
                        <li>Solutions</li>
                        <li>Store</li>
                    </ul>
                    <div className={cls.icons}>
                        <SearchIcon/>
                        <AccountIcon/>
                        <CartIcon/>
                        <LanguageIcon/>
                    </div>
                </nav>
            </div>
        </div>
    )
}
