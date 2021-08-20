module.exports = function reverse (n) {
    let result = '';
    if(n < 0) {
        n = Math.abs(n);
        n = n.toString();
        for(let i = 0; i < n.length; i++) {
            result = `${n[i]}${result}`
        }
      return parseInt(result);
    }
    n = n.toString();
    
    if(n.length === 1) {
      return parseInt(n);
    }
    
    
    for(let i = 0; i < n.length; i++) {
        result = `${n[i]}${result}`
    }
    return parseInt(result);
    
}
