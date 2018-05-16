import React from 'react';
import Comments from './Comments.jsx';

import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Comments component tests', () => {
    it('Check if have just one image', () => {
        const wrapper = shallow(<Comments />);
        expect(wrapper.find('img').exists()).toBe(true);
    });

    it('Check if user have a name', () => {
        const wrapper = shallow(<Comments />);
        expect(wrapper.find('.comment-name').exists()).toBe(true);
    });

    it('Check if comment have a title', () => {
        const wrapper = shallow(<Comments />);
        expect(wrapper.find('.comment-title').exists()).toBe(true);
    });

    it('Check if have comment', () => {
        const wrapper = mount(<Comments comment="comment" name="name" title="title" imageSrc="imageSrc" rate="rate"/>);
        expect(wrapper.prop('comment')).toBeDefined();
    });
});
