function navigate(page) {
  // Menggunakan AJAX untuk memuat konten halaman
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", page + ".html", true);
  xhttp.send();
}
// Fungsi untuk menentukan tautan navigasi aktif berdasarkan posisi gulir
  function determineActiveLink() {
    var sections = document.querySelectorAll('body > div');
    var scrollPosition = window.scrollY;

    sections.forEach(function(section) {
      if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight - 100) {
        var sectionId = section.id;
        var correspondingLink = document.querySelector('a[href="#' + sectionId + '"]');
        if (correspondingLink) {
          // Hapus kelas active dari semua tautan
          document.querySelectorAll('.nav-link').forEach(function(link) {
            link.classList.remove('active');
          });
          // Tambahkan kelas active ke tautan yang sesuai
          correspondingLink.classList.add('active');
        }
      }
    });
  }

  // Panggil fungsi untuk menentukan tautan navigasi aktif saat halaman dimuat
  window.addEventListener('load', determineActiveLink);

  // Panggil fungsi untuk menentukan tautan navigasi aktif saat menggulir
  window.addEventListener('scroll', determineActiveLink);