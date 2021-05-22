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
                                <div className={cls.left}>
                                    <div>
                                        <img src={"../../imagelogo.png"} alt=""/>
                                    </div>
                                    <div>
                                        <img src={"../../imagelogo1.png"} alt=""/>
                                    </div>
                                </div>
                                <div className={cls.right}>
                                    <div className={cls.flex}>
                                        <div className={cls.program}>
                                            <p className={cls.title}>IDEs</p>
                                            <ul>
                                                <li className={cls.dropdownLi}> AppCode</li>
                                                <li className={cls.dropdownLi}> DataGrip</li>
                                                <li className={cls.dropdownLi}> DataSpell</li>
                                                <li className={cls.dropdownLi}> GoLand</li>
                                                <li className={cls.dropdownLi}>IntelliJ IDEA</li>
                                                <li className={cls.dropdownLi}> PhpStorm</li>

                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <ul className={cls.rider}>
                                                <li className={cls.dropdownLi}> PyCharm</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> RubyMine</li>
                                                <li className={cls.dropdownLi}> WebStorm</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>SERVICES & PLUGINS</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>Big Data Tools</li>
                                                <li className={cls.dropdownLi}> Code With Me</li>
                                                <li className={cls.dropdownLi}> Projector</li>
                                                <li className={cls.dropdownLi}> Rust</li>
                                                <li className={cls.dropdownLi}> Scala</li>
                                                <li className={cls.dropdownLi}>All Plugins</li>
                                                <li className={cls.dropdownLi}>IDE Themes</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>.NET & VISUAL STUDIO</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>ReSharper</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> dotCover</li>
                                                <li className={cls.dropdownLi}>dotMemory</li>
                                                <li className={cls.dropdownLi}>dotPeek</li>
                                                <li className={cls.dropdownLi}>dotTrace</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>LANGUAGES & FRAMEWORKS</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>Kotlin</li>
                                                <li className={cls.dropdownLi}> Ktor</li>
                                                <li className={cls.dropdownLi}> MPS</li>
                                                <li className={cls.dropdownLi}> Compose for</li>
                                                <li className={cls.dropdownLi}>Desktop</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>Team Tools
                            <div className={cls.dropdown}>
                                <div className={cls.left}>
                                    <div>
                                        <img src={"../../imagelogo.png"} alt=""/>
                                    </div>
                                    <div>
                                        <img src={"../../imagelogo1.png"} alt=""/>
                                    </div>
                                </div>
                                <div className={cls.right}>
                                    <div className={cls.flex}>
                                        <div className={cls.program}>
                                            <p className={cls.title}>IDEs</p>
                                            <ul>
                                                <li className={cls.dropdownLi}> AppCode</li>
                                                <li className={cls.dropdownLi}> DataGrip</li>
                                                <li className={cls.dropdownLi}> DataSpell</li>
                                                <li className={cls.dropdownLi}> GoLand</li>
                                                <li className={cls.dropdownLi}>IntelliJ IDEA</li>
                                                <li className={cls.dropdownLi}> PhpStorm</li>

                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <ul className={cls.rider}>
                                                <li className={cls.dropdownLi}> PyCharm</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> RubyMine</li>
                                                <li className={cls.dropdownLi}> WebStorm</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>SERVICES & PLUGINS</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>Big Data Tools</li>
                                                <li className={cls.dropdownLi}> Code With Me</li>
                                                <li className={cls.dropdownLi}> Projector</li>
                                                <li className={cls.dropdownLi}> Rust</li>
                                                <li className={cls.dropdownLi}> Scala</li>
                                                <li className={cls.dropdownLi}>All Plugins</li>
                                                <li className={cls.dropdownLi}>IDE Themes</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>.NET & VISUAL STUDIO</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>ReSharper</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> dotCover</li>
                                                <li className={cls.dropdownLi}>dotMemory</li>
                                                <li className={cls.dropdownLi}>dotPeek</li>
                                                <li className={cls.dropdownLi}>dotTrace</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>LANGUAGES & FRAMEWORKS</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>Kotlin</li>
                                                <li className={cls.dropdownLi}> Ktor</li>
                                                <li className={cls.dropdownLi}> MPS</li>
                                                <li className={cls.dropdownLi}> Compose for</li>
                                                <li className={cls.dropdownLi}>Desktop</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div></li>
                        <li>Learning Tools
                            <div className={cls.dropdown}>
                                <div className={cls.left}>
                                    <div>
                                        <img src={"../../imagelogo.png"} alt=""/>
                                    </div>
                                    <div>
                                        <img src={"../../imagelogo1.png"} alt=""/>
                                    </div>
                                </div>
                                <div className={cls.right}>
                                    <div className={cls.flex}>
                                        <div className={cls.program}>
                                            <p className={cls.title}>IDEs</p>
                                            <ul>
                                                <li className={cls.dropdownLi}> AppCode</li>
                                                <li className={cls.dropdownLi}> DataGrip</li>
                                                <li className={cls.dropdownLi}> DataSpell</li>
                                                <li className={cls.dropdownLi}> GoLand</li>
                                                <li className={cls.dropdownLi}>IntelliJ IDEA</li>
                                                <li className={cls.dropdownLi}> PhpStorm</li>

                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <ul className={cls.rider}>
                                                <li className={cls.dropdownLi}> PyCharm</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> RubyMine</li>
                                                <li className={cls.dropdownLi}> WebStorm</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>SERVICES & PLUGINS</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>Big Data Tools</li>
                                                <li className={cls.dropdownLi}> Code With Me</li>
                                                <li className={cls.dropdownLi}> Projector</li>
                                                <li className={cls.dropdownLi}> Rust</li>
                                                <li className={cls.dropdownLi}> Scala</li>
                                                <li className={cls.dropdownLi}>All Plugins</li>
                                                <li className={cls.dropdownLi}>IDE Themes</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>.NET & VISUAL STUDIO</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>ReSharper</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> dotCover</li>
                                                <li className={cls.dropdownLi}>dotMemory</li>
                                                <li className={cls.dropdownLi}>dotPeek</li>
                                                <li className={cls.dropdownLi}>dotTrace</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>LANGUAGES & FRAMEWORKS</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>Kotlin</li>
                                                <li className={cls.dropdownLi}> Ktor</li>
                                                <li className={cls.dropdownLi}> MPS</li>
                                                <li className={cls.dropdownLi}> Compose for</li>
                                                <li className={cls.dropdownLi}>Desktop</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div></li>
                        <li>Solutions
                            <div className={cls.dropdown}>
                                <div className={cls.left}>
                                    <div>
                                        <img src={"../../imagelogo.png"} alt=""/>
                                    </div>
                                    <div>
                                        <img src={"../../imagelogo1.png"} alt=""/>
                                    </div>
                                </div>
                                <div className={cls.right}>
                                    <div className={cls.flex}>
                                        <div className={cls.program}>
                                            <p className={cls.title}>IDEs</p>
                                            <ul>
                                                <li className={cls.dropdownLi}> AppCode</li>
                                                <li className={cls.dropdownLi}> DataGrip</li>
                                                <li className={cls.dropdownLi}> DataSpell</li>
                                                <li className={cls.dropdownLi}> GoLand</li>
                                                <li className={cls.dropdownLi}>IntelliJ IDEA</li>
                                                <li className={cls.dropdownLi}> PhpStorm</li>

                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <ul className={cls.rider}>
                                                <li className={cls.dropdownLi}> PyCharm</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> RubyMine</li>
                                                <li className={cls.dropdownLi}> WebStorm</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>SERVICES & PLUGINS</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>Big Data Tools</li>
                                                <li className={cls.dropdownLi}> Code With Me</li>
                                                <li className={cls.dropdownLi}> Projector</li>
                                                <li className={cls.dropdownLi}> Rust</li>
                                                <li className={cls.dropdownLi}> Scala</li>
                                                <li className={cls.dropdownLi}>All Plugins</li>
                                                <li className={cls.dropdownLi}>IDE Themes</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>.NET & VISUAL STUDIO</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>ReSharper</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> dotCover</li>
                                                <li className={cls.dropdownLi}>dotMemory</li>
                                                <li className={cls.dropdownLi}>dotPeek</li>
                                                <li className={cls.dropdownLi}>dotTrace</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>LANGUAGES & FRAMEWORKS</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>Kotlin</li>
                                                <li className={cls.dropdownLi}> Ktor</li>
                                                <li className={cls.dropdownLi}> MPS</li>
                                                <li className={cls.dropdownLi}> Compose for</li>
                                                <li className={cls.dropdownLi}>Desktop</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div></li>
                        <li>Store
                            <div className={cls.dropdown}>
                                <div className={cls.left}>
                                    <div>
                                        <img src={"../../imagelogo.png"} alt=""/>
                                    </div>
                                    <div>
                                        <img src={"../../imagelogo1.png"} alt=""/>
                                    </div>
                                </div>
                                <div className={cls.right}>
                                    <div className={cls.flex}>
                                        <div className={cls.program}>
                                            <p className={cls.title}>IDEs</p>
                                            <ul>
                                                <li className={cls.dropdownLi}> AppCode</li>
                                                <li className={cls.dropdownLi}> DataGrip</li>
                                                <li className={cls.dropdownLi}> DataSpell</li>
                                                <li className={cls.dropdownLi}> GoLand</li>
                                                <li className={cls.dropdownLi}>IntelliJ IDEA</li>
                                                <li className={cls.dropdownLi}> PhpStorm</li>

                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <ul className={cls.rider}>
                                                <li className={cls.dropdownLi}> PyCharm</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> RubyMine</li>
                                                <li className={cls.dropdownLi}> WebStorm</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>SERVICES & PLUGINS</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>Big Data Tools</li>
                                                <li className={cls.dropdownLi}> Code With Me</li>
                                                <li className={cls.dropdownLi}> Projector</li>
                                                <li className={cls.dropdownLi}> Rust</li>
                                                <li className={cls.dropdownLi}> Scala</li>
                                                <li className={cls.dropdownLi}>All Plugins</li>
                                                <li className={cls.dropdownLi}>IDE Themes</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>.NET & VISUAL STUDIO</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>ReSharper</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> Rider</li>
                                                <li className={cls.dropdownLi}> dotCover</li>
                                                <li className={cls.dropdownLi}>dotMemory</li>
                                                <li className={cls.dropdownLi}>dotPeek</li>
                                                <li className={cls.dropdownLi}>dotTrace</li>
                                            </ul>
                                        </div>
                                        <div  className={cls.program}>
                                            <p className={cls.title}>LANGUAGES & FRAMEWORKS</p>
                                            <ul>
                                                <li className={cls.dropdownLi}>Kotlin</li>
                                                <li className={cls.dropdownLi}> Ktor</li>
                                                <li className={cls.dropdownLi}> MPS</li>
                                                <li className={cls.dropdownLi}> Compose for</li>
                                                <li className={cls.dropdownLi}>Desktop</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div></li>
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
