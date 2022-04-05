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
    var responseObject = []

    
    for (let j = 0; j < dataObject.length; j++) {

        if(dataObject[j].title.search(new RegExp(serchQuery, "i")) > -1) {
            console.log(dataObject[j].title)
            console.log(j)

            const pruduct = {
                title: dataObject[j].title,
                description: dataObject[j].description,
                article_number: dataObject[j].article_number,
                price: dataObject[j].price,
                price_campaign: dataObject[j].price_campaign,
                currency: dataObject[j].currency,
                in_stock: dataObject[j].in_stock,
                category: dataObject[j].category,
                url: dataObject[j].url
            }

            responseObject.push(pruduct)

        }

    }

    res.send(responseObject)
})



app.listen(port, () => {
    console.log('server is listening on port 5000....')
  })