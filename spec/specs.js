describe('fibonacci', function() {
  it('returns 0 when user inputs 1', function() {
    fibonacci(1).should.equal(0);
  });
  
  it('Returns 1 when user inputs 2', function() {
    fibonacci(2).should.equal(1);
  });

  it('returns the value of the Fibonacci sequence at the number that user inputs', function() {
    fibonacci(10).should.equal(34);
  });

  it('returns false if user inputs a negative number', function() {
    fibonacci(-1).should.equal(false);
  });

  it('returns false if user inputs a number with decimal', function() {
    fibonacci(1.5).should.equal(false);
  });
});


