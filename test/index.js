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

describe("Problem 4", function(){
  var problem4 = require("../problem4/complete.js");
  var answer = 906609;
  it("should work", function(){
    problem4().should.equal(answer);
  })
})

describe("Problem 6", function(){
  var problem6 = require("../problem6/completed.js");
  var answer = 25164150;
  it("should work", function(){
    problem6().should.equal(answer);
  })
})

describe("Problem 7", function(){
  var problem7 = require("../problem7/completed.js");
  var answer = 104743;
  it("should work", function(){
    problem7().should.equal(answer);
  })
})
