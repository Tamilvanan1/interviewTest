

const countCharacters = (str) => {

    const charCount = {};
    for (let char of str?.toUpperCase()){
        if(charCount[char]){
            charCount[char]++;
        }else{
            charCount[char] = 1
        }
    }
    for (let char in charCount){
        console.log(`${char}-${charCount[char]}`)
    }
}

const countOutput = countCharacters("Tamil")

console.log("countOutput",countOutput)