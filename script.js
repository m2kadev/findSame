let first = document.getElementById('first')
let second = document.getElementById('second')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', showResult)

function showResult() {
    let firstValue = first.value
    let secondValue = second.value
    let maxLength = firstValue.length > secondValue.length ? firstValue.length : secondValue.length
    let minLength = firstValue.length < secondValue.length ? firstValue.length : secondValue.length
    
    let ans = getSame(firstValue, secondValue, maxLength, minLength)
    result.classList.add('active')
    if (firstValue === '' &&  secondValue === '') {
        result.style.setProperty('--bg-color', 'rgb(184, 79, 79)')
        result.style.setProperty('color', '#fff')
        result.innerText = "Nothing to show! Type first"
    } else {
        result.style.setProperty('--bg-color', 'rgb(79, 184, 84)')
        result.style.setProperty('color', '#333')
        result.innerText = ans
    }
    
}

//the function is here
function getSame(str1, str2, max, min) {
    let aStr1 = str1.split('')
    let aStr2 = str2.split('')

    let ans = ''
    for (let i = 0; i < max; i++) {
        for (let ii = 0; ii < min; ii++) {
            if (aStr1[i] === aStr2[ii]) {
                if (aStr2[ii] !== undefined) {
                    ans += aStr2[ii]
                    aStr2.splice(ii, 1)
                    break
                }
            }
        }
    }
    return ans
}
