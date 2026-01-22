function add(a, b) {
    return a + b
}

function sub(a, b) {
    if (!(a > b)) throw new Error('num a must be gre than b')
    return a - b
}

function multiply(a, b) {
    if (a < 0 || b < 0) throw new Error('No neg allowed')
    return a * b
}

add(2, 5)
add(10, 23)
add(40, 42)


sub(10, 3)


multiply(2, 3)
multiply(20, 35)
multiply(20, 11)
multiply(20, 110)
