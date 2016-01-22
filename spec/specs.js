describe('countUp', function(){
  it("will count up from 1 to the given number", function(){
    expect(countUp(5)).to.eql([1,2,'ping',4,5]);
  });
  it("will replace all numbers divisible by 3 with 'ping'", function(){
    expect(countUp(5)).to.eql([1,2,'ping',4,5]);
  });
});
