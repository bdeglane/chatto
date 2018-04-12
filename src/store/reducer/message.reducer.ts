import { IChattoAction } from '../action/type.action';
import { IChattoMessage } from '../../model/message';
import { Reducer } from 'redux';
import { ADD_MESSAGE } from '../constant/message.constant';

export type IMessageState = IChattoMessage[];

const initialState: IChattoMessage[] = [];
/**
 *
 * @param {IChattoMessage[]} state
 * @param {IChattoAction} action
 * @returns {IChattoMessage[]}
 */
export const messageReducer: Reducer<IChattoMessage[]> =
    (state = initialState, action: IChattoAction): IChattoMessage[] => {
        switch (action.type) {

            case (ADD_MESSAGE):
                state = [...state, action.payload];
                break;

            default:
                break;
        }
        return state;
    };
