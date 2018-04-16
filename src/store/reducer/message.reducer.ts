import { IChattoAction } from '../action/type.action';
import { IChattoMessage } from '../../model/message';
import { Reducer } from 'redux';
import { ADD_MESSAGE } from '../constant/message.constant';
import {
    user1pic,
    user2pic
} from '../../images';

export type IMessageState = IChattoMessage[];

const initialState: IChattoMessage[] = [
    {
        user: {
            id: 2,
            name: 'Bar',
            pic: `${user2pic}`
        },
        text: 'bonjour',
        date: new Date()
    },
    {
        user: {
            id: 1,
            name: 'Foo',
            pic: `${user1pic}`
        },
        text: 'bonjour',
        date: new Date()
    }
];

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
