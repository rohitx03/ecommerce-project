import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./Reducer/Root";

const store = configureStore({reducer:rootreducer})
export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import rootreducer from "./Reducer/Root";

// const store = configureStore({reducer:rootreducer});

// export default store;