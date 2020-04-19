import mapToShowCreator from "./mapToShowCreator";
import showCrew from "./../../tests/showCrew.json";


describe("mapToShowCreator", () => {

    it("map creator", () => {
        const result = mapToShowCreator(showCrew);

        const expectedResult = "Jon Bokenkamp";

        expect(result).toEqual(expectedResult);
    });

    it("map to empty when creator not present", () => {
        const noCreator = [showCrew[0]];
        const result = mapToShowCreator(noCreator);

        const expectedResult = "";

        expect(result).toEqual(expectedResult);
    });
});
