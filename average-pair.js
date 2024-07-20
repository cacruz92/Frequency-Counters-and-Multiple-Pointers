// add whatever parameters you deem necessary
function averagePair(arr, target) {
    //set up two pointers on the left and right since it is a sorted array
    let left = 0;
    let right = arr.length -1;

    //use a while loop to loop over the array and see if there is a pair that matches the target average
    while(left < right){
       // add left and right, then divide by two 
       let pairAvg = (arr[left] + arr[right])/2

       //if pairAvg and target are equal, return true

       if(pairAvg === target) return true;

       //if the target average is greater than what you get for the pair average, move the right border one index to the left

       if(pairAvg < target){
        left++;
       } else {
        right --;
       }
    }
    return false;
}
