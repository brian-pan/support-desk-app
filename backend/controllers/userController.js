// @desc    Register a user
// @route   /api/users
// @access  public
registerUser = (req, res) => {
  res.send("Register user");
};

// @desc    Login a user
// @route   /api/users/login
// @access  public
loginUser = (req, res) => {
  res.send("Login Route");
};

module.exports = {
  registerUser,
  loginUser,
};
