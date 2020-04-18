import TvShowService from "./TvShowService";
import matchingResultsTvSearch from "./../tests/matchingResultsTvSearch.json";
import DefaultImage from "./DefaultImage";


describe("TvShowService", () => {

  it("fetch tv shows return parsed content", async () => {
    const httpClientMock = { get: () => Promise.resolve({ data: matchingResultsTvSearch }) };

    const phrase = "The oc";
    const result = await TvShowService({ httpClient: httpClientMock })
      .fetchTvShows(phrase);

    const expectedResult = [
      {
        "id": 776,
        "title": "The O.C.",
        "duration": 60,
        "genres": [
          "Drama",
          "Comedy",
          "Romance"
        ],
        "images": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/6/15394.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/6/15394.jpg",
        },
        "schedule": {
          "days": [
            "Thursday"
          ],
          "time": "21:00"
        },
        "showType": "Scripted",
        "status": "Ended"
      },
      {
        "id": 42936,
        "title": "City of Light: The O.C. Thailand",
        "duration": 60,
        "genres": [
          "Drama",
          "Romance"
        ],
        "images": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/204/511935.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/204/511935.jpg",
        },
        "schedule": {
          "days": [
            "Monday",
            "Tuesday"
          ],
          "time": "20:30"
        },
        "showType": "Scripted",
        "status": "Ended",
      },
      {
        "id": 9027,
        "title": "Tamra's OC Wedding",
        "duration": 60,
        "genres": [],
        "images": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/31/79980.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/31/79980.jpg",
        },
        "schedule": {
          "days": [
            "Monday"
          ],
          "time": "20:00"
        },
        "showType": "Reality",
        "status": "Ended"
      }
    ];

    expect(result).toEqual(expectedResult);
  });

  it("fetch tv shows return error", async done => {
    const expectedError = { message: "Error" };
    const httpClientMock = { get: () => Promise.reject(expectedError) };

    const phrase = "The oc";
    await TvShowService({ httpClient: httpClientMock })
      .fetchTvShows(phrase)
      .then(() => {
        done.fail("Expected error not thrown");
      })
      .catch(error => {
        expect(error).toEqual(expectedError);
        done();
      });
  });

  it("fetch tv shows set default images when prop image is null", async () => {
    let tvShowsNoImage = { ...matchingResultsTvSearch[0] };
    tvShowsNoImage.show.image = null;

    const httpClientMock = { get: () => Promise.resolve({ data: [tvShowsNoImage] }) };

    const phrase = "The oc";
    const result = await TvShowService({ httpClient: httpClientMock })
      .fetchTvShows(phrase);

    const expectedResult = [
      {
        "id": 776,
        "title": "The O.C.",
        "duration": 60,
        "genres": [
          "Drama",
          "Comedy",
          "Romance"
        ],
        "images": {
          "medium": DefaultImage,
          "original": DefaultImage,
        },
        "schedule": {
          "days": [
            "Thursday"
          ],
          "time": "21:00"
        },
        "showType": "Scripted",
        "status": "Ended"
      }
    ]
    expect(result).toEqual(expectedResult);
  });

  it("fetch tv shows set default images when image props are empty", async () => {
    let tvShowsNoImage = { ...matchingResultsTvSearch[0] };
    tvShowsNoImage.show.image = { original: "", medium: "" };

    const httpClientMock = { get: () => Promise.resolve({ data: [tvShowsNoImage] }) };

    const phrase = "The oc";
    const result = await TvShowService({ httpClient: httpClientMock })
      .fetchTvShows(phrase);

    expect(result[0].images.original).toEqual(DefaultImage);
    expect(result[0].images.medium).toEqual(DefaultImage);
  });
});
