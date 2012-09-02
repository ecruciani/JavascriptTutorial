describe("FizzBuzz Suite Test", function() {

    it("should get all multiples of 3 from a given collection", function() {

        var fizzBuzz = new FizzBuzz();
        var givenCollection = [1, 3, 5, 15, 8, 6];

        var multiplesOf3 = fizzBuzz.getAllMultiplesOf3From(givenCollection);

        expect(multiplesOf3.length).toEqual(3);
        expect(multiplesOf3).toContain(3);
        expect(multiplesOf3).toContain(6);
        expect(multiplesOf3).toContain(15);
    });

    it("should get all multiples of 5 from a given collection", function() {

        var fizzBuzz = new FizzBuzz();
        var givenCollection = [1, 3, 5, 15, 8, 6];

        var multiplesOf5 = fizzBuzz.getAllMultiplesOf5From(givenCollection);

        expect(multiplesOf5.length).toEqual(2);
        expect(multiplesOf5).toContain(5);
        expect(multiplesOf5).toContain(15);
    });

    it("should get all multiple of 3 and 5 from a given collection", function() {

        var fizzBuzz = new FizzBuzz();
        var givenCollection = [1, 3, 5, 15, 8, 6];

        var multiplesOf3And5 = fizzBuzz.getAllMultiplesOf3And5From(givenCollection);

        expect(multiplesOf3And5.length).toEqual(4);
        expect(multiplesOf3And5).toContain(3);
        expect(multiplesOf3And5).toContain(5);
        expect(multiplesOf3And5).toContain(6);
        expect(multiplesOf3And5).toContain(15);
    });

    it("should print 'Fizz' for multiple of 3, 'Buzz' for multiple of 5, and 'FizzBuzz' for both multiple of 3 and 5", function () {

        var fizzBuzz = new FizzBuzz();
        var givenCollection = new Array();

        for(var i = 1; i <= 100; i++){
            givenCollection.push(i);
        }

        var fizzBuzzElements = fizzBuzz.getFizzBuzzElementsFrom(givenCollection);

        expect(fizzBuzzElements.length).toEqual(100);
        expect(fizzBuzzElements[0]).toEqual(1);
        expect(fizzBuzzElements[1]).toEqual(2);
        expect(fizzBuzzElements[2]).toEqual("Fizz");
        expect(fizzBuzzElements[3]).toEqual(4);
        expect(fizzBuzzElements[4]).toEqual("Buzz");
        expect(fizzBuzzElements[5]).toEqual("Fizz");
        expect(fizzBuzzElements[14]).toEqual("FizzBuzz");
    });
});