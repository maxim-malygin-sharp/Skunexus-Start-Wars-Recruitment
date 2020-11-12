import React, { useState } from 'react';

const GridItem = ({header, actions, row }) => {
  const [isShowActions, setIsShowActions] = useState(false);
  return (
    <tr>
      {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
      {!!actions.length && 
        <td className='gridActions'>
          <div className="actions">
            <button className="actions__btn" onClick={() => setIsShowActions(!isShowActions)}>...</button>
            {isShowActions &&
              actions.map(({label, action}) => <button onClick={() => action(row)}>{label}</button>)}
          </div>
        </td>
      }
    </tr>
  );
}
 
export default GridItem;