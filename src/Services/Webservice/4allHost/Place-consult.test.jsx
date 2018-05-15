import React from 'react';
import * as getPlace from './Place-consult.jsx'

import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Place consult general tests', () => {
    it('Test if getPlace is defined', () => {
        expect(getPlace).toBeDefined();
    });
});
