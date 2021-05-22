import React from "react";

import cls from "./customer.module.scss"

import customer from "../../mock-data/customer";

export default function Customer() {
    return (
        <div className={cls.customerContainer}>
            <div className="container">
                <h1>Customer Stories</h1>
                <p className={cls.titleText}>See how the world's leading companies <br/> use JetBrains products</p>
                <div className={cls.customerCards}>
                    {customer.map((item) => (
                        <div className={cls.card}>
                        <h3>{item.title_en}</h3>
                        <p className={cls.name}>{item.name_en}</p>
                        <p className={cls.hover}>{item.description}</p>
                        <a className="link">{item.link}</a>
                    </div>
                    ))}
                </div>
                <button className="btn_b">More case studies</button>
            </div>
        </div>
    )
}
