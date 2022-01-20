var str = "//;\n1;2\n5;7" //The method can take up to two numbers, separated by commas, and will return their sum.
//for example “” or “1” or “1,2” as inputs.(for an empty string it will return 0)
function add(str) {
    let result = 0
    let numberArray = str.replace(/\//g, '').replace(/[\n\r;]/gm, ',').split(',').filter(Boolean);//  replacing \n with and converting string to array,
    console.log("numberArray :", numberArray)
    result = result + numberArray.reduce((s, n) => parseInt(s) + parseInt(n))//adding array elements
    console.log("numberarray :", result)
}
add(str)