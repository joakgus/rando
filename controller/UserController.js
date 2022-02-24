exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
exports.userContent = (req, res) => {
    console.log(req);
    res.status(200).send("User Content.");
};
