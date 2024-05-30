function loadMarkdown(file) {
    fetch(file)
        .then(response => response.text())
        .then(text => {
            const markmapContainer = document.getElementById('markmap-container');
            markmapContainer.innerHTML = ''; // Clear previous content
            const svg = document.createElement('svg');
            markmapContainer.appendChild(svg);
            const mm = markmap.Markmap.create(svg);
            mm.setData(markmap.transform.transform(text));
            mm.fit();
        });
}

// Load the first chart by default
window.onload = function() {
    loadMarkdown('markdown/chart1.md');
};
