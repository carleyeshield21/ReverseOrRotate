// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/javascript

function revrot(str, sz) {
    let arr = Array.from(str)
    // console.log(str)
    // console.log(arr)

    let sum = 0
    let num = []
    for(i=0; i<=sz-1; i++){
        // console.log(i)
        // sum = sum + parseInt(str[i])**3
        num.push(str[i])
        sum += parseInt(str[i])**3
    }
    
    if(sum % 2 == 0){
        let chunk1 = str.slice(0,sz).split('').reverse().join('')
        // console.log(chunk1)
        let chunk2 = str.slice(sz,str.length).split('')
        // console.log(chunk2)
        let a = chunk2.shift()
        chunk2.push(a)
        let chunk2str = chunk2.toString().split(',').join('')
        // console.log(chunk2str)

        console.log(`str: ${str}`)
        console.log(chunk1.concat(chunk2str))
    } else {
        // console.log(num)
        let a = num.shift()
        // console.log(a)
        num.push(a)
        let chunk1 = num.toString().split(',').join('')
        // console.log(chunk1)
        
        let chunk2 = str.slice(sz,str.length).split('')
        let b = chunk2.shift()
        // console.log(b)
        chunk2.push(b)
        chunk2 = chunk2.toString().split(',').join('')
        // console.log(chunk2)

        console.log(`str: ${str}`)
        console.log(chunk1.concat(chunk2))
    }
}                                                                  
revrot('123789', 3)
console.log('========')
revrot('123456987654', 6)
console.log('========')
revrot('123456987653', 6)
console.log('========')
revrot('66443875', 4)
console.log('========')
revrot('66443875', 8)
console.log('========')
revrot('664438769', 8)
console.log('========')
revrot('563000655734469485', 4)
console.log('========')
revrot("123456987654", 6)