// Code your solution in this file!
function distanceFromHqInBlocks(a) {
    return Math.abs(42 - a)
}

function distanceFromHqInFeet(a) {
    return distanceFromHqInBlocks(a) * 264
}

function distanceTravelledInFeet(a, b) {
    return Math.abs(a - b) * 264
}

function calculatesFarePrice(start, destination) {
    var distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0
    } else if (distance > 2500) {
        return "cannot travel that far"
    } else if (distance > 2000) {
        return 25
    } else {
        return (distance - 400) * .02;
    }

}