var countUp = function(countTo){
  var result = [];
    for(var i = 1; i <= countTo; i++){
      var index = result.indexOf(i);
      if(i % 15 === 0) {
        result.splice(index, 0);
        result.push('pingpong');
      }else if(i % 5 === 0) {
        result.splice(index, 0);
        result.push('pong');
      }else if(i % 3 === 0) {
      result.splice(index, 0);
      result.push('ping');
      }else{


      result.push(i);
        }
      }

    return result;
};
