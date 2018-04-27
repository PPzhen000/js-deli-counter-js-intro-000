var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var number = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine){
  return `Currently serving ${katzDeliLine[0]}`; 
}

function currentLine(){

}
