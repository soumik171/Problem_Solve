/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let hash = {};

    for(let ele of sentence){
        hash[ele]=(hash[ele]|| 0)+1;
    } 

    return Object.keys(hash).length==26
};