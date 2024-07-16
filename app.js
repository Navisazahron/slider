// Select elemen-elemen yang diperlukan
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

// Tambahkan event listener untuk tombol next dan prev
nextDom.addEventListener('click', () => showSlider('next'));

prevDom.addEventListener('click', () => showSlider('prev'));

// Ambil semua elemen item dari slider dan thumbnail
let itemSlider = document.querySelectorAll('.carousel .list .item');
let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

// Loop untuk setiap item di thumbnail dan tambahkan event listener untuk klik
itemThumbnail.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.stopPropagation(); // Menghentikan event propagation

        // Pindahkan item thumbnail yang diklik ke posisi pertama di carousel
        if (listItemDom && itemSlider[index]) {
            listItemDom.insertBefore(itemSlider[index], listItemDom.firstChild);
        }

        // Hapus kelas 'next' dan 'prev' jika ada
        if (carouselDom) {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');

            // Beri kelas 'next' untuk memberikan efek animasi
            setTimeout(() => {
                carouselDom.classList.add('next');
            }, 100);
        }
    });
});

// Fungsi untuk menampilkan slider berdasarkan tipe (next atau prev)
function showSlider(type) {
    // Hapus kelas 'next' dan 'prev' jika ada
    if (carouselDom) {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }

    // Cek tipe dari tombol yang ditekan
    if (type === 'next') {
        // Ambil item pertama dari slider
        let firstItem = listItemDom.firstElementChild;

        // Pindahkan item pertama ke posisi terakhir di slider
        if (listItemDom && firstItem) {
            listItemDom.appendChild(firstItem);
        }
    } else {
        // Ambil item terakhir dari slider
        let lastItem = listItemDom.lastElementChild;

        // Pindahkan item terakhir ke posisi pertama di slider
        if (listItemDom && lastItem) {
            listItemDom.insertBefore(lastItem, listItemDom.firstElementChild);
        }
    }

    // Beri kelas 'next' atau 'prev' untuk memberikan efek animasi
    setTimeout(() => {
        if (carouselDom) {
            carouselDom.classList.add(type === 'next' ? 'next' : 'prev');
        }
    }, 10);
}
