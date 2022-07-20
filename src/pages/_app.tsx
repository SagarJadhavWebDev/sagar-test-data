import { useStore } from "react-redux";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "redux/rootReducers";

import "../styles/globals.scss";

function App({ Component, pageProps }) {
  const store = createStore(rootReducers);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
