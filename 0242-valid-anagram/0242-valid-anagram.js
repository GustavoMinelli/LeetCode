/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    let arrS = s.split("");
    let arrT = t.split("");
    
    if (arrT.length == arrS.length) {

        while(arrS.length > 0) {
        
            let sIndex = arrS.length - 1;

            if (arrT.includes(arrS[sIndex])) {

                let index = arrT.indexOf(arrS[sIndex]);
                arrT.splice(index, 1);
                arrS.splice(sIndex, 1);

            } else {
                return false;
            }

        } 

        return true;

    }

    return false;

};