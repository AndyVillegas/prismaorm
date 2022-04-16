function configPrototypes(){
    BigInt.prototype.toJSON = function () {
        return this.toString();
    };
}

module.exports = configPrototypes;