import React from 'react';

import cls from './news.module.scss'

import news from '../../mock-data/news'

export default function News() {
    return (
        <div className={cls.news}>
            <div className="container">
                <h1 className={cls.newsTitle}>News & events</h1>
                <div className={cls.newsCards}>
                    {news.map((item) => (
                        <div key={item.id} className={cls.newsContent}>
                            <time className={cls.paragraph}>{item.data}</time>
                            <h3>{item.title_en}</h3>
                            <p className={cls.paragraph}> {item.name_en}</p>
                            <a className="link">{item.link}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
