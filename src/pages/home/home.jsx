import React from 'react';
import Chart from '../../component/chart/Chart';
import Featuredinfo from '../../component/featuredinfo/featuredinfo';
import "./home.css"
import { userData } from '../../dummy';

export default function home() {
    return (
        <div className="home">
            <Featuredinfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        </div>
    )
}
