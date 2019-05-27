let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        messages.push({id, text, time})
        id++
        res.send(messages)
    },

    read: (req, res) => {
        res.send(messages)
    },

    update: (req, res) => {
        const {text} = req.body
        const updateId = req.params.id
        const messageIndex = messages.findIndex(message => message.id === updateId)
        let message = messages[index]
        message[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.send(messages)
    },

    delete: (req, res) => {
        const deleteId = req.params.id
        messageIndex = messages.findIndex(message => message.id === deleteId)
        messages.splice(messageIndex, 1)
        res.send(messages)
    }
}