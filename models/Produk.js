const mongoose = require("mongoose");

const produkScheme = new mongoose.Schema({
    nama_produk: {
        type: String,
        required: true,
    },
    keterangan: {
        type: String,
        required: true,
    },
    harga: {
        type: Number,
        required: true,
    },
    jumlah: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Produk", produkScheme);