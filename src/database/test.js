const Database = require('./db')

const createProffy = require('./createProffy')

Database.then(async (db) => {
    //insert

    proffyValue = {
        name: "Beatriz Delmiro",
        avatar: "https://avatars2.githubusercontent.com/u/31679228?s=460&u=4b996abcfb458c9d583df347a05ec12829179ecc&v=4",
        whatsapp: "+55 (81) 9 9956-7450",
        bio: "Entusiasta das melhores tecnologias de design avançadas.<br><br>Apaixonada por desenhar coisas e por mudar a vida das pessoas através de técnicas avançadas. Mais de 200.000 pessoas já passaram por uma dos meus workshops."
    }

    classValue = {
        subject: 1,
        cost: "R$ 20,00"
    }

    scheduleValues = [
        {
            weekday: [0],
            time_from: [720],
            time_to: [1220]
        },
        {
            weekday: [3],
            time_from: [980],
            time_to: [1220]
        }
    ]
    
    // await createProffy(db, { proffyValue, classValue, scheduleValues })

    //SELECT

    // const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um professor e trazer os dados do professor

    const selectedClassesAndProffys = await db.all(`
        SELECT proffys.*, classes.*
        FROM classes
        JOIN proffys ON (proffys.id = classes.proffy_id)
        WHERE proffy_id = 1;
    `)

    // console.log(selectedClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from >= "720"
        AND class_schedule.time_to <= "1220";
    `)

    console.log(selectClassesSchedules)
})
