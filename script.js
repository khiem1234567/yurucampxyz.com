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




/*làm màu chứ chưa học chỉ để làm đẹp web kk*/
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      searchBySection();
    }
  });

  function clearHighlight() {
    document.querySelectorAll(".highlight-heading").forEach(h => {
      h.classList.remove("highlight-heading");
    });
  }

  function getSectionText(heading) {
    let text = heading.textContent.toLowerCase();
    let el = heading.nextElementSibling;

    while (el && !/^H[1-3]$/.test(el.tagName)) {
      text += " " + el.textContent.toLowerCase();
      el = el.nextElementSibling;
    }

    return text;
  }

  function searchBySection() {
    const keyword = input.value.trim().toLowerCase();
    if (!keyword) return;

    clearHighlight();

    const headings = document.querySelectorAll("h1, h2, h3");
    let firstMatch = null;

    headings.forEach(h => {
      const sectionText = getSectionText(h);
      if (sectionText.includes(keyword)) {
        h.classList.add("highlight-heading");
        if (!firstMatch) firstMatch = h;
      }
    });

    if (firstMatch) {
      firstMatch.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      console.log("❌ Không tìm thấy section phù hợp");
    }
  }
});
/* nút câu hỏi*/
function toggleQuestion() {
    const body = document.querySelector('.question-body');
    body.style.display = body.style.display === 'block' ? 'none' : 'block';
}

