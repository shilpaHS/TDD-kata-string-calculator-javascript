var str = "1\n2,3" //The method can take up to two numbers, separated by commas, and will return their sum.
//for example “” or “1” or “1,2” as inputs.(for an empty string it will return 0)
function add(str) {
    let result = 0
    let numberArray = str.replace(/\n/gm, ',').split(',');//  replacing \n with and converting string to array,
    result = result + numberArray.reduce((s, n) => parseInt(s) + parseInt(n))//adding array elements
    console.log("numberarray :", result)
}
add(str)