const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");

//@ desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();

    res
      .status(200)
      .json({ success: true, count: bootcamp.length, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false, data: err });
  }

  // res.status(200).json({ success: true, msg: "show all bootcamps" });
};

//@ desc Get one bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public

exports.getBootcamp = async (req, res, next) => {
  // res.status(200).json({ success: true });
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return (
        // res.status(400).json({ success: false, data: "id not on the DB" });
        next(
          new ErrorResponse(
            `Bootcamp not found with id of ${req.params.id}`,
            400
          )
        )
      );
    }
    res.status(200).json({ success: true, data: bootcamp });
    // console.log(bootcamp);
  } catch (err) {
    // res.status(400).json({ success: false, data: err });
    // next(
    //   new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    // );
    next(err);
  }
};

//@ desc Create new bootcamp
//@route POST /api/v1/bootcamps/:id
//@access Private

exports.createBootcamp = async (req, res, next) => {
  // console.log(req.body);
  // res.status(200).json({ success: true, msg: "create new bootcamp" });

  // Adding to the database the info by using the model
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({ success: false, data: err });
    // next(err);
  }
};

//@ desc Update bootcamp
//@route POST /api/v1/bootcamps/:id
//@access Private

exports.updateBootcamp = async (req, res, next) => {
  // res
  //   .status(200)
  //   .json({ success: true, msg: `Update a bootcamp with ${req.params.id}` });
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: false,
      runValidators: true,
    });

    if (!bootcamp) {
      // return res.status(400).json({ success: false, data: "id not on the DB" });
      return (
        // res.status(400).json({ success: false, data: "id not on the DB" });
        next(
          new ErrorResponse(
            `Bootcamp not found with id of ${req.params.id}`,
            400
          )
        )
      );
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    // res.status(400).json({ success: false, data: err });
    next(err);
  }
};

//@ desc delete bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@access Private

exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndRemove(req.params.id);
    // console.log(bootcamp);
    if (!bootcamp) {
      // return res.status(400).json({ success: false, data: "id not on the DB" });

      return (
        // res.status(400).json({ success: false, data: "id not on the DB" });
        next(
          new ErrorResponse(
            `Bootcamp not found with id of ${req.params.id}`,
            400
          )
        )
      );
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    // res.status(400).json({ success: false, data: err });
    next(err);
  }
};
