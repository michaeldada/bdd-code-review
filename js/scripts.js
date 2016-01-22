var countUp = function(countTo){
  var result = [];
    for(var i = 1; i <= countTo; i++){
      var ping = result.indexOf(i);
      if(i % 3 === 0) {


        result.splice(ping, 0);
        result.push('ping');

      }else{


      result.push(i);
      }
    }
    return result;
};
