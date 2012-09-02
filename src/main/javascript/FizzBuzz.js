var FizzBuzz = function() {

    function isMultipleOf3(num){
        return num % 3 == 0;
    }

    function isMultipleOf5(num){
        return num % 5 == 0;
    }

    return {

        getAllMultiplesOf3From : function(collection){

            return _.filter(collection, function(num){
               if(isMultipleOf3(num)){
                   return num;
               }
            });

        },

        getAllMultiplesOf5From : function(collection){

            return _.filter(collection, function(num){
                if(isMultipleOf5(num)){
                    return num;
                }
            });

        },

        getAllMultiplesOf3And5From : function(collection){

            return _.filter(collection, function(num){
                if(isMultipleOf3(num) || isMultipleOf5(num)){
                    return num;
                }
            });

        },

        getFizzBuzzElementsFrom : function(collection){

            return _.map(collection, function(num){
                var multipleOf3 = isMultipleOf3(num);
                var multipleOf5 = isMultipleOf5(num);

                if(multipleOf3 && multipleOf5){
                    return "FizzBuzz";
                } else if(multipleOf3){
                    return "Fizz";
                } else if(multipleOf5){
                    return "Buzz";
                } else {
                    return num;
                }
            });
        }

    }

}