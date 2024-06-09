const express = require('express')
const app = express()
const port = 3000

// manually utility for response
const bodyParser = require('body-parser')
const db = require('./conn.js')
const response = require('./response.js')

// routes utama
// middleware
app.use(bodyParser.json())

// ambil data dari db
//app.get('/', (req, res) => {
//const sql = 'SELECT * FROM mahasiswa'

// query db
//db.query(sql, (error, hasil) => {
// hasil data db 
//         if (error) {
//             response(400, [], "gagal", res)
//             return
//         }
//         response(200, hasil, "data diambil dari mahasiswa", res)

//     })
// })

// app.get('/nim', (req, res) => {

//     const sql = `SELECT nama, nim FROM mahasiswa WHERE nim = ${req.query.nim}`
//     db.query(sql, (error, hasil) => {
//         response(200, hasil, "find nim", res)
//     })
// })

// route lain
// app.get('/menu', (req, res) => {
//     console.log({ urlParams: req.query })
//     res.send('menu')
// })

// route post
//app.post('/login', (req, res) => {
//console.log({ requestFromOutside: req.body })

// cek username dan password
// if (req.body.username !== 'andre' || req.body.password !== '123') {
//     res.status(401).send('login gagal')
//     return
// }
//res.send('login sukses')

//})

// basic express routing
app.get('/mahasiswa/:nim', (req, res) => {
    const nim = req.params.nim
    const sql = `SELECT * FROM mahasiswa WHERE nim = ${nim}`
    db.query(sql, (error, hasil) => {
        if (error) {
            response(400, [], "gagal", res)
            return 'error'
        }

        response(200, hasil, "data diambil dari mahasiswa", res)
    })


})
app.post('/', (req, res) => {

})
app.put('/', (req, res) => {

})
app.delete('/', (req, res) => {

})



// default listen port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
