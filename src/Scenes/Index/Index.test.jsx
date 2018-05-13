import React from 'react';
import Index from './Index.jsx';

jest.mock('../../Services/Webservice/4allHost/Id-consult.jsx');

describe('Block of tests of Index scene', () => {
    it('Check if Index scene is defined', () => {
        expect(<Index />).toBeDefined();
    });
});
