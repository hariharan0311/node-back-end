const router = require("express").Router();

let data = [
  {
    id: 1,
    name: "Jerry",
    age: 20,
    city: "Chennai",
  },
  {
    id: 2,
    name: "Tom",
    age: 24,
    city: "Chennai",
  },
  {
    id: 3,
    name: "Bheam",
    age: 25,
    city: "Chennai",
  },
];

router.get("/get/user", async (req, res) => {
  try {
    res.status(200).json({
      status: 200,
      success: true,
      message: "User Data Fetched Successfully",
      data: data,
    });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send({
      status: 400,
      success: false,
      message: "Failed to fetch the data",
      error: error.message,
    });
  }
});

module.exports = router;
