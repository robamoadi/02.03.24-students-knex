const knex = require("knex")

const data_base = knex({
    client: 'sqlite3',
    connection: {
        filename: 'students.db'
    },
    useNullAsDefault: true
})

async function delete_table() {
    await data_base.raw(`DROP TABLE IF EXISTS STUDENTS`);
}

async function create_table() {
    await data_base.raw(`CREATE TABLE IF NOT EXISTS STUDENTS(
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NAME TEXT NOT NULL,
        CITY TEXT NOT NULL,
        BIRTH INTEGER );`)
}

/*async function add_info() {
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
}*/

function add_info() {
    `INSERT INTO STUDENTS (NAME,CITY,BIRTH)
    VALUES ('SHALOM', 'TEL AVIV', 1974 );
    INSERT INTO STUDENTS (NAME,CITY,BIRTH)
    VALUES ('YURI', 'RAANANA',  1980);
    INSERT INTO STUDENTS (NAME,CITY,BIRTH)
    VALUES ('ANAT', 'RISHON',1994 );
    INSERT INTO STUDENTS (NAME,CITY,BIRTH)F
    VALUES ('DANA', 'REHOVOT', 1990 );
    INSERT INTO STUDENTS (NAME,CITY,BIRTH)
    VALUES ('David', 'JERUSALM', 1987 );`
        .replaceAll('\n    ', '')
        .split(';')
        .filter(query => query)
        .forEach(async query => { await data_base.raw(query + ';') })
}

async function get_all() {
    const student = await data_base.raw("select * from STUDENTS")
    console.log(student)
    await data_base.destroy()
}

async function insert_row(new_student) {
    await data_base.raw(`INSERT INTO STUDENTS (NAME,CITY,BIRTH)
                    VALUES (?, ?, ?);`,
        [new_student.NAME, new_student.CITY, new_student.BIRTH])
}

async function updateRow(update_student, id) {
    await data_base.raw(`UPDATE STUDENTS set NAME=?,CITY=?,BIRTH=? where id=?`,
        [update_student.NAME, update_student.CITY, update_student.BIRTH, id])
}

async function deleteRow(id) {
    await data_base.raw(`DELETE FROM STUDENTS where id=?`, [id])
}

async function get_by_id(id) {
    const student = await data_base.raw(`select * from STUDENTS where id = ${id}`)
    console.log(student);
}
create_table()
//add_info()
//delete_table()

//get_all()

const new_student = { NAME: "elena", CITY: "yarka", BIRTH: 1989}
//insert_row(new_student)

const update_student = {NAME: "elena" , CITY:"TEL-AVIV",BIRTH:1989}
//updateRow(update_student,6)

//deleteRow(6)
get_by_id(5)