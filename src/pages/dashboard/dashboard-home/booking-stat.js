import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
    {
        name: 'January',
        bookings: 1000,
    },
    {
        name: 'February',
        bookings: 3000,
    },
    {
        name: 'March',
        bookings: 2000,
        
    },
    {
        name: 'April',
        bookings: 2780,
        
    },
    {
        name: 'May',
        bookings: 1890,
        
    },
    {
        name: 'June',
        bookings: 2390,
        
    },
    {
        name: 'July',
        bookings: 3490,
        
    },
    {
        name: 'August',
        bookings: 3490,
        
    },
    {
        name: 'September',
        bookings: 3490,
        
    },
    {
        name: 'October',
        bookings: 3490,
        
    },
    {
        name: 'November',
        bookings: 3490,
       
    },
    {
        name: 'December',
        bookings: 3490,
        
    },
];

const cardinal = curveCardinal.tension(0.2);

const OrdersYearly = () => {

    return (
        <div>
            <h2>Booking Stat, 2022</h2>
            
            <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                    type={cardinal}
                    dataKey="bookings"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    fillOpacity={0.3}
                />
            </AreaChart>
            </ResponsiveContainer>
        </div>
            
    );
};

export default OrdersYearly;