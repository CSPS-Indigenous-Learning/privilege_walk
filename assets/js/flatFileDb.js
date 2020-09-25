//import { decodeArticleSummaries } from "dbDecode";

const getArticleSummaries = async () => {
    try {
    const db = await import('/tmp/sessions.json');
    //return decodeArticleSummaries(db.default);
    return db.default;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getArticleSummaries };
