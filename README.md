# Analisis Array Acak

## Deskripsi Proyek
Proyek **Analisis Array Acak Modern** adalah aplikasi web yang dirancang untuk menghasilkan array berisi 100 nilai random antara 1 hingga 50. Nilai-nilai dalam array ini kemudian dipisahkan menjadi dua array berdasarkan indexnya: satu untuk index genap dan satu untuk index ganjil. Selain itu, aplikasi ini juga melakukan analisis statistik pada kedua array tersebut dengan menghitung nilai minimum, maksimum, total, dan rata-rata, serta membandingkan hasil antara kedua array.

## Fitur Utama
- **Generasi Nilai Random**: Menghasilkan 100 nilai random dalam rentang 1 hingga 50.
- **Pemisahan Array**: Memisahkan nilai ke dalam dua array berdasarkan index (genap dan ganjil).
- **Analisis Statistik**:
  - Menghitung nilai **Minimum** untuk masing-masing array.
  - Menghitung nilai **Maksimum** untuk masing-masing array.
  - Menghitung **Total** nilai dari masing-masing array.
  - Menghitung **Rata-rata** dari masing-masing array.
- **Perbandingan Array**: Membandingkan nilai minimum, maksimum, total, dan rata-rata antara array genap dan ganjil.

## Implementasi
Proyek ini telah memenuhi semua kriteria sebagai berikut:

- **Variabel**: Digunakan untuk menyimpan nilai-nilai dan hasil perhitungan.
- **Tipe Data**: Menggunakan tipe data yang sesuai seperti array untuk menyimpan nilai dan objek untuk menyimpan hasil analisis.
- **Operator**: Menggunakan operator aritmetika untuk melakukan perhitungan.
- **Percabangan**: Menggunakan struktur percabangan `if` untuk membandingkan hasil antara array genap dan ganjil.
- **Perulangan**: Menggunakan loop untuk menghasilkan nilai random dan untuk pemisahan array.
- **Array**: Menggunakan array untuk menyimpan dan memanipulasi data.
- **Fungsi**: Kode diorganisir dalam beberapa fungsi agar mudah digunakan kembali dan dipahami.

### Fungsi Utama dalam Kode
1. **`generateRandomArray(size, minVal, maxVal)`**: Menghasilkan array berisi nilai random.
2. **`splitArray(arr)`**: Memisahkan array menjadi dua berdasarkan index (genap dan ganjil).
3. **`findMin(arr)`**: Menghitung nilai minimum tanpa menggunakan fungsi bawaan.
4. **`findMax(arr)`**: Menghitung nilai maksimum tanpa menggunakan fungsi bawaan.
5. **`calculateTotal(arr)`**: Menghitung total nilai dari array tanpa menggunakan fungsi bawaan.
6. **`calculateAverage(arr)`**: Menghitung rata-rata dari array tanpa menggunakan fungsi bawaan.
7. **`compareArrays(even, odd)`**: Membandingkan nilai antara array genap dan ganjil.
8. **`updateUI(original, even, odd)`**: Memperbarui antarmuka pengguna dengan hasil analisis.

## Cara Menggunakan
1. Clone atau unduh proyek ini dari [repository GitHub](https://github.com/username/repo-name).
2. Buka file `index.html` menggunakan browser modern.
3. Klik tombol **"Buat Array Baru"** untuk menghasilkan array baru dan melihat hasil analisis.

## Demo
Anda dapat melihat proyek ini secara langsung di [GitHub Pages](https://areka06.github.io/Homework---Javascript-Version-Control/).

## Catatan
- Proyek ini tidak menggunakan fungsi bawaan JavaScript untuk menghitung nilai minimum, maksimum, total, dan rata-rata, sesuai dengan instruksi.
- Kode diorganisir ke dalam fungsi untuk memungkinkan penggunaan kembali dan menjaga kebersihan kode.

## Kontribusi
Jika Anda ingin berkontribusi pada proyek ini, silakan lakukan fork repository ini dan ajukan pull request dengan fitur atau perbaikan yang ingin Anda tambahkan.
