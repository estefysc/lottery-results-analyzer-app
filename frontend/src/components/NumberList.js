import React, {useState} from "react";
import axios from "axios";
import "./NumberList.css";

function NumberList() {
    const [text, setText] = useState("");

    function getNumbers() {
        axios.get("http://localhost:5000/", {crossdomain: true})
            .then(response => {
                setText(response.data.setOfSix.map(
                    number => number.toString()
                ).join(", "));
            });
    }

    return(
        <div>
            <button className='btn' onClick={getNumbers}>
                Show Random Result
            </button>
            <p className='number-text'>{text}</p>
        </div>
    )
}

export default NumberList;