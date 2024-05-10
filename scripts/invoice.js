
const nama = localStorage.getItem('nama');
const nim = localStorage.getItem('nim');
const fakultas = localStorage.getItem('fakultas');
const jurusan = localStorage.getItem('jurusan');
const sks = localStorage.getItem('sks');
const prodi = localStorage.getItem('prodi');
const biayaPerSks = localStorage.getItem('biayaPerSks');
const dpp = localStorage.getItem('dpp');
const spp = localStorage.getItem('spp');

// Menampilkan nilai-nilai di halaman invoice.html
document.getElementById('nama').textContent = nama;
document.getElementById('nim').textContent = nim;
document.getElementById('fakultas').textContent = fakultas;
document.getElementById('jurusan').textContent = jurusan;
document.getElementById('sks').textContent = sks;
document.getElementById('prodi').textContent = prodi;
document.getElementById('biayaPerSks').textContent = biayaPerSks;
document.getElementById('dpp').textContent = dpp;
document.getElementById('spp').textContent = spp;