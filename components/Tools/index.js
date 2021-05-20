import React from "react";

import cls from "./tools.module.scss"

export default function Tools() {
    return (
        <div className={cls.toolsContainer}>
            <div className="container">
                <p>Our tools are used all over the world in <br/> some of the best-known companies.</p>
                <div className={cls.tools}>
                    <img src="../../google.png" alt=""/>
                    <img src="../../nasa.png" alt=""/>
                    <img src="../../valve.png" alt=""/>
                    <img src="../../netflix.png" alt=""/>
                    <img src="../../ubisoft.png" alt=""/>
                    <img src="../../twitter.png" alt=""/>
                </div>
            </div>
        </div>
    )
}
