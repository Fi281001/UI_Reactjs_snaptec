import React from "react";
import "../maincss/Char.css";
import { useMediaQuery } from "react-responsive";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 2000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
];
export default function Charline() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1496px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 1497px) and (max-width: 1919px)",
  });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1920px)" });

  // Ensure all screen sizes are handled
  const getChartSize = () => {
    if (isLargeScreen) {
      return { width: 849, height: 500 };
    } else if (isMediumScreen) {
      return { width: 624, height: 360 };
    } else if (isSmallScreen) {
      return { width: 400, height: 250 };
    } else {
      return { width: 624, height: 360 }; // Default size
    }
  };
  const { width, height } = getChartSize();
  return (
    <div classNae="char">
      <div className="char-title">
        <span>Sales statistics</span>
        <select>
          <option>Monthly</option>
        </select>
      </div>
      <div className="charline">
        <LineChart width={width} height={height} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
}
