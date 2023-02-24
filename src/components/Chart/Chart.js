import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
  // Transform dataPoint object to a number (map method will return an array comprising only of numbers). 12 months therefore 12 values.
  const totalMaximum = Math.max(...dataPointValues)
  // Find the biggest value across all the months. (The max value to be represented in the chart). Max method requires list of arguments instead of array so use spread operator to pull all array elements and add them as standalone arguments to max method. maxmethod now receives 12 arguments (12 expense values) from array pulled from spread operator
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
