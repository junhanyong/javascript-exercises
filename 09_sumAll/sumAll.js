const sumAll = function(start, end) {
    if (start < 0 || end < 0 || !Number.isInteger(start) ||!Number.isInteger(end)){
        return "ERROR"
    }
    if (end < start){
        let temp = end
        end = start
        start = temp
    }
    let returnValue = 0
    for (let i = start; i <= end; i++){
        returnValue += i
    }
    return returnValue
}
// Do not edit below this line
module.exports = sumAll;
