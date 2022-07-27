import React, { FunctionComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,Tooltip, ResponsiveContainer } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
  {
    name: "Saturday",
    visitor: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Sunday",
    visitor: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Monday",
    visitor: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Tuesday",
    visitor: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Wednesday",
    visitor: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Thursday",
    visitor: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Friday",
    visitor: 2390,
    pv: 3800,
    amt: 2500
  },

];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
    } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
    }, ${y + height}
  Z`;
};

const TriangleBar: FunctionComponent<any> = (props: any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageVisitor = () => {
  return (
    <div>
      <h2>Visitors Past 7 Days</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="visitor"
            fill="blue"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>

  );
}

export default PageVisitor;
