import React from 'react';
import Header from './Header';

import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Header component test', () => {
    it('Check if component is renderizing and have its own correctly nodes', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.header').exists()).toBe(true);
        expect(wrapper.find('.backward-icon').exists()).toBe(true);
    });

    it('Checks if is receiving props', () => {
        const wrapper = shallow(<Header placeName='Porto Alegre, RS'/>);
        expect(wrapper.find('.header-place').children()).toHaveLength(2);
    });

});
