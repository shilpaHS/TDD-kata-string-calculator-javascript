var str = "//;\n1;2\n5;-7" //The method can take up to two numbers, separated by commas, and will return their sum.
//for example “” or “1” or “1,2” as inputs.(for an empty string it will return 0)
function add(str) {
    let result = 0
    let numberArray = str.replace(/\//g, '').replace(/[\n\r;]/gm, ',').split(',').filter(Boolean).map(n => parseInt(n));
    //  replacing multiple delimeter, converting string to array , removing empty string, converting to integer
    console.log("numberArray :", numberArray)
    if (numberArray.some(v => v < 0)) {
        return "negatives not allowed"
    } else {
        result = result + numberArray.reduce((s, n) => s + n)//adding array elements
        console.log("numberarray :", result)
        return result
    }

}
console.log(add(str))