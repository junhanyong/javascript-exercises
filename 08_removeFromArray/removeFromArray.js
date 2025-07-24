const removeFromArray = function(arr, ...args) {
    let result = arr.filter((element) => !args.includes(element))
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
