export const displayMoreNewsData=(json)=>{

    const myNewsJSONData = json.articles;
    const moreNewsHeaders = myNewsJSONData.map(article=>article.title);
    const moreNewsSummary = myNewsJSONData.map(article=>article.summary);
    const moreNewsAuthor = myNewsJSONData.map(article=>article.authors);
    const moreNewsDate = myNewsJSONData.map(article=>article.published_date);

    const displayHeader01= moreNewsHeaders[0];
    const displaySummary01 = moreNewsSummary[0];
    const articleAuthor01 = moreNewsAuthor[0];
    const articleDate01 = moreNewsDate[0];
    document.querySelector("#more-news-header01").innerHTML= displayHeader01;
    document.querySelector("#more-news-summary01").innerHTML= displaySummary01;
    document.querySelector("#more-author01").innerHTML= `Article Author: ${articleAuthor01}`;
    document.querySelector("#more-date01").innerHTML= `Date published: ${articleDate01}`;

    const displayHeader02= moreNewsHeaders[4];
    const displaySummary02 = moreNewsSummary[4];
    const articleAuthor02 = moreNewsAuthor[4];
    const articleDate02 = moreNewsDate[4];
    document.querySelector("#more-news-header02").innerHTML= displayHeader02;
    document.querySelector("#more-news-summary02").innerHTML= displaySummary02;
    document.querySelector("#more-author02").innerHTML= `Article Author: ${articleAuthor02}`;
    document.querySelector("#more-date02").innerHTML= `Date published: ${articleDate02}`;

    const displayHeader03= moreNewsHeaders[3];
    const displaySummary03 = moreNewsSummary[3];
    const articleAuthor03 = moreNewsAuthor[3];
    const articleDate03 = moreNewsDate[3];
    document.querySelector("#more-news-header03").innerHTML= displayHeader03;
    document.querySelector("#more-news-summary03").innerHTML= displaySummary03;
    document.querySelector("#more-author03").innerHTML= `Article Author: ${articleAuthor03}`;
    document.querySelector("#more-date03").innerHTML= `Date published: ${articleDate03}`;
};