import React from "react";

import cls from "./plugins.module.scss"

export default function Plugins() {
    return (
        <div className={cls.plugins}>
            <div className="container">
                <div className={cls.elements}>
                    <div className={cls.title}>
                        <h1>
                            However big or small your team is, our products will ensure
                            that it always has a smooth and enjoyable experience when
                            <a> building and shipping your code</a>,<a> planning your work</a>,and <a>
                            collaborating</a>.
                        </h1>
                        <br/>
                        <h1>Whatever platform or language you work with,
                            JetBrains has a development tool for you.</h1>
                    </div>
                    <div className={cls.languages}>
                        <button className="btn_m">
                            JavaScript
                        </button>
                        <button className="btn_m">
                            NET
                        </button>
                        <button className="btn_m">
                            Java & JVM
                        </button>
                        <button className="btn_m">
                            C++
                        </button>
                        <button className="btn_m">
                            macOS & iOS
                        </button>
                        <button className="btn_m">
                            Python & Django
                        </button>
                        <button className="btn_m">
                            PHP
                        </button>
                        <button className="btn_m">
                            Ruby & Rails
                        </button>
                        <button className="btn_m">
                            Go
                        </button>
                        <button className="btn_m">
                            Kotlin
                        </button>
                        <button className="btn_m">
                            SQL
                        </button>
                        <button className="btn_m">
                            See all tools
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}
