document.addEventListener("DOMContentLoaded", function() {
    const fakultasSelect = document.getElementById('fakultas');
    const jurusanSelect = document.getElementById('jurusan');
    const jurusanContainer = document.getElementById('jurusanContainer');

    // Daftar jurusan untuk setiap fakultas
    const jurusanOptions = {
        'TEKNIK': ['Teknik Informatika', 'Teknik Sipil', 'Teknik Elektro'],
        'HUKUM': ['Perdata', 'Pidana', 'Konstitusi'],
        'EKONOMI': ['Manajemen', 'Akuntansi', 'Ekonomi Pembangunan'],
        'SASTRA': ['Sastra Indonesia', 'Sastra Inggris', 'Sastra Jepang'],
        'ILMU SOSIAL': ['Ilmu Administrasi Negara', 'Ilmu Komunikasi', 'Sosiologi']
    };

    // Ketika pilihan fakultas berubah
    fakultasSelect.addEventListener('change', function() {
        const selectedFakultas = fakultasSelect.value;
        const jurusanList = jurusanOptions[selectedFakultas];
        
        // Kosongkan opsi jurusan sebelumnya
        jurusanSelect.innerHTML = '';

        // Tambahkan opsi baru berdasarkan fakultas yang dipilih
        if (jurusanList) {
            jurusanList.forEach(function(jurusan) {
                const option = document.createElement('option');
                option.textContent = jurusan;
                option.value = jurusan;
                jurusanSelect.appendChild(option);
            });
            
            // Tampilkan container jurusan jika ada opsi
            jurusanContainer.style.display = 'block';
        } else {
            // Sembunyikan container jurusan jika tidak ada opsi
            jurusanContainer.style.display = 'none';
        }
    });
});
function hitungTotalBiaya() {
    // Ambil nilai dari input
    const biayaPerSks = parseFloat(document.getElementById('biayaPerSks').value) || 0;
    const dpp = parseFloat(document.getElementById('dpp').value) ;
    const spp = parseFloat(document.getElementById('spp').value) ;

    // Hitung total biaya per semester
    const totalBiayaPersemester = biayaPerSks + dpp + spp;

    // Tampilkan hasil di input total biaya per semester
    document.getElementById('totalBiayaPersemester').value = totalBiayaPersemester;
}

function saveFormData() {
    // Mengambil nilai dari input
    var nama = document.getElementById('nama').value;
    var nim = document.getElementById('nim').value;
    var fakultas = document.getElementById('fakultas').value;
    var jurusan = document.getElementById('jurusan').value;
    var sks = document.getElementById('sks').value;
    var prodi = document.getElementById('prodi').value;
    var biayaPerSks = document.getElementById('biayaPerSks').value;
    var dpp = document.getElementById('dpp').value;
    var spp = document.getElementById('spp').value;
    var totalBiayaPersemester = document.getElementById('totalBiayaPersemester').value;

    // Menyimpan nilai ke local storage
    localStorage.setItem('nama', nama);
    localStorage.setItem('nim', nim);
    localStorage.setItem('fakultas', fakultas);
    localStorage.setItem('jurusan', jurusan);
    localStorage.setItem('sks', sks);
    localStorage.setItem('prodi', prodi);
    localStorage.setItem('biayaPerSks', biayaPerSks);
    localStorage.setItem('dpp', dpp);
    localStorage.setItem('spp', spp);
    localStorage.setItem('totalBiayaPersemester', totalBiayaPersemester);

    // Mengarahkan pengguna ke halaman invoice.html
    window.location.href = 'invoice.html';
}
