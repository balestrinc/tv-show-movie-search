import mapToShowItem from "./mapToShowItem";
import matchingResultsTvSearch from "./../../tests/matchingResultsTvSearch.json";
import DefaultImage from "./../DefaultImage";


describe("mapToShowItem", () => {

    it("map all properties", () => {
        const tvShowServer = matchingResultsTvSearch[0].show;

        const result = mapToShowItem(tvShowServer);

        const expectedResult = {
            id: 776,
            title: "The O.C.",
            duration: 60,
            genres: ["Drama", "Comedy", "Romance"],
            images: {
                medium: "http://static.tvmaze.com/uploads/images/medium_portrait/6/15394.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/6/15394.jpg",
            },
            schedule: {
                days: ["Thursday"],
                time: "21:00"
            },
            showType: "Scripted",
            status: "Ended"
        }

        expect(result).toEqual(expectedResult);
    });

    it("set default images when prop image is null", async () => {
        let tvShowNoImage = { ...matchingResultsTvSearch[0].show };
        tvShowNoImage.image = null;


        const result = mapToShowItem(tvShowNoImage);

        const expectedResult = {
            id: 776,
            title: "The O.C.",
            duration: 60,
            genres: ["Drama", "Comedy", "Romance"],
            images: {
                medium: DefaultImage,
                original: DefaultImage,
            },
            schedule: {
                days: ["Thursday"],
                time: "21:00"
            },
            showType: "Scripted",
            status: "Ended"
        }

        expect(result).toEqual(expectedResult);
    });

    it("fetch tv shows set default images when image props are empty", async () => {
        let tvShowNoImage = { ...matchingResultsTvSearch[0].show };
        tvShowNoImage.image = { original: "", medium: "" };

        const result = mapToShowItem(tvShowNoImage);

        expect(result.images.original).toEqual(DefaultImage);
        expect(result.images.medium).toEqual(DefaultImage);
    });
});
