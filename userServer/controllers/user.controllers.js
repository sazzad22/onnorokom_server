const { getAllUserService } = require("../services/user.service");

const getAllUsers = async (req, res, next) => {
    try {
      
      //sending the user data as response
      console.log("user hi there");
      const users = await getAllUserService();
  
      res.status(200).json({
        status: "Success",
        message: "Data acquired",
        data: users,
      });
    } catch (error) {
      next(error);
    }
};
  

//exports
module.exports = {
    getAllUsers
}