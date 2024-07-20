// frequency counter using a map
function createFrequencyCounter(array) {
    let frequencies = new Map();
  
    for (let val of array) {
      let valCount = frequencies.get(val) || 0;
      frequencies.set(val, valCount + 1);
    }
  
    return frequencies;
  }

// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    // get frequency counts for the msg and letter
    let msgFreq = createFrequencyCounter(msg);
    let lettersFreq = createFrequencyCounter(letters);

    //compare the frequencies of the letters in msg and letters 
    // if the frequencies of the letters is greater than or equal to the frequency of the letters in msg 
    // and every letter in msg appears in letters, then return true
    for(let key of msgFreq.keys()){
        // if(lettersFreq.has(key) === false){
        //     return false
        // }

        if(!lettersFreq.has(key)) return false;

        if(lettersFreq.get(key) < msgFreq.get(key)) return false;

        return true;
    }

}
