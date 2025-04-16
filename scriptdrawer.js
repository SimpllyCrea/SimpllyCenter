document.getElementById('openBtn').addEventListener('click', function() {
    document.getElementById('drawer').style.bottom = '0';
    this.style.display = 'none';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('drawer').style.bottom = '-300px';
    document.getElementById('openBtn').style.display = 'block';
});

const links = document.querySelectorAll('.drawer a');
links.forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('drawer').style.bottom = '-300px';
        document.getElementById('openBtn').style.display = 'block';
    });
});