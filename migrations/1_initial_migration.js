const Migrations = artifacts.require("Migrations");
const Credential = artifacts.require("CredentialBox");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Credential);
};
