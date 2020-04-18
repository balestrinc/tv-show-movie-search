import React from 'react';
import App from './App';
import { mount } from "enzyme";

describe("<App>", () => {

  it("render component", async () => {
    const appComponent = mount(<App />);
    const header = appComponent.find("#App-header");
    expect(header).toExist();
    expect(header.text()).toEqual("TV Show Search");
  });
});
