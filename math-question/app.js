var App;
var app = function(){
	/*Get Element*/
	var eLoader = document.getElementById('loader');
	var eContent = document.getElementById('container');
	var eQuestion = document.getElementById('question');
	var eSolution = document.getElementById('solution');
	var eTip = document.getElementById('tip');
	var eNumber = document.getElementById('number');


	/*Loader*/
	this.setDisplayLoader = function(pDisplay){

		eLoader.style.display = pDisplay;
	}
	this.setDisplayContent = function(pDisplay){

		eContent.style.display = pDisplay;
	}
	this.setText= function(i){
		eQuestion.innerHTML = Data[i].question;
		eSolution.innerHTML = Data[i].solution;
		eTip.innerHTML = Data[i].tip;
		eNumber.innerHTML = i;

	}


	/*Content*/

};
var index = 0
var maxId = Data.length-1;
var plusSlides;
var onloadD = function (){
	App = new app();
	App.setDisplayLoader('none');
	App.setDisplayContent('block');
	plusSlides = function(p){
		index = index + p;

		if(index<0){
			index = maxId;
		}
		if(index>maxId){
			index = 0;
		}
		console.log(index);
		App.setText(index);
		MathJax.Hub.Typeset()

	}
	App.setText(index);
}


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        callback(null, xhr.response);
      } else {
        callback(status);
      }
    };
    xhr.send();
};

getJSON('data/version.json',
function(err, data) {
  if (err != null) {
    alert('Something went wrong: ' + err);
  } else {
    console.log('Your query count: ' + data);
  }
});
