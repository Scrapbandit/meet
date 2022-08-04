import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    const genres = ["React", "Javascript", "Node", "jQuery", "AngularJS"];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) =>
        summary.replace(".js", "").split(" ").includes("genre")
      ).length;

      return { name: genre, value };
    });
    return data;
  };

  useEffect(() => {
    setData(() => getData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        ></Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
