import React from 'react';
import { render } from 'react-dom';
import {Subject} from 'rxjs';
import {Dashboard} from "./dashboard.component";
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

describe('Dashboard Component', function () {
    let mockDashboard$;
    let sut;
    beforeEach(function () {
       sut = <Dashboard dashboard$={mockDashboard$}/>;
       mockDashboard$ = new Subject();
    });

    it('should render with empty state', function () {
        expect(shallow(sut).state()).toEqual({
            temperature: '--',
            pressure: '--',
            humidity: '--'
        });
    });
});
