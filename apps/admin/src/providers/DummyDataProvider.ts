import fakeDataProvider from "ra-data-fakerest";

export const dummyDataProvider = fakeDataProvider({
  "terms-of-uses": [
    {
      id: 1,
      content: "123",
      term_version: 1,
    },
  ],
});
