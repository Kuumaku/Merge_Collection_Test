
function merge_collection(collection1:number[], collection2:number[], collection3:number[]):number[]{

    var C1_l:number = collection1.length;//length of collection1
    var C2_l:number = collection2.length;//length of collection2
    var C3_l:number = collection3.length;//length of collection3

    const results:number[] = [];//array to store results

    var i:number = 0; //iterators to traverse collection1
    var j:number = 0; //iterators to traverse collection2
    var k:number = C3_l - 1; //iterators to traverse collection3 in reverse order to match with reversed sorted array

    while(i < C1_l //while collection 1 still not done traversing
        || j < C2_l // while collection 2 still not done traversing
        || k >= 0 // while collection 3 still not done traversing
    )
    {
        let C1_V:number = Infinity;//Values to store number of collection1 at index i
        let C2_V:number = Infinity;//Values to store number of collection2 at index j
        let C3_V:number = Infinity;//Values to store number of collection3 at index k

        if (i < C1_l) //If iterations on collection3 still not finished
        {
            C1_V = collection1[i];//Values of collection1 at index i
        } 
        if(j < C2_l)//If iterations on collection3 still not finished
        {
            C2_V = collection2[j];
        }
        if(k >= 0)//If iterations on collection3 still not finished
        {
            C3_V = collection3[k];
        }

        let inserted_values = Math.min(C1_V, C2_V, C3_V) //Find least values among current values to insert first(in ascending order)
        
        results.push(inserted_values) //push said values into array 
        
        if (inserted_values == C1_V)//If the min values belong to Collection 1 move iterators of Collection1
        {
            i++; //move iterators i to the right side to get greater values
        } else if (inserted_values == C2_V)//If the min values belong to Collection 2 move iterators of Collection2
        {
            j++; //move iterators j to the right side to get greater values
        }else //If the min values belong to Collection 3 move iterators of Collection3 
        {
            k--;//move iterators k to the right side to get greater values
        }
    }

    return results
}

const c1:number[] = [1,2,3];
const c2:number[] = [3,5,6];
const c3:number[] = [6,3,2,2];

const test_results:number[] = merge_collection(c1, c2, c3);

console.log(test_results)

export{}

