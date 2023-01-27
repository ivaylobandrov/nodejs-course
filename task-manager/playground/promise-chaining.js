require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('63c7b6023e558a0a52aeb9a0', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('63c7b6023e558a0a52aeb9a0', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})