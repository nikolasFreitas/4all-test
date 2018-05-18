import React from 'react';
import Home from './Home';

import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import createRouterContext from 'react-router-test-context';
import {MemoryRouter, StaticRouter} from 'react-router-dom';


jest.mock('../../Services/Webservice/4allHost/Place-consult.jsx');


configure({ adapter: new Adapter() });

describe('Tests of Home scene', () => {
    it('Test the initial states', () => {
        const wrapper = shallow(
            <MemoryRouter>
                <Home match={{params: {id : '1'} }}/>
            </MemoryRouter>
        )
            .find(Home)
            .dive()
            .instance();

        expect(wrapper.state.received).toBe(false);
        expect(wrapper.state.response).toBe(false);
    });

    it('expect 5 buttons of navigation ', () => {

        const wrapper = render(
            <MemoryRouter>
                <Home match={{params: {id : '1'} }}/>
            </MemoryRouter>
        );
        expect(wrapper.find('.nav-btn')).toHaveLength(5);
    });

    it('Check if funtion to receive place-data is working as it should', async () => {

        const wrapper = await mount(
            <MemoryRouter>
                <Home match={{params: {id : '1'} }}/>
            </MemoryRouter>
        );

        const wrapperStates = wrapper.find(Home).instance().state;


        expect(wrapperStates.placeInfo.cidade).toEqual('Porto Alegre');
        expect(wrapperStates.received).toBe(true);
        expect(wrapperStates.response).toBe(true);
    });

    it('Check if has an h1 informing the user that is waiting for data or data not found', async () => {
        const wrapper = await render(
            <MemoryRouter>
                <Home match={{params: {id : '5'} }}/>
            </MemoryRouter>
        );
        expect(wrapper.find('.waiting-data').length).toBeGreaterThan(0);
    });


});
