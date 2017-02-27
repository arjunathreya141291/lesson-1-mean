console.log("Hi i am a node js index file");

var hello = function(name){
  console.log("Hi my name is " +  name);
}


var intro = function(){
  console.log("Hi everyone");
}

module.exports = {
  hello:hello,
  intro:intro
}
