import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;

    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {

        given('user hasnt selected the preferences', async () => {
            AppWrapper = await mount(<App />);

        });

        when('user is on the page', () => {
            AppWrapper.update();

        });

        then('the number of events is 32 by default', () => {
            expect(AppWrapper.find('.event')).toHaveLength(2);

        });
    });


    test('User can change the number of events they want to see.', ({ given, when, then }) => {

        given('user enters settings', async () => {
            AppWrapper = await mount(<App />);

        });

        when('user changes the number of events by preference', () => {
            const eventObject = { target: { value: 1 } };
        AppWrapper.find('.number-of-events').simulate('change', eventObject);

        });

        then('the number is specified by user\'s choice', () => {
            AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(0);

        });
    });

});