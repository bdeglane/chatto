import { ADD_MESSAGE } from '../constant/message.constant';
import { IChattoMessage } from '../../model/message';
import { messageReducer } from './message.reducer';
import { IChattoAction } from '../action/type.action';
import { assert } from 'chai';

describe('message reducer', () => {

    const dummyMessage: IChattoMessage = {
        user: {
            id: 1,
            name: 'toto'
        },
        text: 'test',
        date: new Date()
    };
    const action: IChattoAction = {
        type: ADD_MESSAGE,
        payload: dummyMessage
    };
    describe(`${ADD_MESSAGE} action`, () => {
        it('should add new message in empty array', () => {
            const res: IChattoMessage[] = messageReducer([], action);
            assert.equal(res.length, 1);
            assert.deepEqual(res[0], dummyMessage);
        });

        it('should add new message at the end of the array', () => {
            const res2: IChattoMessage[] = messageReducer([dummyMessage], action);
            assert.equal(res2.length, 2);
            assert.deepEqual(res2[1], dummyMessage);
        });
    });
});
