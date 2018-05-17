import React from 'react';
import Home from './Home';

import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import createRouterContext from 'react-router-test-context'


jest.mock('../../Services/Webservice/4allHost/Place-consult.jsx');

configure({ adapter: new Adapter() });

describe('Tests of Home scene', () => {
    // it('Test the initial states', () => {
    //     const context = createRouterContext();
    //
    //     const wrapper = shallow(<Home id={1} />, { context });
    //
    //     expect(wrapper.state('received')).toBe(false);
    //     expect(wrapper.state('response')).toBe(false);
    // });

    it('expect 5 buttons of navigation ', () => {
        const wrapper = render(<Home id={1} />);
        expect(wrapper.find('.nav-btn')).toHaveLength(5);
    });

    // it('Check if funtion to receive place-data is working as it should', async () => {
    //     const wrapper = await mount(<Home id={1} />);
    //     expect(wrapper.state('placeInfo').cidade).toEqual('Porto Alegre');
    //     expect(wrapper.state('received')).toBe(true);
    //     expect(wrapper.state('response')).toBe(true);
    // });

    it('Check if has an h1 informing the user that is waiting for data or data not found', async () => {
        const wrapper = await render(<Home id={5} />);
        expect(wrapper.find('.waiting-data').length).toBeGreaterThan(0);
    });


});
