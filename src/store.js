import React, { createContext, useReducer, useContext } from "react";
  import reducer, { initialState } from "./reducer";
  const Store = createContext();
  
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
  
    return <Store.Provider value={value}>{children}</Store.Provider>;
  };
  
  const connect = (
    mapStateToProps = () => {},
    mapDispatchToProps = () => {}
  ) => WrappedComponent => {
    return props => {
      const { dispatch, state } = useContext(Store);
      return (
        <WrappedComponent
          dispatch={dispatch}
          {...mapStateToProps(state, props)}
          {...mapDispatchToProps(dispatch)}
        />
      );
    };
  };
  
  export { Store, Provider, connect };