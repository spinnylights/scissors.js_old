describe("Scissors.reverse()", function() {
  var testStrings = ["big bag", "bag big"];

  it("should return a reversed string", function(){
    expect( Scissors.reverse(testStrings[0]) ).toEqual( testStrings[1] );
  });
});
