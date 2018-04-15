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
            name: 'toto',
            pic: 'toto-pic'
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
        // tslint:disable:max-line-length
        assert.equal(p.html(), `<div class="message mine"><div class="user"></div><div class="text">${dummyMessage.text}</div></div>`);
    });

    it('should render another message', () => {
        const wrapper2 = shallow(<ChattoMessage message={props.message} mine={false}/>);
        const p2 = wrapper2.find('div.message');
        // tslint:disable:max-line-length
        assert.equal(p2.html(), `<div class="message"><div class="user"><img class="chatto-pic" src="${dummyMessage.user.pic}" alt="${dummyMessage.user.name} profile picture"/></div><div class="text">${dummyMessage.text}</div></div>`);
    });
});
