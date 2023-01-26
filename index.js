const express = require("express")
const bodyParser = require("body-Parser")
const cors = require("cors")
const { response } = require("express")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.get("/siswa", (req,res) => {
    let response = {
        message: "bebas"
    }
    res.json(response)
})

app.get("/amel/:nama/:kelas/:absen", (req,res) => {

let nama =  req.params.nama
let kelas = req.params.kelas
let absen = req.params.absen

    let response = {
        message: "amel cuantiq",
        nama : nama,
        kelas : kelas,
        absen : absen
    }
    res.json(response)
})

app.post("/luas", (req,res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let luas = panjang * lebar

    let response = {
        panjang : panjang,
        lebar : lebar,
        luas : luas
    }
    res.json(response)
})

app.post("/registrasiekskul", (req,res) => {
    let nama = req.body.nama
    let alamat = req.body.alamat
    let kelas = req.body.kelas
    let umur = req.body.umur
    let sekolah = req.body.sekolah

    let response = {
        nama : nama,
        alamat : alamat,
        kelas : kelas,
        umur : umur,
        sekolah : sekolah
    }
    res.json(response)
})

app.listen(9000,() => { 
    console.log("bismillah")
})