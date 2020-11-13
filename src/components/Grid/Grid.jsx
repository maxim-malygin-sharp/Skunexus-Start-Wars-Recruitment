import React from "react";
import GridItem from "./GridItem";
import PropTypes from "prop-types";

import "./Grid.css";

function Grid({ data: { header = [], values = [], actions = [] } }) {
  return (
    <div className="container">
      <table className="gridTable">
        <thead>
          <tr>
            {header.map((colName) => (
              <th key={colName}>{colName}</th>
            ))}
            {!!actions.length && <th></th>}
          </tr>
        </thead>
        <tbody>
          {values.map((row, index) => (
            <GridItem key={index} row={row} header={header} actions={actions} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Grid;

Grid.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.string),
    values: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    ),
    actions: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
