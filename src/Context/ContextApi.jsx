import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
// eslint-disable-next-line react-refresh/only-export-components
export const ApiDataContext = createContext();

const ContextApi = (props) => {
  const [api, setApi] = useState(null);
  useEffect(() => {
    const ApiCall = async () => {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=25&skip=3`,
      );
      setApi(response.data.products);
    };
    ApiCall();
  }, []);

  return (
    <div>
      <ApiDataContext.Provider value={api}>
        {props.children}
      </ApiDataContext.Provider>
    </div>
  );
};

export default ContextApi;
