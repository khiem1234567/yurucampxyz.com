<script>
  function showChar(id) {
    // Ẩn toàn bộ info
    document.querySelectorAll('.char').forEach(c => {
      c.classList.remove('show');
    });

    // Active task
    document.querySelectorAll('.task').forEach(t => {
      t.classList.remove('active');
    });

    // Hiện nhân vật được chọn
    document.getElementById('char' + id).classList.add('show');
    document.querySelectorAll('.task')[id - 1].classList.add('active');
  }
</script>

