const proffys = [
    {
        name: "Beatriz Delmiro",
        avatar: "https://avatars2.githubusercontent.com/u/31679228?s=460&u=4b996abcfb458c9d583df347a05ec12829179ecc&v=4",
        whatsapp: "+55 (81) 9 9956-7450",
        bio: "Entusiasta das melhores tecnologias de design avançadas.<br><br>Apaixonada por desenhar coisas e por mudar a vida das pessoas através de técnicas avançadas. Mais de 200.000 pessoas já passaram por uma dos meus workshops.",
        subject: "Design",
        cost: "R$ 20,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

function pageLanding(req, res) {
    return res.render('index.html')
}

function pageStudy(req, res) {
    const filter = req.query
    return res.render('study.html', { proffys, filter, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const filter = req.query
    const data = filter
    console.log(data)
    return res.render('give-classes.html', { filter, subjects, weekdays })
}

nunjucks.configure('src/views', {
    express: server, // informa qual servidor express estamos usando
    noCache: true
})

server
    // configurar arquivos estáticos (css, scripts, imagens)
    .use(express.static('public'))
    // rotas da aplicação
    .get('/', pageLanding)
    .get('/study', pageStudy)
    .get('/give-classes', pageGiveClasses)
    .listen(5500, () => {
        console.log('Server is running on port 5500.')
    })