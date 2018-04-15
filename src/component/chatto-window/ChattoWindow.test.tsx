import * as React from 'react';
import { mount } from 'enzyme';
import * as assert from 'assert';
import {
    ChattoWindow,
    IChatWindowProps
} from './ChattoWindow';
import { IChattoMessage } from '../../model/message';

describe('ChattoInput', () => {

    const dummyMessage: IChattoMessage = {
        user: {
            id: 1,
            name: 'toto',
            pic: ''
        },
        text: 'test',
        date: new Date()
    };

    const props: IChatWindowProps = {
        messages: [dummyMessage, {...dummyMessage, text: 'test-2', user: {...dummyMessage.user, id: 2}}],
        userId: 1
    };

    it('should render', () => {
        mount(<ChattoWindow messages={props.messages} userId={props.userId}/>);
    });

    it('should render 2 messages', () => {
        const wrapper = mount(<ChattoWindow messages={props.messages} userId={props.userId}/>);
        const messages = wrapper.find('.messages');
        // must have to node
        assert.equal(messages.children().length, 2);
        // test each child
        const props1 = messages.children().get(0).props;
        const props2 = messages.children().get(1).props;
        assert.deepEqual(props1.message, (props as any).messages[0]);
        assert.deepEqual(props2.message, (props as any).messages[1]);
    });
});
