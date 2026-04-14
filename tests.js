// Use Chai's expect for assertions
const expect = chai.expect;

describe('valid triangle domains', function() {
  it('all side equals to 2 should be an equilateral', function() {
    expect(getTriangleType(2,2,2)).to.equal(EQUILATERAL);
  });

  it('all side equals to a decimal number should be an equilateral', function() {
    expect(getTriangleType(0.1,0.1,0.1)).to.equal(EQUILATERAL);
  });

  it('all side equals to a big number should be an equilateral', function() {
    expect(getTriangleType(99999,99999,99999)).to.equal(EQUILATERAL);
  });

  it('first and second sides equal but different to third should be an isosceles', function() {
    expect(getTriangleType(2,2,3)).to.equal(ISOSCELES);
  });

  it('first and third sides equal but different to second should be an isosceles', function() {
    expect(getTriangleType(0.1,0.15,0.1)).to.equal(ISOSCELES);
  });

  it('second and third sides equal but different to first should be an isosceles', function() {
    expect(getTriangleType(99999,99998,99998)).to.equal(ISOSCELES);
  });

  it('all three sides different with third the biggest should be an scalene', function() {
    expect(getTriangleType(2,3,4)).to.equal(SCALENE);
  });

  it('all three sides different with second the biggest should be an scalene', function() {
    expect(getTriangleType(2,10,9)).to.equal(SCALENE);
  });

  it('all three sides different with first the biggest should be an scalene', function() {
    expect(getTriangleType(10000.03,10000.01,10000.02)).to.equal(SCALENE);
  });
});

describe('not possible to create a triangle', function() {
    it('if the addition of first and second is equal to third it should be not a triangle', function() {
      expect(getTriangleType(1,3,4)).to.equal(NOT_A_TRIANGLE);
    });

    it('if the addition of first and third is equal to second it should be not a triangle', function() {
        expect(getTriangleType(10,20,10)).to.equal(NOT_A_TRIANGLE);
    });

    it('if the addition of second and third is equal to first it should be not a triangle', function() {
        expect(getTriangleType(0.2,0.1,0.1)).to.equal(NOT_A_TRIANGLE);
    });
  
    it('if the addition of first and third is smaller to second it should be not a triangle', function() {
          expect(getTriangleType(10,20.00001,10)).to.equal(NOT_A_TRIANGLE);
    });
});
 
describe('invalid arguments', function() {
    it('if all arguments are 0 it should be invalid arguments', function() {
      expect(getTriangleType(0,0,0)).to.equal(INVALID_ARGUMENTS);
    });

    it('if first side is negative it should be invalid arguments', function() {
        expect(getTriangleType(-1,1,1)).to.equal(INVALID_ARGUMENTS);
    });

    it('if second side is negative it should be invalid arguments', function() {
        expect(getTriangleType(2,-5,3)).to.equal(INVALID_ARGUMENTS);
    });
  
    it('if third side is negative it should be invalid arguments', function() {
        expect(getTriangleType(2,5, -2.99999)).to.equal(INVALID_ARGUMENTS);
    });

    it('if first side is a letter it should be invalid arguments', function() {
        expect(getTriangleType('N',1,1)).to.equal(INVALID_ARGUMENTS);
    });

    it('if second side is a special char it should be invalid arguments', function() {
        expect(getTriangleType(2,'!',3)).to.equal(INVALID_ARGUMENTS);
    });
  
    it('if third side is a letter it should be invalid arguments', function() {
        expect(getTriangleType(2,5, 'AA')).to.equal(INVALID_ARGUMENTS);
    });
});    