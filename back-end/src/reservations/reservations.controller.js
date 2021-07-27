const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./reservations.service");

// Function to validate time and date of the reservation to create
function validateBody(req, res, next) {
  const { data } = req.body;
  const today = new Date();
  const resDate = new Date(data.reservation_date);
  const resTime = data.reservation_time;
  if (resDate < today) {
    return next({
      status: 400,
      message: "Unable to select a date in the past.",
    });
  } else if (resDate.getDay() === 2) {
    return next({
      status: 400,
      message: "The restaurant is closed on Tuedays.",
    });
  } else if (resTime < "09:30" || resTime > "21:30") {
    return next({
      status: 400,
      message:
        "Please select a time during our opening hours from 10:30 to 21:30.",
    });
  } else {
    res.locals.reservation = { data };
    return next();
  }
}

// List handler for reservation resources
async function list(req, res, next) {
  const date = req.query.currentDate;
  const data = await service.list(date);

  // Prevent timezone conversion and format date into yyyy-mm-dd string
  data.map((entry) => {
    const returnDate = entry.reservation_date;
    const dateArr = returnDate.toLocaleDateString().split("/");
    entry.reservation_date = `${dateArr[2]}-${dateArr[0]}-${dateArr[1]}`;
  });
  res.json({ data });
}

async function create(req, res, next) {
  const { data } = res.locals.reservation;
  const newData = await service.create(data);
  res.status(201).json({ newData });
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [validateBody, asyncErrorBoundary(create)],
};
