import React from "react";
import cls from './trust.module.scss'

export default function Trust() {
    return (
        <div className={cls.trust}>
            <div className="container">
                <h2>Trusted</h2>
                <div className={cls.actions}>
                    <div className={cls.text}>
                        <p>Many of the world's most dynamic companies and individuals find JetBrains tools make them
                            more creative and effective.
                        </p>
                    </div>
                    <div  className={cls.members}>
                        <div className={cls.member}>
                            <h1>10M+</h1>
                            <p>users trust our tools</p>
                        </div>
                        <div className={cls.member}>
                            <h1>96K</h1>
                            <p>join every month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
