document.getElementById('searchForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    console.clear();

    const query = document.getElementById('query').value.trim();

    if (!query) {
        console.log("Please enter a search term");
        return;
    }

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (data.length === 0) {
            console.log("No results found");
            return;
        }

        data.forEach(item => {
            const show = item.show;

            console.log("Name:", show.name);
            console.log("Genres:", show.genres.join(", ") || "N/A");
            console.log("Language:", show.language || "N/A");
            console.log("Rating:", show.rating.average || "N/A");
            console.log("----------------------");
        });

    } catch (error) {
        console.error("Error:", error);
    }
});