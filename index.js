// Code your solution in this file!
function distanceFromHqInBlocks(val){
  return Math.abs(val-42);
}

function distanceFromHqInFeet(val){
  return 264 * distanceFromHqInBlocks(val);
}

function distanceTravelledInFeet(a, b){
  return Math.abs(a - b) * 264
}

function calculatesFarePrice(a, b){
  let feet = distanceTravelledInFeet(a, b)
  if(feet<=400){
    return 0
  }else if(400 < feet && feet<=2000){
    return (feet - 400) * 0.02
  }else if(2000 < feet && feet <= 2500){
    return 25
  }else{
    return 'cannot travel that far';
  }
}
