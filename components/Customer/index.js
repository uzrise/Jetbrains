import React from "react";

import cls from "./customer.module.scss"

export default function Customer() {
    return (
        <div className={cls.customerContainer}>
            <div className="container">
                <h1>Customer Stories</h1>
                <p>See how the world's leading companies <br/> use JetBrains products</p>
                <div className={cls.customerCards}>
                    <div className={cls.card}>
                        <h3>OpenStack</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at consequuntur dolorem
                            doloremque dolores eaque et in itaque labore laborum libero non odio officia, quaerat,
                            reprehenderit repudiandae sequi ut vero. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus dolorum eos molestiae necessitatibus omnis tempore unde voluptas. Libero,
                            numquam, quis.</p>
                        <p className={cls.hover}>Swapnil Kulkarni, Active Technology Contributor, OpenStack</p>
                        <a className="link">Read case study</a>
                    </div>
                    <div className={cls.card}>
                        <h3>OpenStack</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at consequuntur dolorem
                            doloremque dolores eaque et in itaque labore laborum libero non odio officia, quaerat,
                            reprehenderit repudiandae sequi ut vero. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus dolorum eos molestiae necessitatibus omnis tempore unde voluptas. Libero,
                            numquam, quis.</p>
                        <p className={cls.hover}>Swapnil Kulkarni, Active Technology Contributor, OpenStack</p>
                        <a className="link">Read case study</a>
                    </div>
                    <div className={cls.card}>
                        <h3>OpenStack</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at consequuntur dolorem
                            doloremque dolores eaque et in itaque labore laborum libero non odio officia, quaerat,
                            reprehenderit repudiandae sequi ut vero. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus dolorum eos molestiae necessitatibus omnis tempore unde voluptas. Libero,
                            numquam, quis.</p>
                        <p className={cls.hover}>Swapnil Kulkarni, Active Technology Contributor, OpenStack</p>
                        <a className="link">Read case study</a>
                    </div>
                </div>
                <button className="btn_b">More case studies</button>
            </div>
        </div>
    )
}
