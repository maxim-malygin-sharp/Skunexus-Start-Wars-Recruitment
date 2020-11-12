import React, { useState, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const GridItem = ({header, actions, row }) => {
  const [isShowActions, setIsShowActions] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => setIsShowActions(false));

  return (
    <tr>
      {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
      {!!actions.length && 
        <td className='gridActions'>
          <div className="actions">
            <button className="actions__btn" onClick={() => setIsShowActions(!isShowActions)}>
              <span className="actions__btn-icon">
                <svg x="0px" y="0px" viewBox="0 0 384 384">
                  <circle cx="192" cy="42.667" r="42.667"/>
                  <circle cx="192" cy="192" r="42.667"/>
                  <circle cx="192" cy="341.333" r="42.667"/>
                </svg>
              </span>
            </button>
            {isShowActions &&
              <div className={`actions__box ${isShowActions ? 'shown':''}`} ref={menuRef}>
                {actions.map(({label, action}) => <button key={label} className="actions__link" onClick={() => action(row)}>{label}</button>)}
              </div>}
          </div>
        </td>
      }
    </tr>
  );
}
 
export default GridItem;