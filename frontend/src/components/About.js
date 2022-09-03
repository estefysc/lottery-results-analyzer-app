import React, {useState, useEffect} from 'react';
import {CSSTransition} from "react-transition-group";

import './About.css';

function About() {
    const [show, setShow]= useState(false);

    useEffect(() => setShow(true), []);

    return (
        <div>
            <h1 className="first-title">The App</h1>
            <CSSTransition
                in={show}
                timeout={1000}
                classNames="fade"
            >
                <p className="about-app-pgh">
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </CSSTransition>
            <h2 className="second-title">The Creator</h2>
            <CSSTransition
                in={show}
                timeout={1000}
                classNames="fade"
            >
                <p className="about-creator-pgh">
                    Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </CSSTransition>
        </div>
    );
}

export default About;