import {
    combineReducers,
    Reducer,
    ReducersMapObject
} from 'redux';
import {
    messageReducer,
    IMessageState
} from './message.reducer';

export interface IState {
    readonly message: IMessageState;
}

export const reducers: ReducersMapObject = {
    message: messageReducer
};

export const chattoReducers: Reducer<IState> = combineReducers(reducers);
