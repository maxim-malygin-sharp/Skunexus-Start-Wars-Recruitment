import { useEffect, useState } from "react";
import { API } from "../network/api";

export const useGetEntities = (listUrls) => {
  const [values, setValues] = useState(null);

  const getListEntities = async () => {
    const entities = [];
    for (let url of listUrls) {
      const response = await API.getEntity(url);
      entities.push(response.data);
    }
    setValues(entities);
  };

  useEffect(() => {
    if (values === null && listUrls.length !== 0) {
      getListEntities();
    }
  }, [listUrls]);

  return values;
};
