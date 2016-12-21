import _ from "lodash";
import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default (props) => {
  return (
    <div className="chart">
      <Sparklines width={120} height={100} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine name="avg" />
        <div className="avg-label">Average: {average(props.data)} {props.unit}</div>
      </Sparklines>
    </div>
  );
}
