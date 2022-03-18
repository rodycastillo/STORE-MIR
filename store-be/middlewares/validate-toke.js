const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const auth = req.headers.token;
  if (auth) {
    const token = auth.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      err &&
        res
          .status(403)
          .json({ success: "false", message: "Token is not valid!" });
      req.user = user;
      next();
    });
  } else {
    return res
      .status(401)
      .json({ success: "false", message: "You're not authenticated!" });
  }
};
