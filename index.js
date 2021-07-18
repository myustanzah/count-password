let inputFirst = 206938
let inputEnd = 679128
let count = 0
// 206938-679128
// let test1 = 101000
// let test = 111111
while (inputFirst <= inputEnd) {
    let matchNumber = String(inputFirst)
    let flag = false
    let countSame = 0
    for (let i = 0; i < matchNumber.length; i++) {
        if (Number(matchNumber[i + 1]) >= Number(matchNumber[i]) && matchNumber[i + 1] !== undefined) {
            countSame++
            if (matchNumber[1] === matchNumber[2]) {
                flag = true
            }
        }
    }
    if (flag && countSame === 5) {
        count++
    }
    inputFirst++
}

console.log(count);