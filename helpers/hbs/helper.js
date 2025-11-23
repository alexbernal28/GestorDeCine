export function getGenreName(genresList, genreId) {
    if (!genresList || !genreId) return "Unknown";
    const genre = genresList.find(g => Number(g.id) === Number(genreId));
    return genre ? genre.name : "Unknown";
}

export function eq(a, b) {
    return Number(a) === Number(b);
}