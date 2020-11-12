import React, { useState, useEffect, useRef } from "react";
import "./Multiselect.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { fieldTypes } from "./fieldTypes";

const MultiSelect = (props) => {
  const [active, setActive] = useState(false);
  const [items, setItems] = useState([]);
  const [val, setValue] = useState("");
  const el = useRef(null);
  const { register, placeholder, value, onChange } = props;

  useOnClickOutside(el, () => setActive(false));

  useEffect(() => {
    const items = value.split(",");
    setItems(items);
    setValue(value);
  }, []);

  const getItems = () => {
    return fieldTypes.map((i, index) => (
      <li
        className="multiselect__item"
        key={i + index}
        onClick={() => handleFilter(i)}
      >
        <span className="multiselect__icon">
          {items.includes(i) && (
            <svg viewBox="0 0 468.293 468.293">
              <circle cx="234.146" cy="234.146" r="234.146" />
              <polygon
                fill="#fff"
                points="357.52,110.145 191.995,275.67 110.773,194.451 69.534,235.684 191.995,358.148
                398.759,151.378 "
              />
            </svg>
          )}
        </span>
        {i}
      </li>
    ));
  };

  const handleFilter = (value) => {
    if (items.includes(value)) {
      setItems(items.filter((i) => i !== value));
      setValue(items.filter((i) => i !== value).join(","));
    } else {
      setItems([...items, value]);
      setValue([...items, value].join(","));
    }
  };

  return (
    <div className={`multiselect ${active ? "active" : ""}`} ref={el}>
      <input
        name="terrain"
        type="text"
        className="multiselect__input"
        placeholder={placeholder}
        required
        value={val}
        onChange={onChange}
        ref={register}
      />
      <div className="multiselect__field" onClick={() => setActive(true)}>
        {items.join(",")}
      </div>
      <ul className="multiselect__list">{items && getItems(value)}</ul>
    </div>
  );
};

export default MultiSelect;
