require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('63c7e839aafa88b87c8df94f').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCont = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    return count
}

deleteTaskAndCont('63c7e8305e1fd44e096574e6', false).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})