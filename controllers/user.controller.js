const address = __dirname.slice(0, __dirname.length - 12)


exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };
  exports.homepage = (req, res) => {
    res.status(200).sendFile(address + '/public/views/index.html');
  };


  