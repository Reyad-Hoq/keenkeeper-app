import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InteractionContext } from "../context/InteractionContext";

const StatsPage = () => {
  const { timelines } = useContext(InteractionContext);
  const data = [
    { name: 'text', value: 400, fill: '#0088FE' },
    { name: 'call', value: 300, fill: '#FFBB28' },
    { name: 'video', value: 200, fill: '#FF8042' },
  ];
  const RADIAN = Math.PI / 180;
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
      return null;
    }
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const ncx = Number(cx);
    const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const ncy = Number(cy);
    const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > ncx ? 'start' : 'end'} dominantBaseline="central">
        {`${((percent ?? 1) * 100).toFixed(0)}%`}
      </text>
    );
  };

  const MyCustomPie = ({ PieSectorShapeProps }) => {
    return <Sector {...props} fill={COLORS[props.index % COLORS.length]} />;
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] my-10">
      <h2 className="text-4xl font-semibold">Friendship Analytics</h2>
      <PieChart style={{
        width: '100%',
        maxWidth: '500px',
        maxHeight: '80vh',
        aspectRatio: 1
      }}
        responsive
      >
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default StatsPage;