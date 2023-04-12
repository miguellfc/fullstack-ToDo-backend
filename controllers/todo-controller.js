const ToDo = require('../models/ToDo')

module.exports.getToDo = async (request, response) => {
    const docs = await ToDo.find()
    response.send(docs)
}

module.exports.saveToDo = async (request, response) => {
    const { text } = request.body

    ToDo
        .create({text})
        .then((data) => {
            console.log('Added successfully...')
            console.log(data)
            response.send(data)
        })
}

module.exports.updateToDo = async (request, response) => {
    const { _id, text } = request.body

    ToDo
        .findByIdAndUpdate(_id,{text})
        .then(() => response.send('Updated successfully...'))
        .catch((error) => console.log(error))
}

module.exports.deleteToDo = async (request, response) => {
    const { _id } = request.body

    ToDo
        .findByIdAndDelete(_id)
        .then(() => response.send('Deleted successfully...'))
        .catch((error) => console.log(error))
}