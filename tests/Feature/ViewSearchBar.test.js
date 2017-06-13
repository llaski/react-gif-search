//when the page initially loads, i want to see a search bar
//
//What does laravel do?
//- the tests never hit a web browser
//- basically generates a response based on the internal kernel from the information you send it
//  - getJson - essentially sets up all the data as if it was coming from a browser, and then its just normal from there
//          -> sends back the response to you in a test object that would normally end up in a browser

//What I want my javascript feature tests to do
//- tests not hit web browser
//- SPA
//  - view items on page (text, inputs, buttons, etc...). Would be items that are dynamic or crucial to functionality. Not general copy that can be changed easily.
//  - take an action - get a result. Ex: User types in search bar, they get gif results from api.
//- can use react utils for now
//
//- definitely drive out unit tests for components as this happens
//  - unit tests will prob be a lot heavier for JS end, which is fine
//  - mock api
//
//- Would still want E2E tests for cross browser testing + full work flows (Ex: 3 page form)
//Enzyme - can simulate rendering + events