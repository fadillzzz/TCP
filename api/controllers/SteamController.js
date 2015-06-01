module.exports = {
  /**
   * `SteamController.info()`
   */
  info: function (req, res) {
    return res.json({
      name: req.session.user.steam.name,
      profileUrl: req.session.user.steam.profileUrl
    });
  }
};
