const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText({ title, days }) {
  //   const { title, days } = singleSeries;
  // Some other code that does stuff

  console.log(title, days);
}

logOutSeriesText(seriesDurations[0]);
