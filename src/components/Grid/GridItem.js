import React, { useState, useRef, useEffect } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const GridItem = ({header, actions, row }) => {
  const [isShowActions, setIsShowActions] = useState(false);
  const [animation, setAnimation] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => setIsShowActions(false));
  
  useEffect(() => {
    if (isShowActions) {
      setAnimation(true);
    }
  }, [isShowActions])
  
  const handlePlanetClick = (e, row) => {
    e.preventDefault();
    const actionFn = actions.filter(item => item.label === 'Go to Planet detail')[0];
    if (actionFn) actionFn.action(row)
  }

  return (
    <tr>
      {header.map((colName) => {
        const hasGoPlanetAction = actions.filter(item => item.label === 'Go to Planet detail').length;
        if (colName === 'name' && hasGoPlanetAction) {
          return <td key={colName}>
            <a href="#" title="Go to Planet detail" onClick={e => handlePlanetClick(e, row)}>{row[colName]}</a>
          </td>
        }
        return <td key={colName}>{colName}{row[colName]}</td>
      })}
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
              <div className={`actions__box ${animation ? 'shown':''}`} ref={menuRef}>
                {actions.map(({label, action}) => <button key={label} className="actions__link" onClick={() => action(row)}>{label}</button>)}
              </div>}
          </div>
        </td>
      }
    </tr>
  );
}
 
export default GridItem;