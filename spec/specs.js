describe('countUp', function(){
  it("will count up from 1 to the given number", function(){
    expect(countUp(2)).to.eql([1,2]);
  });
  it("will replace all numbers divisible by 3 with 'ping'", function(){
    expect(countUp(4)).to.eql([1,2,'ping',4]);
  });
  it("will replace all numbers divisible by 5 with 'pong'", function(){
    expect(countUp(10)).to.eql([1,2,'ping',4,'pong','ping',7,8,'ping','pong'])
  });
  it("will replace all numbers divisible by 15 with 'pingpong'", function(){
    expect(countUp(15)).to.eql([1,2,'ping',4,'pong','ping',7,8,'ping','pong',11,'ping',13,14,'pingpong'])
  });
});
