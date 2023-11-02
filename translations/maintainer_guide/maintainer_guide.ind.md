# Petunjuk Pengelola

Petunjuk ini ialah ditujukan kepada mereka yang ingin bergabung dengan proyek sebagai pengelola, membantu memelihara dan mengelola proyek terhadap komunitas. (Ini bukanlah petunjuk untuk **kontributor yang masih baru**)

## Terjemahan

Petunjuk ini pula tersedia dalam [bahasa lain](../README.md)

| [Inggris](/maintainer_guide.md) | [Bengali](maintainer_guide.ben.md) | [Zhōngwén (Tradisional)](maintainer_guide.zho-tc.md) | [Jerman](maintainer_guide.ger.md) | [Hindi](maintainer_guide.hin.md) |
| :---: | :---: | :---: | :---: | :---: |
| [Italia](maintainer_guide.ita.md) | [Jepang](maintainer_guide.jpn.md) | [Korea](maintainer_guide.kor.md) | [Marathi](maintainer_guide.mar.md) | [Portugis](maintainer_guide.por.md) 
| [Prancis (français)](maintainer_guide.fra.md) | [Rusia](maintainer_guide.rus.md) | [Ukraina](maintainer_guide.ukr.md)

> Terjemahan kepada proyek dokumentasi ialah dipersilakan. Lihat [`Petunjuk Terjemahan`](../README.md) untuk berkontribusi.

---

## Tujuan

Tujuan utama kami ialah memberikan umpan balik tercepat sebisa mungkin kepada kontributor sejak mereka membuat permintaan penggabungan (*pull request*) mereka. Hal terutama memberikan tinjauan kode dan menggabungkan PR yang diterima.
Selain itu, kami dapat memelihara proyek menjamin semua berfungsi dengan benar sebagaimana membantu dan bermanfaat kepada kontributor kami.

## Untuk siapakah ini?

Siapa pun dengan sedikit keterampilan Git dan GitHub. Anda tak perlu harus menjadi ahli, petunjuk ini bahkan membantu para pemula. Ini ialah proyek aktif yang mendapat kontribusi berkala dan membantu banyak orang dalam membuat kontribusi sumber terbuka pertama mereka. Menjadi pengelola proyek ini membantu menjamin proyek secara berkelanjutan memberikan pengalaman pertama yang baik kepada kontributor kami dan menganjurkan mereka berkontribusi lebih banyak.

Anda dapat berkomitmen sebanyak atau sekadar waktu yang Anda inginkan. Di antara kita, kami berharap dapat tetap menjalankan ini dengan lancar.

## Metodologi

- Lihat ke bagian permintaan penggabungan proyek, mulailah dengan permintaan penggabungan terlama yang bukan dalam status 'permintaan perubahan'.
- Buka sebuah PR, pilih ke label perubahan berkas dan mulai tinjauan kode.
- Periksalah PR, pastikan itu mengikuti spesifikasi dalam tutorial.
- Pastikan pula HTML, tautan dan data ialah benar secara keseluruhan. Pastikan kartu diposisikan pada awal berkas sebagaimana yang dimaksudkan.
- Lalu periksa apakah terdapat konflik. Gabungkan `master` ke dalam percabangan (*branch*) PR untuk memperbaiki konflik. Konflik secara umum berlangsung ketika telah sekian lama semenjak penggabungan terakhir dan beberapa PR menggunakan versi sama yang telah ketinggalan.
- Bila ini menjadi kasus, perbaiki konflik. Secara umum Anda akan perlu menambahkan kartu baru di atas kartu yang telah ditambahkan sejak (*fork*) dibuat.
- Bila semua terlihat baik, setujui PR, tulislah pesan kepada kontributor dengan berterima kasih atas kontribusi mereka (mengingat mereka ialah pemula dan akan memperoleh manfaat dari pemberian semangat).
- Gabungkan PR ke dalam `master`.

## Perubahan permintaan

- Kadang kala terdapat persoalan dengan PR yang harus diperbaiki oleh kontributor seperti kesalahan percabangan, HTML yang rusak, informasi yang hilang lalu penempatan kartu di tempat yang keliru. Segala sesuatu yang mana bukan berdasarkan tutorial yang benar (dan bukan konflik penggabungan yang sederhana).
- Mulailah meninjau kode pada GitHub dan perubahan permintaan. Upayakan sedeskriptif mungkin, mengomentari baris tertentu, memberi tahu mereka secara tepat apa yang menjadi persoalan dan bagaimana memperbaiki itu dan anjurkan mereka bahwa ini ialah bagian yang normal dari proses peninjauan PR.
- Kala Anda siap, ajukan tinjauan tersebut.
- Terus pantau percakapan dalam hal kontributor memiliki pertanyaan lanjutan yang dapat Anda bantu. Tujuan kami ialah membuat semua orang melewati garis akhir, maka kami mencoba memandu mereka semua sampai ke sana.
- Setelah mereka memperbaiki sesuai dengan perubahan permintaan, PR dapat digabungkan ke `master`.

Mohon, selalu periksa bahwa perubahan yang berlangsung tanpa merusak proyek dan halaman terkini masih berfungsi sebagaimana yang diharapkan. Selalu memeriksa perubahan secara lokal sebelum menggabungkan dan jangan menggabungkan segala sesuatu yang terlihat mencurigakan.

## Alat

Bila belum terdapat banyak PR yang tertumpuk seluruh proses dapat dilakukan secara langsung dalam halaman proyek GitHub.
Akan tetapi, bukanlah hal yang jarang memiliki beberapa PR yang menunggu dan saat itulah akan terdapat sejumlah konflik dalam melakukan penggabungan. Anda dapat menggunakan sejumlah alat yang Anda kenal untuk melihat perbedaan dan memperbaiki konflik.
Saya merekomendasikan penggunaan alat seperti [GitKraken](https://www.gitkraken.com/download). Kemampuan visual dan tata kelola lebih mudah kala terdapat beberapa PR yang harus dilalui.
Unduh GitKraken, lalu klon proyek. Menggunakan kombinasi dari kode editor Anda dan integrasi alat konflik penggabungan milik GitKraken menyuguhkan kendali penuh untuk secara cepat melalui PR, memperbaiki konflik dan penggabungan.

Proyek tersebut telah terpasang Prettier untuk menjamin bahwa terlepas dari bagaimana kontributor mengajukan PR, panduan terhadap gaya akan diberlakukan. Proyek dengan cara ini selalu dipelihara dengan gaya dan indentasi yang sama.
Bila Anda melihat berkas HTML terlihat berantakan jalankan kode berikut dalam bawaan proyek.

```js
npx prettier --write index.html
```

Kode tersebut harus berupaya mengatur ulang berkas dan bila gagal akan menampilkan kesalahan kepada Anda. Kadang kala simbol penutup yang hilang atau HTML yang rusak digabungkan tanpa sengaja dan ini ialah potensi yang baik untuk dikenali dan menjadi perbaikan.

Bila Anda ragu, Anda selalu dapat memanggil saya atau pengelola lain dalam PR itu sendiri atau menghubungi langsung ke saya di [Twitter](https://twitter.com/Syknapse).

## Bergabung dengan kami

Bergabunglah dengan kami untuk membantu proyek ini bersama. Terhubung dengan saya pada [Twitter](https://twitter.com/Syknapse) dan berikan saya nama pengguna GitHub Anda lalu saya dapat menambahkan Anda. Anda dapat pula bergabung dengan komunitas Discord kami melalui tombol berikut:

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Bergabung dengan peladen Discord kami!')
