describe("Scissors.scramble()", function() {
  var testStrings = ["big bag", "bag big"];

  it("should return a scrambled string", function(){
    expect(testStrings.indexOf( Scissors.scramble(testStrings[0]) )).not.toBe(-1);
  });
});
