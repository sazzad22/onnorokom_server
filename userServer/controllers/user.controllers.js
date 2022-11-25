const {
  getAllUserService,
  addOneUserService,
  updateOneUserService,
  getOneUserService
} = require("../services/user.service");

const getAllUsers = async (req, res, next) => {
  try {
    //sending the user data as response
    console.log("user hi there");
    const [users] = await getAllUserService();

    res.status(200).json({
      status: "Success",
      message: "Data acquired",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

//adds a user to the userdatabase
const addOneUser = async (req, res) => {
  try {
    const [result] = await addOneUserService(req.body);

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to add data",
      error: error.message,
    });
  }
};


//updates one video's specific value
const updateOneUser = async (req, res, next) => {
  try {
    const { email, link } = req.body;
    
    const result = await updateOneUserService(email, link);

    res.status(200).json({
      success: true,
      message: `User () Updated`,
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Not updated",
      error: error.message,
    });
  }
};

//gets one user filtered by id
const getOneUser = async (req, res, next) => {
  try {
    
    const email = req.params.id;
    //sending one user data as response
    console.log(req.params);
    const user = await getOneUserService(email);

    res.status(200).json({
      status: "Success",
      message: "Data acquired",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

//exports
module.exports = {
  getAllUsers,
  addOneUser,
  updateOneUser,
  getOneUser
};
