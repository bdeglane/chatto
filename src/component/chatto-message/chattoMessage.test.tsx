import * as React from 'react';
import { shallow } from 'enzyme';
import * as assert from 'assert';
import {
    ChattoMessage,
    IChattoMessageProps
} from './ChattoMessage';
import { IChattoMessage } from '../../model/message';

describe('ChattoInput', () => {

    const dummyMessage: IChattoMessage = {
        user: {
            id: 2,
            name: 'toto'
        },
        text: 'test',
        date: new Date()
    };

    const props: IChattoMessageProps = {
        message: dummyMessage,
        mine: true
    };

    it('should render', () => {
        shallow(<ChattoMessage message={props.message} mine={true}/>);
    });

    it('should render my message', () => {
        const wrapper = shallow(<ChattoMessage message={props.message} mine={true}/>);
        const p = wrapper.find('div.message');
        assert.equal(p.html(), `<div class="message mine">${dummyMessage.text}</div>`);
    });

    it('should render another message', () => {
        const wrapper2 = shallow(<ChattoMessage message={props.message} mine={false}/>);
        const p2 = wrapper2.find('div.message');
        assert.equal(p2.html(), `<div class="message">${dummyMessage.text}</div>`);
    });
});
