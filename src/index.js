module.exports = function getZerosCount(number, base) {
    let n = 0;
    let i = 2;
    let k = 0;
    let array = new Array();

    const baseNum = base;
    while (i <= baseNum) {
        if (base % i == 0) {
            q = i;
            n++;
            base = base / i;
        } else {
            if (n != 0) {
                array[k] = CountZeros(number, q, n);
                k++;
            }
            i++;
            n = 0;
        }
    }
    return Math.min(...array);

    function CountZeros(number, q, n) {
        let sum = 0;
        for (let i = 1; Math.pow(q, i) < number; i++) {
            sum = sum + Math.floor(number / Math.pow(q, i));
        }
        return Math.floor(sum / n);
    }
}

