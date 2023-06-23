// menambahkan constructor
class Kendaraan {
    constructor(totalRoda, kecepatanPerJam){
        this.totalRoda = totalRoda;
        this.kecepatanPerJam = kecepatanPerJam;
    }
}
// menambahkan constructor, menghapus var declaration on params
class Mobil extends Kendaraan{
    constructor(totalRoda, kecepatanPerJam){
        super(totalRoda, kecepatanPerJam);
    }
    // menambahkan params ke fungsi tambahKecepatan(), menambahkan kecepatan
    tambahKecepatan(kecepatanBaru){
        this.kecepatanPerJam += kecepatanBaru;
        return console.log(`mobil berjalan dengan kecepatan: ${this.kecepatanPerJam}`);
    }

    berjalan(kecepatan){
        tambahKecepatan(kecepatan);
    }
}

// buat kelas baru dan panggil fungsi tambahKecepatan()
let mobilCepat = new Mobil(4, 0);
mobilCepat.tambahKecepatan(40);

let mobilLamban = new Mobil(4, 0);
mobilLamban.tambahKecepatan(20);