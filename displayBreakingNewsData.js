export const displayBreakingNewsData=(json)=>{

    const myNewsJSONData = json.articles;
    const newsHeaders = myNewsJSONData.map(article=>article.title);
    const newsSummary = myNewsJSONData.map(article=>article.summary);
    const newsAuthor = myNewsJSONData.map(article=>article.authors);
    const newsDate = myNewsJSONData.map(article=>article.published_date);

    const displayHeader01= newsHeaders[1];
    const displaySummary01 = newsSummary[1];
    const articleAuthor01 = newsAuthor[1];
    const articleDate01 = newsDate[1];
    document.querySelector("#breaking-news-header01").innerHTML= displayHeader01;
    document.querySelector("#breaking-news-summary01").innerHTML= displaySummary01;
    document.querySelector("#breaking-author01").innerHTML= `Article Author: ${articleAuthor01}`;
    document.querySelector("#breaking-date01").innerHTML= `Date published: ${articleDate01}`;
  
    const displayHeader02= newsHeaders[0];
    const displaySummary02 = newsSummary[0];
    const articleAuthor02 = newsAuthor[0];
    const articleDate02 = newsDate[0];
    document.querySelector("#breaking-news-header02").innerHTML= displayHeader02;
    document.querySelector("#breaking-news-summary02").innerHTML= displaySummary02;
    document.querySelector("#breaking-author02").innerHTML= `Article Author: ${articleAuthor02}`;
    document.querySelector("#breaking-date02").innerHTML= `Date published: ${articleDate02}`;

    const displayHeader03= newsHeaders[2];
    const displaySummary03 = newsSummary[2];
    const articleAuthor03 = newsAuthor[2];
    const articleDate03 = newsDate[2];
    document.querySelector("#breaking-news-header03").innerHTML= displayHeader03;
    document.querySelector("#breaking-news-summary03").innerHTML= displaySummary03;
    document.querySelector("#breaking-author03").innerHTML= `Article Author: ${articleAuthor03}`;
    document.querySelector("#breaking-date03").innerHTML= `Date published: ${articleDate03}`;
};