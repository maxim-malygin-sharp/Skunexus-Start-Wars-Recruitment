import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const GridItem = ({ header, actions, row }) => {
  const [isShowActions, setIsShowActions] = useState(false);
  const setShowActions = () => setIsShowActions(!isShowActions);
  const [animation, setAnimation] = useState(false);
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => setIsShowActions(false));

  useEffect(() => {
    if (isShowActions) {
      setAnimation(true);
    }
  }, [isShowActions]);

  const handlePlanetClick = (e) => {
    e.preventDefault();
    const actionFn = actions.filter(
      (item) => item.label === "Go to Planet detail"
    )[0];
    if (actionFn) actionFn.action(row);
  };

  return (
    <tr>
      {header.map((colName) => {
        const hasGoPlanetAction = actions.filter(
          (item) => item.label === "Go to Planet detail"
        ).length;
        if (colName === "name" && hasGoPlanetAction) {
          return (
            <td key={colName}>
              <a
                href="#"
                title="Go to Planet detail"
                onClick={handlePlanetClick}
              >
                {row[colName]}
              </a>
            </td>
          );
        }
        return <td key={colName}>{row[colName]}</td>;
      })}
      {!!actions.length && (
        <td className="gridActions">
          <div className="actions">
            <button className="actions__btn" onClick={setShowActions}>
              <span className="actions__btn-icon">
                <svg x="0px" y="0px" viewBox="0 0 384 384">
                  <circle cx="192" cy="42.667" r="42.667" />
                  <circle cx="192" cy="192" r="42.667" />
                  <circle cx="192" cy="341.333" r="42.667" />
                </svg>
              </span>
            </button>
            {isShowActions && (
              <div
                className={`actions__box ${animation ? "shown" : ""}`}
                ref={menuRef}
              >
                {actions.map(({ label, action }) => (
                  <button
                    key={label}
                    className="actions__link"
                    onClick={() => action(row)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </td>
      )}
    </tr>
  );
};

export default GridItem;

GridItem.propTypes = {
  header: PropTypes.arrayOf(PropTypes.string),
  row: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  actions: PropTypes.arrayOf(PropTypes.object),
};
