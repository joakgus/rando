const { authJwt } = require("../middleware");
const controller = require("../controller/UserController");
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/api/test/all", controller.allAccess);

    //app.get("/api/user/:userId/updatePass", controller.encryptedPass);
    app.get("/api/test/user", [authJwt.verifyToken],controller.userContent);
};
