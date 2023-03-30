var mBaby = require("../models/babies");

exports.getBabyName = function(filter) {
    //Get Year Randomly
    let years = mBaby.getBabiesAllBirthYears();
    let year = _.sample(years);

    //Get Etnic Randomly
    if(!filter.ethnic) {
        let ethnics = mBaby.getBabiesAllEthnic({"year": year});
        let ethnic = _.sample(ethnics);
    }

    //Construct filter
    filter = {
        "gender": filter.gender,
        "year": year,
        "etnic": filter.ethnic || ethnic,
        "rank": "1"
    }

    //Get All Babies by Gender and By Year
    return mBaby.getBabiesByFilter(filter)[0] || [];
}

exports.getAllEthnicsByGender = function(gender) {
    return _.uniq(mBaby.getBabiesAllEthnic({"gender": gender}));
}