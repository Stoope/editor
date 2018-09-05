import React from "react";
import { Provider } from "react-redux";
import store from "./store";

const ReduxWithMidleware = WrappedComponent => {
  const Component = props => (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );
  return Component;
};

export default ReduxWithMidleware;
