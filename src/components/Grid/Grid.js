import GridItem from "./GridItem";

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
