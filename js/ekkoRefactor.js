// var i = 1;
// var z = [];
var nameCharArr = 'ekko media group'.split('');//do not alter this input variable's value. You can change its name though.
console.log("Results of split: ", nameCharArr);
// var result = a(x, z);
var result = findVowels(nameCharArr);
console.log("Result of method findVowels: ", result);

function findVowels(nameStringArr) {
    var v = 'aeiou';
    var letter;
    var foundResults = [];
    var notFoundResults = [];

    for (var i = 0; i < nameStringArr.length; i++) {
        letter = nameStringArr[i];
        //Found a match
        if (v.indexOf(letter) > -1) {
            foundResults.push({'vowel' : letter});
        }
        else {
            notFoundResults.push({'letter' : letter});
        }
    };

    return [notFoundResults, foundResults];
    //Set i to a new var to not affect global i
    // for(var i = 0; i < one.length; i++){
    //     letter = one[i];
    //     if(!z.letter){
    //         z.letter = 1;
    //     }else{
    //         z.letter++;
    //     }
    // }
    // for(var prop in z){
    //     two.push({prop : z.prop});
    // }

    // var result1 = c(two);
    // var result2 = b();

    // return [result1, result2];
}

// function c(a) {
//     var myArray = [];
//     while(a.length){
//         var o = a.shift();
//         for(var k in o){
//             if(v.indexOf(k) == -1){
//                 myArray.push(o);
//             }
//         }
//     }
//     return myArray;
// };

// function b() {
//     var otherArray = [];
//     var y = Array.prototype.slice.call(arguments);

//     var inner = function(){
//         if(this.length){
//             o = this.pop()
//             for(var k in o){
//                 if(v.indexOf(k) > -1){
//                     otherArray.push(o);
//                 }
//             }
//             inner(this);
//         }else{
//             return otherArray;
//         }
//     };
//     return inner.apply(y);
// };