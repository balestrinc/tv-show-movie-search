import React from 'react';
import Home from './Home';
import { mount } from "enzyme";
import { BrowserRouter as Router } from 'react-router-dom';


describe("<Home>", () => {

  it("render component", async () => {
    const homeComponent = mount(<Router><Home /></Router>);
    const header = homeComponent.find("#homeHeader");
    expect(header).toExist();
    expect(header.text()).toEqual("TV Show Search");
  });
});
