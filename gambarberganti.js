document.addEventListener("DOMContentLoaded", function() {
    var images = ["img/fftur.png", "img/eventfreefire.png"]; // Daftar gambar
    var links = ["freefiretur.html", "freefiretur.html", ""]; // Daftar tautan
    var currentIndex = 0;
    var imgElement = document.getElementById("myImage");
    var linkElement = document.getElementById("imageLink");

    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      imgElement.src = images[currentIndex];
      linkElement.href = links[currentIndex]; // Mengubah tautan saat gambar berubah
    }

    setInterval(changeImage, 1500); // Mengganti gambar setiap 3 detik (3000 milidetik)
  });