const isPalindrome = (word) => {
if (word.toLowerCase() == word.toLowerCase().split('').reverse().join('')) {
    return true;

}
 else if(word.toLowerCase() !== word.toLowerCase().split('').reverse().join('')) {
    return false;
 }
};
isPalindrome('Radar');

const sumDigits = (num) => {
 var output =[];
 var sNumber = num.toString().split('');
 console.log(sNumber);
}

sumDigits(42);