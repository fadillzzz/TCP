/**
 * Instantiate a Steam account object
 *
 * @param {String} id The Steam ID64 of the account
 */
function SteamAccount(id)
{
  this.id = id;
}

/**
 * Returns the Steam ID64 of the account
 *
 * @return {String}
 */
SteamAccount.prototype.getId = function ()
{
  return this.id;
};

/**
 * Returns the profile URL of the account
 *
 * @return {String}
 */
SteamAccount.prototype.getProfileUrl = function ()
{
  return 'http://steamcommunity.com/profiles/'+this.id;
};

module.exports = SteamAccount;
