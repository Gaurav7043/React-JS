import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleWhole, faUtensils, faCarrot, faLemon, faHeartbeat, faWeight } from '@fortawesome/free-solid-svg-icons'
import img from "../assets/ab1.jpg"
import img2 from "../assets/ab2.jpg"
import img3 from "../assets/sign.png"
import img4 from "../assets/s2.jpg"
import img5 from "../assets/s1.jpg"
import img6 from "../assets/s3.jpg"
import img8 from "../assets/img2.png"

export default function Body() {
    return (
        <>
            {/* ==================experiance========= */}
            <div className="experiance">
                <div className="container exp-p">
                    <div className="exp-outer-div">
                        <div className="exp-div-img">
                            <div className="img1">
                                <img src={img} alt="" />
                            </div>
                            <div className="img2">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        <div className="exp-content">
                            <p className="exp-title">since 2000</p>
                            <h1>We Have <span>30+</span> Years of Experience</h1>
                            <p className="para1 fw-700">
                                <q>
                                    <em>
                                        Orem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat.
                                    </em>
                                </q>
                            </p>
                            <p className="para2">
                                Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, fugiat. Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.
                            </p>
                            <div className="sign">
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===========popular_dish========= */}
            <div className="popular-dishes">
                <div className="container pop-p">
                    <div className="title">
                        <h1>our <span>popular</span> salads</h1>
                    </div>
                    <div className="gridbox">
                        <div className="grid1">
                            <div className="grid-img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="grid-text">
                                <h3>Green salads</h3>
                                <p>
                                    Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.
                                </p>
                            </div>
                        </div>
                        <div className="grid">
                            <div className="grid-img">
                                <img src={img5} alt="" />
                            </div>
                            <div className="grid-text">
                                <h3>Fruit salads</h3>
                                <p>
                                    Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.
                                </p>
                            </div>
                        </div>
                        <div className="grid1">
                            <div className="grid-img">
                                <img src={img6} alt="" />
                            </div>
                            <div className="grid-text">
                                <h3>Dessart salads</h3>
                                <p>
                                    Amus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===========resto_menu================= */}
            <div className="Res_menu flex">
                <div className="res_menu_sub">
                    <div className="container res-p">
                        <div className="res-menu">
                            <div className="title">
                                <h1>Our Restaurants <span>Menu</span></h1>
                            </div>
                            <div className="res_text">
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p></p>
                            </div>
                            <div className="btn">
                                <button>What's on the menu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =================about_food================ */}
            <div className="about-food">
                <div className="container about-f-p">
                    <div className="foodgrid">
                        <div className="foodsubgrid">
                            <div className="foodinfo">
                                <div className="icon" style={{fontSize: "53px"}}>
                                    <FontAwesomeIcon icon={faAppleWhole} style={{color: "#f7783c"}}/>
                                </div>
                                <div className="food-text">
                                    <h3>Healthy Food</h3>
                                    <p>Ras effic itur metusga via suscipit consectetur adipisicing unde omnis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="foodsubgrid">
                            <div className="foodinfo">
                                <div className="icon" style={{fontSize: "53px"}}>
                                    <FontAwesomeIcon icon={faUtensils} style={{color: "#f7783c"}}/>
                                </div>
                                <div className="food-text">
                                    <h3>Fresh Salads</h3>
                                    <p>Ras effic itur metusga via suscipit consectetur adipisicing unde omnis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="foodsubgrid">
                            <div className="foodinfo">
                                <div className="icon" style={{fontSize: "53px"}}>
                                    <FontAwesomeIcon icon={faCarrot} style={{color: "#f7783c"}}/>
                                </div>
                                <div className="food-text">
                                    <h3>natural fiber</h3>
                                    <p>Ras effic itur metusga via suscipit consectetur adipisicing unde omnis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="foodsubgrid">
                            <div className="foodinfo">
                                <div className="icon" style={{fontSize: "53px"}}>
                                    <FontAwesomeIcon icon={faLemon} style={{color: "#f7783c"}}/>
                                </div>
                                <div className="food-text">
                                    <h3>nutritionl food</h3>
                                    <p>Ras effic itur metusga via suscipit consectetur adipisicing unde omnis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="foodsubgrid">
                            <div className="foodinfo">
                                <div className="icon" style={{fontSize: "53px"}}>
                                    <FontAwesomeIcon icon={faHeartbeat} style={{color: "#f7783c"}}/>
                                </div>
                                <div className="food-text">
                                    <h3 style={{fontSize: "24px"}}>protact your heart</h3>
                                    <p>Ras effic itur metusga via suscipit consectetur adipisicing unde omnis.</p>
                                </div>
                            </div>
                        </div>
                        <div className="foodsubgrid">
                            <div className="foodinfo">
                                <div className="icon" style={{fontSize: "53px"}}>
                                    <FontAwesomeIcon icon={faWeight} style={{color: "#f7783c"}}/>
                                </div>
                                <div className="food-text">
                                    <h3>weight control</h3>
                                    <p>Ras effic itur metusga via suscipit consectetur adipisicing unde omnis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==============about_chef=============== */}
            <div className="about-chef">
                <div className="container about-c-p">
                    <div className="about-c-flex">
                        <div className="about-left">
                            <div className="title">
                                <h1>Meet Our Best <span>Chef's</span></h1>
                            </div>
                            <div className="content">
                                <p className='text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor. Aenean egestas magna at porttitor ehicula nullam augue ipsum dolor.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.
                                </p>
                                <button className="orderbtn">See Our Chef's</button>
                            </div>
                        </div>
                        <div className="about-right">
                            <img src={img8} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* news update */}
            <div className="newsUpdate">
                <div className="container news-p">
                    <div className="title">
                        <h1>subscribe to get email updates of our latest news</h1>
                    </div>
                    <div className="forms">
                        <form action="">
                            <div className="input-val">
                                <input type="text" name="" id="" placeholder="Enter your email" />
                            </div>
                            <div className="btn">
                                <button className="subscribe">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}