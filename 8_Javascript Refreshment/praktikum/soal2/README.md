##SOAL

a. Jelaskan kenapa baris 21,22,23 tidak dapat tampil?
b. Jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
c. Dengan melakukan comment pada baris ke 26, apakah baris 28 dapat dieksekusi? jelaskan


##JAWAB

a. baris 22 hanya dapat dieksekusi jika kondisi pada block if terpenuhi (terdaftar bernilai true). sedangkan pada baris keempat variable terdaftar bernilai false. jadi ketika value terdaftar kita ubah menjadi true baris 22 akan dieksekusi.

b. pada baris 26 kita melakukan reassign variable nama dengan value dari b ("kampus merdeka"). hal ini tentu akan menyebabkan error karena variabel nama kita deklarasikan menggunakan const. variabel yang dideklarasikan menggunakan const tidak dapat di-reassign maupun redeclare.

c. ketika kita melakukan comment pada line 26, line 28 akan tetap menghasilkan error dikarenakan variabel asal kita deklarasikan didalam block function. variabel yang dideklarasikan di block function hanya dapat diakses didalam function tersebut.