const decodeArticleSummaries = db => {
    return db.map(article => ({
        description: article.d,
        // etc
    }));
}