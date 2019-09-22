const seriesDurations = [
    {
        title: 'Game of thrones',
        days: 13,
        hours: 21,
        minutes: 20,
    },
    {
        title: 'Ainak wala jin',
        days: 20,
        hours: 20,
        minutes: 35,
    },
    {
        title: 'The Alpha Bravo Charlie',
        days: 10,
        hours: 23,
        minutes: 15,
    }
  ];

function durationOfLife(series) {
    let total = 0;
    const averageLifeYears = 80;
    const averageMinutes = averageLifeYears * 365 * 24 * 60;
    for(let i = 0; i < series.length; i++) {
      const daysInMinutes     = series[i].days * 24 * 60;
      const hoursInMinutes    = series[i].hours * 60;
      const totalDuration     = daysInMinutes + hoursInMinutes + series[i].minutes;
      const percentageOfLife  = (totalDuration/averageMinutes) * 100;
      total += percentageOfLife;
      console.log(`${series[i].title} took ${percentageOfLife.toFixed(2)}% of my life.`)
    }
    console.log(`In total, that is ${total.toFixed(2)}% of my life`);
};

durationOfLife(seriesDurations);
