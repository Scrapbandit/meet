import React from 'react';
import { mockData } from '../mock-data';
import NumberOfEvents from '../NumberOfEvents';
import { shallow } from 'enzyme';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents event={mockData[1]} />);
    });

test('render number of events', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.prop('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.number-of-events').prop('value')).toBe(numberOfEvents);
  });
  
});