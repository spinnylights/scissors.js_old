// Fischer-Yates shuffle from bost.ocks.org/mike/shuffle

(function(){
  
  function shuffle(array) {

    var m = array.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  };

  Scissors.scramble = function(string){
    var splitString = string.split(" ");

    return shuffle(splitString).join(" ");
  };
})();
