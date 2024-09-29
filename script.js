// Event listener untuk tombol tampilkan pesan
document.getElementById('myButton').addEventListener('click', function() {
    var message = document.getElementById('message');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
    } else {
        message.classList.add('hidden');
    }
});

// Event listener untuk dropdown menu
document.getElementById('menuSelect').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    var selectedText = selectedOption.text;
    var selectedValue = selectedOption.value;
    var selectedLink = selectedOption.getAttribute('data-link'); // Mengambil link dari atribut data-link

    document.getElementById('selectedMenu').textContent = 'Anda memilih: ' + selectedText + ' (' + selectedValue + ')';

    // Tampilkan tombol "Buka Link"
    var openLinkButton = document.getElementById('openLinkButton');
    openLinkButton.classList.remove('hidden');
    openLinkButton.onclick = function() {
        window.open(selectedLink, '_blank'); // Membuka link di tab baru
    };
});