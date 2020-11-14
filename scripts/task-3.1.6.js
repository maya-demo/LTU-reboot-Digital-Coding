var preTip = 25.99
var tipPercentage = 3;
var percentageOfPreTip = (preTip + tipPercentage)/100;

var totalPricePlusTip = preTip + percentageOfPreTip;

document.write("$" + totalPricePlusTip.toFixed(2));


