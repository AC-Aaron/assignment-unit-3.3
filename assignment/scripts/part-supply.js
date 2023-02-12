console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');

let partsNeeded = 40
console.log('1. Number of partsNeeded:', partsNeeded)

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');

let supplyChanges = [3,5,-6,0,7,11];
console.log('2. Array of supplyChanges:');

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');

console.log('3. Second supplyChange is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');

let removedSupply1 = supplyChanges.pop();
console.log(removedSupply1);


// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');

supplyChanges.push('25');
console.log('5. Adding 25 to supplyChanges.', )


// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');

for (x = 0; x < supplyChanges.length; x++){
    console.log(supplyChanges[x])//showing each value in the supplyChanges array. 
    if(supplyChanges[x]==0) {
        console.log("no change");//if result is 0
    }
    else if (supplyChanges[x] > 0){
        console.log(`Added ${supplyChanges[x]} parts`);// if result is a positive #
    }
    else {
        console.log(`Removed ${supplyChanges[x]} parts`);//if result is a negative #
    }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 

for(parts of supplyChanges){
    console.log(parts);//showing each value in the supplyChanges array. 
    if(parts==0) {
        console.log("no change");//if result is 0
    }
    else if (parts > 0){
        console.log(`Added ${parts} parts`);// if result is a positive #
    }
    else {
        console.log(`Removed ${parts} parts`);//if result is a negative #
    }
} 

console.log('7. Showing supplyChanges with "for of" loop');

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.

let sumOf = 0

for (parts of supplyChanges){
    sumOf = sumOf + parts;
    
}
console.log('8. Total supplies available is:', sumOf);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');

let parts2 = 572 //parts amounts
let box = 0 //#of boxes

while(parts2>=7){   //so longe as parts are greater than 7
    parts2 -= 7;    //subtrack 7 for each box filled
    box++;          //keep track of # of boxes filled with 7 parts each
}
console.log('total boxes filled=', box);    //logging # of boxes filled
console.log('parts left over=', parts2);    //logging # of parts leftover. 