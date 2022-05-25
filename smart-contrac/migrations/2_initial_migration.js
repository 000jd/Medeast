const MedeastMedicenses = artifacts.require('MedeastMedicenses');

module.exports = function (deployer) {
    deployer.deploy(MedeastMedicenses)
}