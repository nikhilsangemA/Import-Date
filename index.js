const addDays = require("date-fns/addDays");

const addDateFun = (daysOf) => {
  const resultDate = addDays(new Date(2020, 7, 22), daysOf);
  return `${resultDate.getDate()}-${
    resultDate.getMonth() + 1
  }-${resultDate.getFullYear()}`;
};

module.exports = addDateFun;
