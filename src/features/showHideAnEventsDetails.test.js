import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
// import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    
    let AppWrapper;

    test('An event element is collapsed by default.', ({ given, when, then }) => {

        given('user is on the home page', async () => {
            AppWrapper = await mount(<App />);

        });

        when('nothing is selected', () => {
            AppWrapper.update();

        });

        then('the event list will stay hiden', () => {
        expect(AppWrapper.find('.event .details-button')).toHaveLength(2);

        });
    });


    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user wants to check a particular event', async () => {
            AppWrapper = await mount(<App />);
        });

        when('user clicks of event', () => {
         AppWrapper.update();
         expect(AppWrapper.find('.event .details-button')).toHaveLength(2);
         AppWrapper.find('.event .details-button').at(0).simulate('click');

        });

        then('it shows the events details', () => {
         expect(AppWrapper.find('.event .extra-details')).toHaveLength(1);

        });
    });


    test('User can collapse an event to hide its details.', ({ given, when, then }) => {

        given('user already checked the details', async () => {
            AppWrapper = await mount(<App />);

        });

        when('user exits the event details', () => {
            AppWrapper.update();
            AppWrapper.find('.event .details-button').at(0).simulate('click');

        });

        then('the event collapse back to hide', () => {
            expect(AppWrapper.find('.event .extra-details')).toHaveLength(1);
        });
    });

});
