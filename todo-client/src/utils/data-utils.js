export function groupBy(key) {
    return function group(array) {
      return array.reduce((acc, obj) => {
        const property = obj[key];
        const { date, ...rest } = obj;
        acc[property] = acc[property] || [];
        acc[property].push(rest);
        return acc;
      }, {});
    };
  }
  
  export function getAverage(array, isRound = true) {
    let average = 0;
    if (isRound) {
      average = Math.round(array.reduce((a, b) => a + b, 0) / array.length);
      if (average === 0) {
        average = 0;
      }
    } else average = (array.reduce((a, b) => a + b, 0) / array.length).toFixed(2);
  
    return average;
  }
  
  export function getMostFrequentWeather(arr) {
    const hashmap = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(hashmap).reduce((a, b) =>
      hashmap[a] > hashmap[b] ? a : b
    );
  }
  
export const getWeekForecastWeather = (data) => {
    let foreacast_data = [];
    let descriptions_data = [];
  
    if (!data)
      return [];
    else
        data.slice().map((item, idx) => {
        descriptions_data.push({
          description: item.weather[0].description,
          date: item.dt_txt.substring(0, 10),
        });
        foreacast_data.push({
          date: item.dt_txt.substring(0, 10),
          temp: item.main.temp,
          humidity: item.main.humidity,
          wind: item.wind.speed,
          clouds: item.clouds.all,
        });
  
        return { idx, item };
      });
  
    const groupByDate = groupBy('date');
    let grouped_forecast_data = groupByDate(foreacast_data);
    let grouped_forecast_descriptions = groupByDate(descriptions_data);
  
    const description_keys = Object.keys(grouped_forecast_descriptions);
  
    let dayDescList = [];
  
    description_keys.forEach((key) => {
      let singleDayDescriptions = grouped_forecast_descriptions[key].map(
        (item) => item.description
      );
      let mostFrequentDescription = getMostFrequentWeather(singleDayDescriptions);
      dayDescList.push(mostFrequentDescription);
    });
  
    const forecast_keys = Object.keys(grouped_forecast_data);
    let dayAvgsList = [];
  
    forecast_keys.forEach((key, idx) => {
      let dayTempsList = [];
      let dayHumidityList = [];
      let dayWindList = [];
      let dayCloudsList = [];
  
      for (let i = 0; i < grouped_forecast_data[key].length; i++) {
        dayTempsList.push(grouped_forecast_data[key][i].temp);
        dayHumidityList.push(grouped_forecast_data[key][i].humidity);
        dayWindList.push(grouped_forecast_data[key][i].wind);
        dayCloudsList.push(grouped_forecast_data[key][i].clouds);
      }
  
      dayAvgsList.push({
        date: key,
        temp: getAverage(dayTempsList),
        humidity: getAverage(dayHumidityList),
        wind: getAverage(dayWindList, false),
        clouds: getAverage(dayCloudsList),
        description: dayDescList[idx],
      });
    });
  
    return dayAvgsList;
  };