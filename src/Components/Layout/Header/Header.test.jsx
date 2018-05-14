import React from 'react';
import Header from './Header';

import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Header component test', () => {
    it('Check if component is renderizing and have its own correctly nodes', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.header').exists()).toBe(true);
        expect(wrapper.find('.header-icon--backward').exists()).toBe(true);
    });

    it('Checks if the nav has two childs', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('.header-place').children()).toHaveLength(2);
    });

    it('Check if is receiving the right props', () => {
        const wrapper = mount(<Header placeName='Porto Alegre, RS'/>);
        expect(wrapper.prop('placeName')).toEqual('Porto Alegre, RS');
    });
});
