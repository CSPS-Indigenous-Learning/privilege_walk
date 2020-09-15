const fs = require("fs");
const frontmatterExtractor = require("./frontmatterExtractor");
const encodeArticleSummaries = require("./encodeArticleSummaries");

module.exports = async () => {
    // Load article files
    const articles = await fs.readdir("/articles", (err, filePaths) => {
        // Create the database by reading each file
        const db = filePaths.map(async path => {
            const file = await fs.readFile(path);
            // Extract the meta data
            return frontmatterExtractor(file);
        });
        // Encode the data
        const encoded = encodeArticleSummaries(db);
        // Write the database object to a JSON file
        await fs.writeFile(
            "/static/article-summaries.json", 
            JSON.stringify(encoded)
        );
    });
}