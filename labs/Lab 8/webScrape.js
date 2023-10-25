import fetch from "node-fetch";
import cheerio from "cheerio";

fetch("https://uc.edu").then((response) => {
    return response.text();
}).then((data) => {
    const $ = cheerio.load(data);
    var websiteData = $(".featured-card-text").html();
    websiteData = websiteData.replace("<p>", "");
    websiteData = websiteData.replace("</p>", "");
    console.log(`About UC:
    ${websiteData}`);
});