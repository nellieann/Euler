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
  var problem3 = require("../problem3/complete.js");
  var answer = 6857;
  it("should work", function(){
    problem3().should.equal(answer);
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

describe("Problem 8", function(){
  var problem8 = require("../problem8/completed.js");
  var answer = 40824;
  it("should work", function(){
    problem8().should.equal(answer);
  })
})

describe("Problem 9", function(){
  var problem9 = require("../problem9/completed.js");
  var answer = 31875000;
  it("should work", function(){
    problem9().should.equal(answer);
  })
})

describe("Problem 10", function(){
  var problem10 = require("../problem10/completed.js");
  var answer = 143042032116;
  it("should work", function(){
    problem10().should.equal(answer);
  })
})
