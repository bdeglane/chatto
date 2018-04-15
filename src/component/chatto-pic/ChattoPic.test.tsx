import * as React from 'react';
import { shallow } from 'enzyme';
import { ChattoPic } from './ChattoPic';

describe('ChattoPic component', () => {
    it('shoud render', () => {
        shallow(<ChattoPic src={''} alt={''}/>);
    });
});
