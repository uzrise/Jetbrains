import React from 'react';

import cls from './news.module.scss'

export default function News() {
    return (
        <div className={cls.news}>
            <div className="container">
                <h1 className={cls.newsTitle}>News & events</h1>
                <div className={cls.newsCards}>
                    <div className={cls.newsContent}>
                        <p>
                            <time>May 17, 2021</time>
                        </p>
                        <h3>The Live Stream Podcast: Teaching with PyCharm Edu</h3>
                        <p>This Thursday, May 20, we will be appearing on the educational podcast Teaching Python with
                            Kelly
                            and Sean, in an episode dedicated to PyCharm Edu!
                        </p>
                        <span><a className="link">Learn more</a></span>
                    </div>
                    <div className={cls.newsContent}>
                        <p>
                            <time>May 17, 2021</time>
                        </p>
                        <h3>The Live Stream Podcast: Teaching with PyCharm Edu</h3>
                        <p>This Thursday, May 20, we will be appearing on the educational podcast Teaching Python with
                            Kelly
                            and Sean, in an episode dedicated to PyCharm Edu!
                        </p>
                        <span><a className="link">Learn more</a></span>
                    </div>
                    <div className={cls.newsContent}>
                        <p>
                            <time>May 17, 2021</time>
                        </p>
                        <h3>The Live Stream Podcast: Teaching with PyCharm Edu</h3>
                        <p>This Thursday, May 20, we will be appearing on the educational podcast Teaching Python with
                            Kelly
                            and Sean, in an episode dedicated to PyCharm Edu!
                        </p>
                        <span><a className="link">Learn more</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
