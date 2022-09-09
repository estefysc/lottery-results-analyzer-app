import React, {useEffect, useState} from "react";
import axios from "axios";

import "./EvenOdds.css";

function EvenOdds() {
    const [text, setText] = useState("");

    // function getNumData() {
    //     axios.get("http://localhost:5000/frequentNums", {crossdomain: true})
    //         .then(response => {
    //             setText(response.data.freqNums.map(
    //                 number => number.toString()
    //             ).join(", "));
    //         });
    // }

    // useEffect(() => getNumbers(), []);

    return(

        <div>
            <p className='number-text'>{text}</p>
        </div>
    )
}

export default EvenOdds;