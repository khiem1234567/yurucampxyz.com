/* CÁI NÀY NHÓM CHỊU THUA CHƯA HỌC CHỈ GIÚP CHO TRANG WEB THÊM ƯNG MẮT THUI=)) CÓ HAY KO CŨNG DC KK (Nguồn w3schools/AI*/
/*cái này của hopthongtinchar.css*/
function openInfo() {
  document.getElementById("characterModal").classList.add("active");
}

function closeInfo() {
  document.getElementById("characterModal").classList.remove("active");
}
function openInfo1() {
  document.getElementById("characterModal1").classList.add("active");
}

function closeInfo1() {
  document.getElementById("characterModal1").classList.remove("active");
}
function openInfo2() {
  document.getElementById("characterModal2").classList.add("active");
}

function closeInfo2() {
  document.getElementById("characterModal2").classList.remove("active");
}
function openInfo3() {
  document.getElementById("characterModal3").classList.add("active");
}

function closeInfo3() {
  document.getElementById("characterModal3").classList.remove("active");
}
function openInfo4() {
  document.getElementById("characterModal4").classList.add("active");
}

function closeInfo4() {
  document.getElementById("characterModal4").classList.remove("active");
}
/* của giới thiệu về các phần phim*/
function openInfo6() {
  document.getElementById("characterModal6").style.display = "block";
}

function closeInfo6() {
  document.getElementById("characterModal6").style.display = "none";
}
function openInfo7() {
  document.getElementById("characterModal7").style.display = "block";
}

function closeInfo7() {
  document.getElementById("characterModal7").style.display = "none";
}
function openInfo8() {
  document.getElementById("characterModal8").style.display = "block";
}

function closeInfo8() {
  document.getElementById("characterModal8").style.display = "none";
}
function openInfo9() {
  document.getElementById("characterModal9").style.display = "block";
}

function closeInfo9() {
  document.getElementById("characterModal9").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2
  });

  items.forEach(item => observer.observe(item));
});

