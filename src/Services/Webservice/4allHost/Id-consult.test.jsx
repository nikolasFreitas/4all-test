import React from 'react';
import Consult from './Id-consult.jsx';

import {configure, shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('Consult ID of 4all REST', () => {
    test('Check if Consult exists', () => {
        expect(Consult).toBeDefined();
    });
});
