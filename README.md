# news-image-20261122

Ringkasan berita dunia hari Minggu, 22 November 2026, dalam satu gambar.

## Isi repo

- `entry.png` — gambar entrinya: satu gambar yang merangkum berita dunia
  tanggal 22 November 2026.
- `main.ts` — program kecil (Node 22, pustaka standar saja) yang menyalin
  `entry.png` ke `/output/entry.png`.
- `LICENSE` — lisensi repo ini.

## Cara jalan

Program tidak butuh jaringan. Ia mencari `entry.png` di samping file
`main.ts` sendiri, jadi tetap jalan walau perintah dijalankannya dari
direktori lain:

```sh
node main.ts
```

Hasilnya tersimpan di `/output/entry.png`. Untuk mencoba ke folder lain
tanpa menulis ke `/output`, isi variabel `MAKEFUN_OUTPUT_DIR`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Karena program hanya menyalin berkas yang sudah ada di repo, keluarannya
selalu sama persis dari satu jalan ke jalan berikutnya, dan tidak ada
unduhan atau pemanggilan jaringan apa pun saat berjalan.

## Kompetisi

Entri untuk kompetisi make.fun `news-image-20261122`: program menulis satu
gambar ke `/output/entry.png`, lalu seorang juri AI yang bisa melihat
gambar membandingkan entri dua demi dua dan memilih gambar yang paling
baik merangkum berita dunia hari itu. Entri berperingkat tertinggi
berbagi hadiah $100.
