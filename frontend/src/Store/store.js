
import { createStore } from '@reduxjs/toolkit';

import LogOutReducer from '../Reducers/AuthReducer';

  export const store = createStore(AuthReducer)