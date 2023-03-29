var mBaby = require("../models/babies");

exports.getBabyName = function(gender) {
    //Get Year Randomly
    let years = mBaby.getBabiesAllBirthYears();
    let year = _.sample(years);

    //Get Etnic Randomly
    let etnics = mBaby.getBabiesAllEthnic({"year": year});
    let etnic = _.sample(etnics);

    //Construct filter
    let filter = {
        "gender": gender,
        "year": year,
        "etnic": etnic,
        "rank": "1"
    }

    //Get All Babies by Gender and By Year
    return mBaby.getBabiesByFilter(filter)[0] || [];
}