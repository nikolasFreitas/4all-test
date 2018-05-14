import React from 'react';
import Home from './Home';

import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Tests of Home scene', () => {
    it('Test the initial states', () => {
        const wrapper = shallow(<Home />);

        expect(wrapper.state('received')).toBe(false);
        expect(wrapper.state('response')).toBe(false);
        expect(wrapper.state('userInfo')).toEqual({});
    });


});
