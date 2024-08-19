import React from "react";
import { useMediaQuery } from "react-responsive";
import "../maincss/Charsmall.css";
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

export default function Charsmall() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1496px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 1497px) and (max-width: 1919px)",
  });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1920px)" });

  console.log("isSmallScreen:", isSmallScreen);
  console.log("isMediumScreen:", isMediumScreen);
  console.log("isLargeScreen:", isLargeScreen);

  const getChartSize = () => {
    if (isLargeScreen) {
      return { width: 467, height: 255 };
    } else if (isMediumScreen) {
      return { width: 374.4, height: 170 };
    } else if (isSmallScreen) {
      return { width: 374.4, height: 170 };
    } else {
      return { width: 374.4, height: 170 }; // Default size
    }
  };

  const { width, height } = getChartSize();
  console.log("Chart size:", { width, height });

  return (
    <>
      <div className="char2">
        <div className="char-title3">
          <span>Unique visitors</span>
          <select>
            <option>Weekly</option>
          </select>
        </div>
        <div className="char-small">
          <LineChart width={width} height={height} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </>
  );
}
