const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./reservations.service");

/**
 * List handler for reservation resources
 */
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

//write middleware to validate body
async function create(req, res, next) {
  const { data } = req.body;
  const newData = await service.create(data);
  res.status(201).json({ newData });
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: asyncErrorBoundary(create),
};
