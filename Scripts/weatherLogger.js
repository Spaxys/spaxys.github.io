//First you need to load fileReader.js before this works
var datapath;
function readCurrentWeatherData(dataPath) {
    console.log(datapath);
    }

function myFunction(a, b) {
    return a * b * a;
}

$(document).ready(function() {
	$('#weatherTestButton').click(readCurrentWeatherData("test"));
});
