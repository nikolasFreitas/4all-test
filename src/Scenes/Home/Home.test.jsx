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

    it('expect 5 buttons of navigation', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find('.tool-box').children()).toHaveLength(5);
    });

    it('Checks if Map is renderizing', () => {
        const wrapper = mount(shallow(<Home />).get(0));
        // expect(wrapper.find('<GoogleMaps />').exists()).toBe(true);
    });


});
