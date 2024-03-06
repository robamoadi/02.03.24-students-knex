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
    INSERT INTO STUDENTS (NAME,CITY,BIRTH)
    VALUES ('DANA', 'REHOVOT', 1990 );
    INSERT INTO STUDENTS (NAME,CITY,BIRTH)
    VALUES ('David', 'JERUSALM', 1987 );`
    .replaceAll('\n    ', '')
    .split(';')
    .filter(query => query)
    .forEach(async query => { await data_base.raw(query + ';') })
}

async function get_all() {
    const employee = await data_base.raw("select * from STUDENTS")
    console.log(employee)
    await data_base.destroy()
}
create_table()
add_info()
delete_table()

get_all()