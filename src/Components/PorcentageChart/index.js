import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ColumnChart = ({ data }) => {
  return (
    <BarChart width={500} height={180} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value"/>
    </BarChart>
  );
};

export default ColumnChart;
