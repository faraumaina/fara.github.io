<script>
  // Fungsi untuk menampilkan deskripsi berdasarkan ID yang dipilih
  function showDescription(id) {
    // Sembunyikan semua penjelasan
    document.querySelectorAll('.description').forEach(desc => {
      desc.style.display = 'none';
    });

    // Tampilkan penjelasan yang dipilih
    const selectedDescription = document.getElementById(id);
    if (selectedDescription) {
      selectedDescription.style.display = 'block';
    }
  }

  // Pastikan kode ini dijalankan setelah konten HTML selesai dimuat
  document.addEventListener("DOMContentLoaded", () => {
    // Data progress
    const progressData = [
      { modul: "Pemrograman", progress: 75 },
      { modul: "Desain Grafis", progress: 50 },
      { modul: "Matematika", progress: 30 },
    ];

    // Update progress bar sesuai dengan data
    progressData.forEach((item, index) => {
      const progressBar = document.querySelectorAll(".progress-bar")[index];
      if (progressBar) {
        progressBar.style.width = `${item.progress}%`;
        progressBar.setAttribute("aria-valuenow", item.progress);
        progressBar.textContent = `${item.progress}%`;
      }
    });
  });

  // Menangani form submit untuk quiz
  document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah pengiriman formulir secara default

    // Menampilkan pesan notifikasi
    const alertMessage = document.getElementById('alertMessage');
    if (alertMessage) {
      alertMessage.classList.remove('d-none');

      // Menyembunyikan pesan setelah beberapa detik (opsional)
      setTimeout(() => {
        alertMessage.classList.add('d-none');
      }, 3000);
    }
  });
</script>
