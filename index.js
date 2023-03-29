function palindrome(str) {
    str = str.toLowerCase();
    str = str.split("");
    str = str.filter(elem => elem.match(/[a-z0-9]/));
    
    return str.join("") === str.reverse().join("");
}
