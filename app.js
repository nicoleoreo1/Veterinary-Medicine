document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

document.querySelectorAll('.disease-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.closest('.tab-content');
    panel.querySelectorAll('.disease-btn').forEach(b => b.classList.remove('active'));
    panel.querySelectorAll('.disease-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.disease).classList.add('active');
  });
});
