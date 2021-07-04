// Code your solution in this file!
function distanceFromHqInBlocks(blockNum){
  if(blockNum>42){
    return blockNum-42
  }
  else{
    return 42-blockNum
  }
}

function distanceFromHqInFeet(street){
  blocks = distanceFromHqInBlocks(street)
  console.log(street, blocks)
  return blocks*264
}

function distanceTravelledInFeet(start, end){
  if (end>start){
    return (end - start)*264;
  }
  else{
    return (start - end)*264;
  }
};

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
    console.log(distance)
  if(distance<=400){
    return 0;
  }
  else if(distance>400 && distance<=2000){
    return (distance-400)*0.02;
  }
  else if (distance>2000 && distance<2500) {
    return 25;
  }
  else{
    return "cannot travel that far"
  }
};
