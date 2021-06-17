import React from "react"
import {Provider} from "react-redux"
import {store} from "../src/_redux/_store"
import Search from "../src/_pages/Search.jsx"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Search/>
    </div>
    </Provider>
  );
}

export default App;
