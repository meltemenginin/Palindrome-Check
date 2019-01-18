function palindromeCheck(word){
    for(i=0;i<=word.length/2;i++){
      if(word[i]!==word[word.length-i-1]){
        return false;
      }
    }
    return true;
  }
  
  
  function palindromeCheck2(word){
    console.log("içeride");
    return word.split("").reverse().join("") === word;
  }
  console.log(palindromeCheck2("www"));