import React from 'react';

import { PieChart, Pie, Cell, ResponsiveContainer,Tooltip } from 'recharts';
import variables from '../../../sass/_variable.module.scss'

const data = [
    { name: '5 Star', value: 400 },
    { name: '4 Star', value: 300 },
    { name: '3 Star', value: 300 },
    { name: '2 Star', value: 200 },
    { name: '1 Star', value: 100 },
];

const COLORS = [
    variables.midBlue,
    variables.colorGreen,
    variables.colorPink,
    variables.colorGrey,
    variables.colorRed,

];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const RatingStat = () => {
    return (
        <div>
            <h2 className='text-center'>User Ratings</h2>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="blue"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingStat;