const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path');
const port = 5000

const dataJSON = fs.readFileSync('articles.json', 'utf8')

const dataObject = JSON.parse(dataJSON)


app.get('/', (req, res) => {

    res.sendfile('./public/test.html')
}) 

app.get('/style.css', (req, res) => {
    res.sendfile('./public/style.css')
})

app.get('/browsweScriptTest.js', (req, res) => {
    res.sendfile('./public/browsweScriptTest.js')
})

app.get('/api', (req, res) => {

    var serchQuery = req.query.serchQuery

    
    for (let j = 0; j < dataObject.length; j++) {

        if(dataObject[j].title.search(new RegExp(serchQuery, "i")) > -1) {
            console.log(dataObject[j].title)
            console.log(j)
        }

    } 

    console.log("---------------------------------------")

    res.send(dataObject)
})



app.listen(port, () => {
    console.log('server is listening on port 5000....')
  })