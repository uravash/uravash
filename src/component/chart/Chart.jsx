import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className="chart">
            <h3 className="charttitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#black" />
                    <Line type="monotone" dataKey={dataKey} stroke="blue" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="black" strokeDasharray="3 3" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

