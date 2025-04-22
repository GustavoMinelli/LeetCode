/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let a = 0, b = s.length - 1;
    let sArr = s.split("");
    
    while(a < b) {

        while (a < b && !alphaNum(sArr[a])) {
            a++;
        }

        while (b > a && !alphaNum(sArr[b])) {
            b--;
        }

        if (sArr[a].toLowerCase() !== sArr[b].toLowerCase()) {
            return false;
        }

        a++;
        b--;
        
    }

    return true;

   
};

 function alphaNum(c) {
        return (c >= 'A' && c <= 'Z' || 
                c >= 'a' && c <= 'z' || 
                c >= '0' && c <= '9');
    }