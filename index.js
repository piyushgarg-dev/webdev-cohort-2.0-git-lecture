function add(a, b) {
    return a + b
}

function sub(a, b) {
    if (!(a > b)) throw new Error('num a must be gre than b')
    return a - b
}

function multiply(a, b) {
    return a * b
}

add(2, 5)
add(10, 23)
add(40, 42)


sub(10, 3)
