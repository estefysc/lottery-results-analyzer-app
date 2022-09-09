import React, {useState, useEffect} from "react";
import {CSSTransition} from "react-transition-group";

import "./MainInfo.css";
import axios from "axios";

function MainInfo() {
    const [show, setShow] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => setShow(true))
    // }, []);

    function initData() {
        axios.get("http://localhost:5000/", {crossdomain: true}).then();
    }

    useEffect(() => setShow(true), []);
    useEffect(() => initData(), []);

    return (
        <div className="main-info">
            <div className="main-info-text">
                <h1 className="quote">
                    <q>God delights in odd numbers</q> -Virgil
                </h1>
                <h3 className="main-info-question">
                    Curious about numbers?
                </h3>
                <CSSTransition
                    in={show}
                    timeout={1500}
                    classNames="slide"
                >
                    <p className="main-info-answer">
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </CSSTransition>
            </div>
        </div>
    );
}

export default MainInfo;