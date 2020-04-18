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

const selectedShowClassName = "matchingTvShowSelected";

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

  it("pass selected show to callback", async () => {
    const selectedTvShow = anyMatchingShow({ title: "Batman", id: 99 });
    const onMatchingTvShowClick = jest.fn();
    const tree = renderMatchingTvShows({
      tvShows: [
        anyMatchingShow({ title: "Bat" }),
        selectedTvShow,
        anyMatchingShow({ title: "Batman and Robin" }),
      ],
      onMatchingTvShowClick
    });

    tree.find("#matchingTvShow_99").simulate("click");

    expect(onMatchingTvShowClick).toHaveBeenCalledWith(selectedTvShow);
  });

  it("distinguish selected show", async () => {
    const tree = renderMatchingTvShows({
      tvShows: [
        anyMatchingShow({ title: "Bat", id: 5}),
        anyMatchingShow({ title: "Batman", id: 99 }),
        anyMatchingShow({ title: "Batman and Robin", id: 10 }),
      ],
      onMatchingTvShowClick: jest.fn(),
      selectedTvShowId: 99
    });

    tree.find("#matchingTvShow_99").simulate("click");

    expect(tree.find("#matchingTvShow_99")).toHaveClassName(selectedShowClassName);
    expect(tree.find("#matchingTvShow_5")).not.toHaveClassName(selectedShowClassName);
    expect(tree.find("#matchingTvShow_10")).not.toHaveClassName(selectedShowClassName);
  });

  it("distinguish nothing, if no Matching show is selected", async () => {
    const tree = renderMatchingTvShows({
      tvShows: [
        anyMatchingShow({ title: "Bat", id: 5 })
      ],
      onMatchingTvShowClick: jest.fn(),
      selectedTvShowId: null
    });

    expect(tree.find("#matchingTvShow_5")).not.toHaveClassName(selectedShowClassName);
  });
});
