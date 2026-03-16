"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge_collection(collection1, collection2, collection3) {
    var C1_l = collection1.length; //length of collection1
    var C2_l = collection2.length; //length of collection2
    var C3_l = collection3.length; //length of collection3
    var results = []; //array to store results
    var i = 0; //iterators to traverse collection1
    var j = 0; //iterators to traverse collection2
    var k = C3_l - 1; //iterators to traverse collection3 in reverse order to match with reversed sorted array
    while (i < C1_l //while collection 1 still not done traversing
        || j < C2_l // while collection 2 still not done traversing
        || k >= 0 // while collection 3 still not done traversing
    ) {
        var C1_V = Infinity; //Values to store number of collection1 at index i
        var C2_V = Infinity; //Values to store number of collection2 at index j
        var C3_V = Infinity; //Values to store number of collection3 at index k
        if (i < C1_l) //If iterations on collection3 still not finished
         {
            C1_V = collection1[i]; //Values of collection1 at index i
        }
        if (j < C2_l) //If iterations on collection3 still not finished
         {
            C2_V = collection2[j];
        }
        if (k >= 0) //If iterations on collection3 still not finished
         {
            C3_V = collection3[k];
        }
        var inserted_values = Math.min(C1_V, C2_V, C3_V); //Find least values among current values to insert first(in ascending order)
        results.push(inserted_values); //push said values into array 
        if (inserted_values == C1_V) //If the min values belong to Collection 1 move iterators of Collection1
         {
            i++; //move iterators i to the right side to get greater values
        }
        else if (inserted_values == C2_V) //If the min values belong to Collection 2 move iterators of Collection2
         {
            j++; //move iterators j to the right side to get greater values
        }
        else //If the min values belong to Collection 3 move iterators of Collection3 
         {
            k--; //move iterators k to the right side to get greater values
        }
    }
    return results;
}
var c1 = [1, 2, 3];
var c2 = [3, 5, 6];
var c3 = [6, 3, 2, 2];
var test_results = merge_collection(c1, c2, c3);
console.log(test_results);
