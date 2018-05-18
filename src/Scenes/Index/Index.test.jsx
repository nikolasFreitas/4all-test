import React from 'react';
import Index from './Index.jsx';

import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import createRouterContext from 'react-router-test-context';

configure({ adapter: new Adapter() });

jest.mock('../../Services/Webservice/4allHost/Id-consult.jsx');

describe('Block of tests of Index scene', () => {

    it('check if Index states are the default', () => {
        const wrapper =  shallow(<Index />);
        expect(wrapper.state('received')).toBe(false);
        expect(wrapper.state('response')).toBe(false);
        expect(wrapper.state('idTable')).toEqual({});
    });

    test('check if Index states change when return the promise',async () => {
        const context = createRouterContext()
        const wrapper = await shallow(<Index />, { context });

        expect(wrapper.state('received')).toBe(true);
        expect(wrapper.state('response')).toBe(true);

    });
});
