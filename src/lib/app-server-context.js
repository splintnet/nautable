import {createContext, useReducer} from "react";

const defaultGlobalState = {
  open: false
};
export const GlobalStateContext = createContext(defaultGlobalState);
export const DispatchStateContext = createContext(undefined);

export const GlobalStateProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    (state, newValue) => ({...state, ...newValue}),
    defaultGlobalState
  );
  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  );
};
