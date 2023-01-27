const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
                return reject('Numbers must be non-negative')
            }
            resolve(a + b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1, 99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
    return sum3
}

// with async await we have access to all data in the same scope
// async wait create simpler chaining

// async functions always return a promise
doWork().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log('e', e)
})