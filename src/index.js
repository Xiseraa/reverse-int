module.exports = function reverse (n) {
    n = n.toString();
    let result = '';
    if(n.length === 1) {
      return parseInt(n);
    }
    
    if(n < 0) {
        n = Math.abs(n);
        for(let i = 0; i < n.length; i++) {
            result = `${n[i]}${result}`
        }
        return parseInt(result);
    }
    for(let i = 0; i < n.length; i++) {
        result = `${n[i]}${result}`
    }
    return parseInt(result);
    
}
