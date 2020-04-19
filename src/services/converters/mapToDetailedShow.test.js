import mapToDetailedShow from "./mapToDetailedShow";
import showDetails from "./../../tests/showDetails.json";


describe("mapToDetailedShow", () => {

    it("map all properties", () => {
        const result = mapToDetailedShow(showDetails);

        const expectedResult = {
            id: 1,
            title: "Under the Dome",
            images: {
                medium: "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
                original: "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
            },
            duration: 60,
            schedule: {
                time: "22:00",
                days: [ "Thursday" ]
            },
            status: "Ended",
            showType: "Scripted",
            genres: ["Drama","Science-Fiction","Thriller"],
            cast: [
                "Mackenzie Lintz",
                "Dean Norris",
                "Mike Vogel",
                "Rachelle Lefevre",
                "Alexander Koch",
                "Colin Ford",
                "Eddie Cahill",
                "Nicholas Strong",
                "Britt Robertson",
                "Aisha Hinds",
                "Natalie Martinez",
                "Karla Crome",
                "Kylie Bunbury",
                "Jolene Purdy",
                "Jeff Fahey"
            ],
            seasons: [
                {
                    season: 1,
                    episodes: [
                        {
                            id: 1,
                            name: "Pilot",
                            number: 1
                        },
                        {
                            id: 2,
                            name: "The Fire",
                            number: 2
                        },
                        {
                            id: 3,
                            name: "Manhunt",
                            number: 3
                        },
                        {
                            id: 4,
                            name: "Outbreak",
                            number: 4
                        }
                    ]
                },
                {
                    season: 2,
                    episodes: [
                        {
                            id: 14,
                            name: "Heads Will Roll",
                            number: 1
                        },
                        {
                            id: 15,
                            name: "Infestation",
                            number: 2
                        },
                        {
                            id: 16,
                            name: "Force Majeure",
                            number: 3
                        },
                        {
                            id: 17,
                            name: "Revelation",
                            number: 4
                        }
                    ]
                }
            ]
        };

        expect(result).toEqual(expectedResult);
    });
});
