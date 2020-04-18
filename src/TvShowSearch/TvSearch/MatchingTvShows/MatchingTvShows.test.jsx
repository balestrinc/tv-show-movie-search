import React from "react";
import { mount } from "enzyme";
import shortid from "shortid";
import MatchingTvShows from "./MatchingTvShows";


const anyMatchingShow = (overrides) => ({
  id: shortid.generate(),
  title: "Any Show Name",
  images: {
    medium: "http://medium.com.jpg",
    original: "http://original.com.jpg"
  },
  ...overrides,
});

const renderMatchingTvShows = (propsOverrides) =>
  mount(
    <MatchingTvShows
      tvShows={[ anyMatchingShow() ]}
      {...propsOverrides}
    />,
  );

describe("<MatchingTvShows>", () => {

  it("render nothing if there is no data", async () => {
    const tree = renderMatchingTvShows({
      tvShows: []
    });

    expect(tree).toBeEmptyRender();
  });

  it("render Matching Shows", async () => {
    const tree = renderMatchingTvShows({
      tvShows: [
        anyMatchingShow({ title: "Batman" }),
        anyMatchingShow({ title: "Batman and Robin" }),
      ],
    });

    expect(tree.find(".matchingTvShow")).toHaveLength(2);
    expect(tree.find(".matchingTvShow").at(0)).toHaveText("Batman");
    expect(tree.find(".matchingTvShow").at(1)).toHaveText("Batman and Robin");
  });
});
