import React, {useEffect, useState} from "react";
import PercentageGraph from "./PercentageGraph";
import axios from "axios";

import "./AllNums.css";

function AllNums() {
    return (
        <div>
            <PercentageGraph />
            <p className="graphInfo">
                This will be the graph for all the numbers.
            </p>
        </div>
    )
}

export default AllNums;