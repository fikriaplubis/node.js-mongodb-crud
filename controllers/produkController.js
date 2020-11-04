const Produk = require("../models/Produk");

module.exports = {
    viewProduk: async(req, res) => {
        try {
            const produk = await Produk.find();
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus");
            const alert = {message: alertMessage, status: alertStatus};
            res.render("index", {
                produk,
                alert,
                title: "CRUD ARKADEMY",
            });
        } catch (error) {
            res.redirect("/produk");
        }
    },

    addProduk: async(req, res) => {
        try {
            const {nama_produk, keterangan, harga, jumlah}=req.body;
            await Produk.create({nama_produk, keterangan, harga, jumlah});
            req.flash("alertMessage", "Berhasil Menambahkan Data Produk");
            req.flash("alertStatus", "success");
            res.redirect("/produk");
        } catch(error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/produk");
        }
    },

    editProduk: async(req, res) => {
        try {
            const { id, nama_produk, keterangan, harga, jumlah } = req.body;
            const produk = await Produk.findOne({_id: id});
            produk.nama_produk = nama_produk;
            produk.keterangan = keterangan;
            produk.harga = harga;
            produk.jumlah = jumlah;
            await produk.save();
            req.flash("alertMessage", "Berhasil Memperbaharui Data Produk");
            req.flash("alertStatus", "success");
            res.redirect("/produk");
        } catch(error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/produk");
        }
    },

    deleteProduk: async(req, res) => {
        try {
            const { id } = req.params;
            const produk = await Produk.findOne({_id: id});
            await produk.remove();
            req.flash("alertMessage", "Berhasil Menghapus Data Produk");
            req.flash("alertStatus", "warning");
            res.redirect("/produk");
        } catch(error) {
            req.flash("alertMessage", `${error.message}`);
            req.flash("alertStatus", "danger");
            res.redirect("/produk");
        }
    },
}