var babies = require("../sources/babies.json");
var constants = require("../constants/babies.js");


/**
 * Get All Babies by filter
 * @param filter
 * @returns {({}|*[])[keyof {}|*[]][]|*[]}
 */
exports.getBabiesByFilter = function(filter) {
    let babies = this.getAllBabies();

    if(babies.length === 0) {
        return [];
    }

    return _.chain(babies)
        .filter(function(baby) {
            return baby[constants.YEAR_OF_BIRTH] === (filter.year || baby[constants.YEAR_OF_BIRTH]) &&
                baby[constants.GENDER] === (filter.gender || baby[constants.GENDER]) &&
                baby[constants.ETHNICITY] === (filter.etnic || baby[constants.ETHNICITY]) &&
                baby[constants.RANK] === (filter.rank || baby[constants.RANK]);
        })
        .value();
}

/**
 * Get All Babies Birth of Years
 * @param filter
 * @returns {*[]}
 */
exports.getBabiesAllBirthYears = function (filter = {}) {
    return this.getAllBabiesByProperty(constants.YEAR_OF_BIRTH, filter);
}

/**
 * Get All Babies Ethnic
 * @param filter
 * @returns {*[]}
 */
exports.getBabiesAllEthnic = function (filter = {}) {
    return this.getAllBabiesByProperty(constants.ETHNICITY, filter);
}

/**
 * Get All Babies datasource
 * @returns {{}|*[]}
 */
exports.getAllBabies = function() {
    return babies || [];
}

/**
 * Get All Babies By Properties and Filter
 * @param property
 * @param filter default {}
 * @returns {*[]}
 */
exports.getAllBabiesByProperty = function(property, filter = {}) {
    let babies = this.getBabiesByFilter(filter);

    if(babies.length === 0) {
        return [];
    }

    return _.chain(babies)
        .map(function(baby) {return baby[property]})
        .sortBy(function (obj) { return isNaN(parseInt(obj)) ? parseInt(obj) : obj; })
        .value();
}