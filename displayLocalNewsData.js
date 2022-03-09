export const displayLocalNewsData=(json)=>{

    const myNewsJSONData = json.articles;
    const localNewsHeaders = myNewsJSONData.map(article=>article.title);
    const localNewsSummary = myNewsJSONData.map(article=>article.summary);
    const localNewsAuthor = myNewsJSONData.map(article=>article.authors);
    const localNewsDate = myNewsJSONData.map(article=>article.published_date);

    const displayHeader01= localNewsHeaders[0];
    const displaySummary01 = localNewsSummary[0];
    const articleAuthor01 = localNewsAuthor[0];
    const articleDate01 = localNewsDate[0];
    document.querySelector("#local-news-header01").innerHTML= displayHeader01;
    document.querySelector("#local-news-summary01").innerHTML= displaySummary01;
    document.querySelector("#local-author01").innerHTML= `Article Author: ${articleAuthor01}`;
    document.querySelector("#local-date01").innerHTML= `Date published: ${articleDate01}`;

    const displayHeader02= localNewsHeaders[4];
    const displaySummary02 = localNewsSummary[4];
    const articleAuthor02 = localNewsAuthor[4];
    const articleDate02 = localNewsDate[4];
    document.querySelector("#local-news-header02").innerHTML= displayHeader02;
    document.querySelector("#local-news-summary02").innerHTML= displaySummary02;
    document.querySelector("#local-author02").innerHTML= `Article Author: ${articleAuthor02}`;
    document.querySelector("#local-date02").innerHTML= `Date published: ${articleDate02}`;

    const displayHeader03= localNewsHeaders[3];
    const displaySummary03 = localNewsSummary[3];
    const articleAuthor03 = localNewsAuthor[3];
    const articleDate03 = localNewsDate[3];
    document.querySelector("#local-news-header03").innerHTML= displayHeader03;
    document.querySelector("#local-news-summary03").innerHTML= displaySummary03;
    document.querySelector("#local-author03").innerHTML= `Article Author: ${articleAuthor03}`;
    document.querySelector("#local-date03").innerHTML= `Date published: ${articleDate03}`;

};