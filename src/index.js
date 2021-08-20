module.exports = function reverse (n) {
    let result = '';
    if(n.length === 1)
    return n;
    if(n < 0) {
        n = Math.abs(n);
        for(let i = 0; i < n.length; i++) {
            result = `${n[i]}${result}`
        }
        return result;
    }
    for(let i = 0; i < n.length; i++) {
        result = `${n[i]}${result}`
    }
    return result;
    
}
