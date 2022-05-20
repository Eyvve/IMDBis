
import { createStore } from '@reduxjs/toolkit';

import AuthReducer from '../Reducers/AuthReducer';

  export const store = createStore(AuthReducer)