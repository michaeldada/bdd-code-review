var countUp = function(countTo){
  var result = [];
    for(var i = 1; i <= countTo; i++){
      var index = result.indexOf(i);
      if(i % 3 === 0) {
        result.splice(index, 0);
        result.push('ping');
      }else if(i % 5 === 0) {
        result.splice(index, 0);
        result.push('pong');
      }else{


      result.push(i);
        }
      }
    
    return result;
};
