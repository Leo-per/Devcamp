//@ desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
};

//@ desc Get one bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get a single bootcamp with ${req.params.id}`,
  });
};

//@ desc Create new bootcamp
//@route POST /api/v1/bootcamps/:id
//@access Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "create new bootcamp" });
};

//@ desc Update bootcamp
//@route POST /api/v1/bootcamps/:id
//@access Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update a bootcamp with ${req.params.id}` });
};

//@ desc delete bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@access Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete a bootcamp with ${req.params.id}` });
};
