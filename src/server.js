const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
    //receber os dados do req.body na url codificados
    .use(express.urlencoded({ extended: true }))
    .use(express.static('public'))
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .post('/save-classes', saveClasses)
    .listen(5500, () => {
        console.log('Server is running on port 5500.')
    })