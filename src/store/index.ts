import {
    applyMiddleware,
    createStore,
    Store
} from 'redux';
import {
    chattoReducers,
    IState
} from './reducer';
import { logger } from './middleware/logger';

export const chattoStore: Store<IState> = createStore(
    chattoReducers,
    applyMiddleware(logger)
);
