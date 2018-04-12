import * as React from 'react';
import {
    ChattoInput,
    IChattoInputState
} from './ChattoInput';
import { shallow } from 'enzyme';
import * as assert from 'assert';

describe('ChattoInput', () => {

    const props = {
        onAddMessage: (message: string) => {
            console.warn(message);
        }
    };

    it('should render', () => {
        shallow(<ChattoInput onAddMessage={props.onAddMessage}/>);
    });

    it('should render empty state', () => {
        const wrapper = shallow(<ChattoInput onAddMessage={props.onAddMessage}/>);
        assert.equal((wrapper.state() as IChattoInputState).message, '');
    });

});
