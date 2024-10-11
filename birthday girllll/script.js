
setTimeout(function() {
    document.getElementById('click-message').classList.remove('hidden');
}, 5000);

document.getElementById('hejer-title').addEventListener('click', function() {
    window.location.href = 'another-page.html';
});
