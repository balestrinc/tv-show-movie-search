import React from "react";
import { mount } from "enzyme";
import shortid from "shortid";
import ShowDetails from "./ShowDetails";


const anyShow = (overrides) => ({
  id: shortid.generate(),
  title: "Any Show Name",
  images: {
    medium: "http://medium.com.jpg",
    original: "http://original.com.jpg"
  },
  genres: ["Drama"],
  schedule: {
    days: ["Monday"],
    time: "20:00"
  },
  ...overrides,
});

const renderShowDetails = (propsOverrides) =>
  mount(
    <ShowDetails
      tvShows={[ anyShow() ]}
      {...propsOverrides}
    />,
  );

describe("<ShowDetails>", () => {

  it("render nothing if there is no data", async () => {
    const tree = renderShowDetails({
      show: null
    });

    expect(tree).toBeEmptyRender();
  });

  it("render Show Details", async () => {
    const tree = renderShowDetails({
      show: anyShow(),
    });

    expect(tree.find("#showDetails")).toExist();
    });
});
