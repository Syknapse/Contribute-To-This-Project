# Panduan pengelola

Panduan ini untuk mereka yang ingin bergabung dengan proyek sebagai pengelola, untuk membantu mengelola dan memelihara proyek untuk komunitas. (Ini bukan panduan untuk **kontributor pertama kali**)

Pandan ini juga tersedia dalam bahasa: [Jerman](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/translations/maintainer_guide_german.md), [Indonesia](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/translations/maintainer_guide_indonesian.md), [Italian](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/translations/maintainer_guide_italian.md), dan [Portuguese](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/translations/maintainer_guide_portuguese.md) (tambahan terjemahan lainnya akan sangat diterima)

## Tujuan

Tujuan utama kami adalah untuk memberikan kontributor kami umpan balik secepat mungkin dari titik mereka membuat permintaan tarik mereka. Ini terutama berarti memberikan ulasan kode, dan menggabungkan PR yang diterima.
Selain itu kami dapat mempertahankan proyek memastikan semuanya bekerja dengan benar dan bermanfaat dan berguna untuk kontributor kami.

## Untuk siapa ini?

Siapa pun yang memiliki sedikit keterampilan Git dan GitHub. Anda tidak harus menjadi ahli, panduan ini akan membantu bahkan pemula. Ini adalah proyek aktif yang menerima kontribusi reguler dan membantu banyak orang membuat kontribusi open source pertama mereka. Menjadi pengelola pada proyek ini membantu memastikannya terus memberikan pengalaman pertama yang baik kepada kontributor kami dan mendorong mereka untuk berkontribusi lebih banyak.

Anda dapat melakukan sebanyak atau sesedikit waktu yang Anda inginkan untuk ini. Di antara kita semoga bisa tetap berjalan lancar.

## Metodologi

- Buka bagian permintaan tarik proyek, mulailah dengan permintaan tarikan tertua yang tidak dalam status 'diminta perubahan'.
- Buka PR dan buka tab perubahan file dan mulai tinjauan kode.
- Cek PRnya, pastikan sudah mengikuti spek di tutorial.
- Pastikan HTML, link, dan data sudah benar semua. Pastikan kartu diposisikan di awal file di tempat yang seharusnya.
- Selanjutnya periksa apakah ada konflik. Gabungkan `master` ke cabang PR untuk memperbaiki konflik. Konflik biasanya terjadi ketika sudah lama sejak penggabungan sebelumnya dan beberapa PR menggunakan versi usang yang sama.
- Jika ini masalahnya, perbaiki konfliknya. Biasanya Anda harus menambahkan kartu baru di atas kartu yang telah ditambahkan sejak garpu dibuat.
- Jika semuanya baik-baik saja, setujui PR, tulis pesan kepada kontributor yang berterima kasih atas kontribusi mereka (mengingat mereka adalah pengatur waktu pertama dan akan mendapat manfaat dari dorongan).
- Gabungkan PR menjadi `master`.

### Meminta perubahan

- Terkadang ada masalah dengan PR yang harus diperbaiki oleh kontributor seperti percabangan yang salah, HTML yang rusak, info yang hilang, kartu yang ditempatkan di tempat yang salah. Apa pun yang tutorialnya tidak diikuti dengan benar (dan bukan konflik penggabungan sederhana).
- Mulai tinjauan kode di GitHub dan minta perubahan. Cobalah untuk sedeskriptif mungkin, beri komentar pada baris yang tepat, beri tahu mereka dengan tepat apa masalahnya dan bagaimana cara memperbaikinya, dan dorong mereka bahwa ini adalah bagian normal dari proses peninjauan PR.
- Saat Anda siap, kirimkan ulasan.
- Awasi percakapan jika kontributor memiliki pertanyaan lanjutan yang dapat Anda bantu. Tujuan kami adalah membuat semua orang melewati garis finis, jadi kami mencoba membimbing mereka sampai ke sana.
- Setelah mereka memperbaiki perubahan yang diminta, PR dapat digabungkan ke `master`.

Tolong, selalu uji bahwa perubahan tidak merusak proyek dan bahwa halaman langsung masih berfungsi seperti yang diharapkan. Itu selalu yang terbaik untuk menguji perubahan secara lokal sebelum menggabungkan dan tidak pernah menggabungkan apa pun yang terlihat mencurigakan.

## Peralatan

Jika PR yang terkumpul tidak banyak, semua proses ini dapat dilakukan langsung di halaman GitHub proyek.
Namun, tidak jarang ada beberapa PR yang menunggu dan saat itulah pasti akan ada beberapa konflik gabungan. Anda dapat menggunakan alat apa pun yang Anda kenal untuk melihat perbedaan, dan memperbaiki konflik.
Saya merekomendasikan penggunaan alat seperti [GitKraken](https://www.gitkraken.com/download). Ini visual dan memungkinkan manajemen proyek yang lebih mudah ketika ada beberapa PR yang harus dilalui.
Unduh GitKraken, klon proyek. Menggunakan kombinasi editor kode Anda dan alat konflik gabungan terintegrasi GitKraken memberi Anda kontrol penuh untuk melalui PR dengan cepat, memperbaiki konflik, dan penggabungan.

Proyek ini telah menginstal Prettier untuk memastikan bahwa terlepas dari bagaimana kontributor mengirimkan PR, panduan gaya akan diterapkan. Proyek dengan cara ini selalu dipertahankan dengan lekukan dan gaya yang sama.
Jika Anda melihat file HTML terlihat berantakan, jalankan `npm run prettier-html` di root proyek. Itu harus mencoba memformat file dan jika tidak, itu akan menunjukkan kesalahan kepada Anda. Terkadang tag penutup yang hilang atau HTML yang rusak digabungkan secara tidak sengaja dan ini adalah cara yang baik untuk menemukan dan memperbaikinya.

Jika Anda ragu, Anda selalu dapat menyebutkan saya atau pengelola lainnya di PR itu sendiri atau DM saya di [Twitter](https://twitter.com/Syknapse)

## Bergabunglah dengan kami

Bergabunglah bersama kami untuk membantu mengembangkan proyek ini bersama-sama. Hubungi saya di [Twitter](https://twitter.com/Syknapse) dan kirimkan nama pengguna GitHub Anda agar saya dapat menambahkan Anda.
