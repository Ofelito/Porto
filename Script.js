// Get the modal
var modal = document.getElementById("myModal");

var modal1 = document.getElementById("myModal1");

var modal2 = document.getElementById("myModal2");

var modal3 = document.getElementById("myModal3");

var modal4 = document.getElementById("myModal4");

var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

var btn1 = document.getElementById("openModal1");

var btn2 = document.getElementById("openModal2");

var btn3 = document.getElementById("openModal3");

var btn4 = document.getElementById("openModal4");

var btn5 = document.getElementById("openModal5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var span1 = document.getElementsByClassName("close1")[0];

var span2 = document.getElementsByClassName("close2")[0];

var span3 = document.getElementsByClassName("close3")[0];

var span4 = document.getElementsByClassName("close4")[0];

var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}

btn4.onclick = function() {
  modal4.style.display = "block";
}

btn5.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 1
document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const images = document.querySelectorAll('.project_modal .modal__images img');
  const intervalTime = 10000;

  function showImage(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    images.forEach((img, i) => {
        img.classList.toggle('active', i === currentIndex);
    });
    console.log(`Current Index: ${currentIndex}`); // Tambahkan log untuk memeriksa currentIndex

    // Tambahkan delay sebelum mengubah opacity untuk memberi waktu CSS transisi bekerja
    setTimeout(() => {
        images.forEach((img, i) => {
            img.style.opacity = i === currentIndex ? 1 : 0;
        });
    }, 50); // Sesuaikan delay sesuai kebutuhan
}


  function changeImage(step) {
      showImage(currentIndex + step);
      console.log(`Step: ${step}`); // Tambahkan log untuk memeriksa step
  }

  // Inisialisasi gambar pertama sebagai yang terlihat
  showImage(currentIndex);

  // Tambahkan event listener untuk tombol next dan prev
  document.querySelector('.next').addEventListener('click', () => changeImage(1));
  document.querySelector('.prev').addEventListener('click', () => changeImage(-1));
  setInterval(() => {
        changeImage(1); // Ganti gambar ke gambar berikutnya
    }, intervalTime);
});


// 2
document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const images = document.querySelectorAll('.project_modal .modal__images1 img');
  const intervalTime = 10000;

  function showImage(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    images.forEach((img, i) => {
        img.classList.toggle('active', i === currentIndex);
    });
    console.log(`Current Index: ${currentIndex}`); // Tambahkan log untuk memeriksa currentIndex

    // Tambahkan delay sebelum mengubah opacity untuk memberi waktu CSS transisi bekerja
    setTimeout(() => {
        images.forEach((img, i) => {
            img.style.opacity = i === currentIndex ? 1 : 0;
        });
    }, 50); // Sesuaikan delay sesuai kebutuhan
}


  function changeImage(step) {
      showImage(currentIndex + step);
      console.log(`Step: ${step}`); // Tambahkan log untuk memeriksa step
  }

  // Inisialisasi gambar pertama sebagai yang terlihat
  showImage(currentIndex);

  // Tambahkan event listener untuk tombol next dan prev
  document.querySelector('.next1').addEventListener('click', () => changeImage(1));
  document.querySelector('.prev1').addEventListener('click', () => changeImage(-1));
  setInterval(() => {
        changeImage(1); 
    }, intervalTime);
});


// 3
document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const images = document.querySelectorAll('.project_modal .modal__images2 img');
  const intervalTime = 10000;

  function showImage(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    images.forEach((img, i) => {
        img.classList.toggle('active', i === currentIndex);
    });
    console.log(`Current Index: ${currentIndex}`); // Tambahkan log untuk memeriksa currentIndex

    // Tambahkan delay sebelum mengubah opacity untuk memberi waktu CSS transisi bekerja
    setTimeout(() => {
        images.forEach((img, i) => {
            img.style.opacity = i === currentIndex ? 1 : 0;
        });
    }, 50); // Sesuaikan delay sesuai kebutuhan
}


  function changeImage(step) {
      showImage(currentIndex + step);
      console.log(`Step: ${step}`); // Tambahkan log untuk memeriksa step
  }

  // Inisialisasi gambar pertama sebagai yang terlihat
  showImage(currentIndex);

  // Tambahkan event listener untuk tombol next dan prev
  document.querySelector('.next2').addEventListener('click', () => changeImage(1));
  document.querySelector('.prev2').addEventListener('click', () => changeImage(-1));
  setInterval(() => {
        changeImage(1); // Ganti gambar ke gambar berikutnya
    }, intervalTime);
});

