import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InteractionContext } from "../context/InteractionContext";

const StatsPage = () => {
  const { timelines } = useContext(InteractionContext);
  console.log(timelines)
  const counts = timelines.reduce((acc, item) => {
    acc[item.action] = (acc[item.action] || 0) + 1;
    return acc;
  }, {});
  const data = [
    { name: 'call', value: counts.call || 0, fill: '#FFBB28' },
    { name: 'text', value: counts.text || 0, fill: '#0088FE' },
    { name: 'video', value: counts.video || 0, fill: '#FF8042' },
  ];
  const RADIAN = Math.PI / 180;

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

  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] my-10 border border-slate-300  mx-auto w-9/12 rounded-lg py-5">
      <h2 className="text-5xl font-bold text-base-content/80">Friendship Analytics</h2>
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