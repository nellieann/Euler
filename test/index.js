var should = require("should");


describe("Problem 1", function(){
  var problem1recursive = require("../problem1/complete-recursive.js");
  var problem1loop = require("../problem1/complete.js");
  var answer = 233168;
  it("should work", function(){
    problem1recursive(1000).should.equal(answer);
    problem1loop(1000).should.equal(answer);
  })
})
