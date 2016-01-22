describe('countUp', function(){
  it("will count up from 1 to the given number", function(){
    expect(countUp(5)).to.eql([1,2,3,4,5]);
  });
});
