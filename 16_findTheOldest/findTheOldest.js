const findTheOldest = function(arr) {
    const d = new Date()
    const currentYear = d.getFullYear();

    const ageArray = arr.map((element) => {
        if (element.yearOfDeath == undefined){
            return currentYear - element.yearOfBirth
        }
        else {
            return element.yearOfDeath - element.yearOfBirth
        }
    })
    const max = ageArray.reduce((a, b) => a > b ? a : b)
    return arr[ageArray.indexOf(max)]
};

// Do not edit below this line
module.exports = findTheOldest;
