var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var number = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  var newArr = katzDeliLine.slice(0);
  katzDeliLine.shift();
  return `Currently serving ${newArr[0]}.`;
}

function currentLine(){

}
