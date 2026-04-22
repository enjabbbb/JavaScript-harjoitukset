document.getElementById('searchForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const query = document.getElementById('query').value.trim();
    const resultsDiv = document.getElementById('results');

    resultsDiv.innerHTML = '';

    if (!query) return;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        data.forEach(item => {
            const show = item.show;

            const showInfo = document.createElement("article");

            const name = document.createElement("h2");
            name.textContent = show.name;

            const link = document.createElement("a");
            link.href = show.url;
            link.textContent = "Show Details";
            link.target = "_blank";

            const image = document.createElement("img");
            image.src = show.image?.medium || '';
            image.alt = show.name;

            const summary = document.createElement("div");
            summary.innerHTML = show.summary || "No summary available";

            showInfo.appendChild(name);
            showInfo.appendChild(link);
            showInfo.appendChild(image);
            showInfo.appendChild(summary);

            resultsDiv.appendChild(showInfo);
        });

    } catch (error) {
        console.error("Error:", error);
    }
});