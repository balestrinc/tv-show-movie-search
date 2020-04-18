import React from "react";
import { mount } from "enzyme";

import PhraseInput from "./PhraseInput";

const renderPhraseInput = (propsOverrides) =>
  mount(
    <PhraseInput
      phrase=""
      onPhraseChange={() => { }}
      onSearchClick={() => { }}
      {...propsOverrides}
    />,
  );

describe("<PhraseInput>", () => {

  it("render provided phrase", async () => {
    const tree = renderPhraseInput({
      phrase: "fancy phrase",
    });

    expect(tree.find("input")).toHaveValue("fancy phrase");
  });

  it("pass typed phrase to callback", async () => {
    const onPhraseChangeMock = jest.fn();
    const tree = renderPhraseInput({
      onPhraseChange: onPhraseChangeMock,
    });

    tree.find("#phraseInput").simulate("change", { target: { value: "what a phrase!" } });

    expect(onPhraseChangeMock).toHaveBeenCalledWith("what a phrase!");
  });

  it("send click search button to callback", async () => {
    const onSearchClickMock = jest.fn();
    const tree = renderPhraseInput({
      onSearchClick: onSearchClickMock,
    });

    tree.find("#buttonSearch").simulate("click");

    expect(onSearchClickMock).toHaveBeenCalled();
  });
});
