const { getAllUserService } = require("../services/user.service");

const getAllUsers = async (req, res, next) => {
    try {
      
      //sending the user data as response
      console.log("user hi there");
      const [users,data] = await getAllUserService();
  
      res.status(200).json({
        status: "Success",
        message: "Data acquired",
        data: users,
        video:data.data
      });
    } catch (error) {
      next(error);
    }
};
  

//exports
module.exports = {
    getAllUsers
}