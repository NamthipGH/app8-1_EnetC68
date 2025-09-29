// react/app8-1/server/index.js

const express = require('express')
const app = express() // MISSING: Initializes Express
const port = 8000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.post('/api/form-post', (request, response) => {
    let name = request.body.name || ''
    let email = request.body.email || ''
    let msg = request.body.message || '' // MISSING: Extracts message body
    let text = ` // MISSING: Variable name (assuming 'text')
<table border="1">
    <caption>ข้อมูลที่ส่งขึ้นไป</caption>
    <tr><td>ชื่อ:</td><td>${name}</td></tr> // MISSING: name
    <tr><td>อีเมล:</td><td>${email}</td></td></tr> // MISSING: email
    <tr><td>ข้อความ:</td><td>${msg}</td></tr> // MISSING: msg
</table>
`
    response.send(text)
})

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})