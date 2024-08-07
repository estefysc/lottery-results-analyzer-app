import React, {useEffect, useState} from "react";
import axios from "axios";
// import {Pie, PieChart, ResponsiveContainer} from 'recharts';

import "./FrequentNums.css";

function FrequentNums() {
    const [numData, setNumData] = useState([]);
    const [plays, setPlays] = useState(0);

    async function getMostFreqNumbers() {
        const response = await axios.get("http://localhost:5000/frequentNums", {crossdomain: true})

        setNumData(response.data.freqNums.sixMostRepeatedNumbers);
        setPlays(response.data.freqNums.totalPlays);
    }

    useEffect(() => {
        console.log("From first useEffect");
        getMostFreqNumbers().catch(error => console.error(error));
    }, []);

    // const data = numData.map(
    //         ([number, appearanceTimes]) => {
    //             return {name: number.toString(), value: appearanceTimes}
    //         }
    // );

    // const RADIAN = Math.PI / 180;
    // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    //     const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
    //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
    //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

    //     return (
    //         <text x={x} y={y} fill="#C5C6C7" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    //             {data[index].name}
    //         </text>
    //     );
    // };

    // console.log(numData);
    // console.log(data);

    const listItems = numData.map(
        ([number, appearanceTimes]) => {
            return <ul key={number}>{number} appearing {appearanceTimes} times</ul>
        });

    return (
        <div className='main-container'>
            <div className='info-container'>
                <p className='info-text'>
                    The Florida Lotto, played since 1988, lets you choose 6 numbers between 1 and 53. So far, there
                    have been a total of <span style={{ color: '#C5C6C7' }}>{plays}</span> draws.
                    The six most frequent numbers and their frequencies are displayed to the right.
                </p>   
            </div>

            <div className='list-container'>
                <ul className='number-text'>
                    {listItems}
                </ul> 
            </div>
        </div>
    )
}

export default FrequentNums;