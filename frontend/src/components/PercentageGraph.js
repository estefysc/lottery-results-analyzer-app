import React, {useEffect, useState}  from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import axios from "axios";

function PercentageGraph() {
    const [data, setData] = useState("");

    function getData() {
        axios.get("http://localhost:5000/evenOdd", {crossdomain: true})
            .then(response => {
                setData(response.data);
            });
    }

    useEffect(() => getData(), []);

    const graphInfo = [
        {
            name: 'Zero Even Numbers',
            uv: `${Math.round(data.percentZeroEven * 100) / 100}`
        },
        {
            name: 'One Even Number',
            uv: `${Math.round(data.percentOneEven * 100) / 100}`
        },
        {
            name: 'Two Even Numbers',
            uv: `${Math.round(data.percentTwoEven * 100) / 100}`
        },
        {
            name: 'Three Even Numbers',
            uv: `${Math.round(data.percentThreeEven * 100) / 100}`
        },
        {
            name: 'Four Even Numbers',
            uv: `${Math.round(data.percentFourEven * 100) / 100}`
        },
        {
            name: 'Five Even Numbers',
            uv: `${Math.round(data.percentFiveEven * 100) / 100}`
        },
        {
            name: 'Six Even Numbers',
            uv: `${Math.round(data.percentSixEven * 100) / 100}`
        },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={graphInfo}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default PercentageGraph;
