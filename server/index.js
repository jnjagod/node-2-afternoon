const express = require('express')
const mc = require('./controllers/messages_controller')

const app =  express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const messagesUrl = '/api/messages'
app.post(messagesUrl, mc.create)
app.get(messagesUrl, mc.read)
app.put(`${messagesUrl}/:id`, mc.update)
app.delete(`${messagesUrl}/:id`, mc.delete)

const port = 3001
app.listen(port, () => console.log('listening on port', port))