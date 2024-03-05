const knex = require("knex")

const data_base = knex({
    client: 'sqlite3',
    connection: {
        filename: 'students.db'
    },
    useNullAsDefault: true
})

async function create_table() {
    await data_base.raw(`CREATE TABLE IF NOT EXISTS STUDENTS(
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NAME TEXT NOT NULL,
        CITY TEXT NOT NULL,
        BIRTH INTEGER );`)
}

async function add_info() {
    await data_base.raw(`INSERT INTO STUDENTS (NAME,CITY,BIRTH)
    VALUES ('SHALOM', 'TEL AVIV', 1974 );`)
    await data_base.raw(`INSERT INTO STUDENTS (NAME,CITY,BIRTH)
    VALUES ('YURI', 'RAANANA',  1980);`)
    await data_base.raw(`INSERT INTO STUDENTS (NAME,CITY,BIRTH)
    VALUES ('ANAT', 'RISHON',1994 );`)
    await data_base.raw(`INSERT INTO STUDENTS (NAME,CITY,BIRTH)
    VALUES ('DANA', 'REHOVOT', 1990 );`)
    await data_base.raw(`INSERT INTO STUDENTS (NAME,CITY,BIRTH)
    VALUES ('David', 'JERUSALM', 1987 );`)
}

create_table()
add_info()