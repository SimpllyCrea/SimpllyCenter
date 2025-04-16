document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const descriptionElement = document.getElementById('description');

    let isContainer1 = true;

    toggleButton.addEventListener('click', function() {
        if (isContainer1) {
            descriptionElement.innerText = "Berikut ini adalah beberapa contoh sementara hasil editan kami, ini adalah beberapa contoh editan exe/gaming, perlu diketahui bahwa kami juga dapat mengedit jenis video lainnya";
            toggleButton.innerText = "Default";
        } else {
            descriptionElement.innerText = "The following are some temporary examples of our edited results, these are some examples of exe/gaming edits, please note that we can also edit other types of videos";
            toggleButton.innerText = "Translate Indonesia";
        }
        isContainer1 = !isContainer1;
    });
});