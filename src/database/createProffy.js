module.exports = async function (db, { proffyValue, classValue, scheduleValues }) {
    const insertedProffy = await db.run(`

        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    const insertedClass = await db.run(`
        
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID // método para pegar o último ID autoincrementado pelo SQLite

    const insertedScheduleValues = scheduleValues.map((schedule) => {
        return db.run(`

            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${schedule.weekday}",
                "${schedule.time_from}",
                "${schedule.time_to}"
            );

        `)
    })
    // espera a promise resolver com sucesso todos os arrays de schedule
    await Promise.all(insertedScheduleValues)
}