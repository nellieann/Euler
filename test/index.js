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

describe("Problem 2", function(){
  var problem2 = require("../problem2/complete.js");
  var answer = 4613732;
  it("should work", function(){
    problem2().should.equal(answer);
  })
})

describe("Problem 3", function(){
  var problem3 = require("../problem3/incomplete.js");
  var answer = 6857;
  it("should work", function(){
    problem3(600851475143).should.equal(answer);
  })
})
