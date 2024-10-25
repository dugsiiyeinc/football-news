// header
const toggleButton=document.querySelector('.toggle-button')
const nav=document.querySelector('.navbar')
toggleButton.addEventListener("click", function(){
nav.classList.toggle('active')
})
const lastNews=[
    {title:"The MLS forward who is putting up Messi and Cristiano numbers this season",src:'https://img.allfootballapp.com/www/M00/58/90/720x-/-/-/CgAGVWcXtYqAATrxAABQ4Vqbwio514.jpg.webp',prag:'Juan Camilo Hernández is having one of the best seasons of his career. The Colombian striker has been a key player for Columbus Crew this year, with his goals helping the team emerge as a top contender in U.S. soccer. He was instrumental in their Leagues Cup championship victory, playing a pivotal role in the final against Los Angeles FC.'},
    {title:' Dominik Szoboszlai has a point to prove as Liverpool star makes special return',
        src:'https://img.allfootballapp.com/www/M00/57/84/720x-/-/-/CgAGVmcHC7CAewxgAABavKUDjrc579.jpg.webp',prag:'The Hungary captain arrived on Merseyside just over 12 months ago in a deal worth £60m as one of Jurgen Klopps final signings. There was excitement about his early performances and the No.8 on his back brought over-eager comparisons with the once wearer of the number in Steven Gerrard'},
    {title:'Randal Kolo Muani back in PSG squad ahead of Champions League clash',src:'https://img.allfootballapp.com/www/M00/50/63/720x-/-/-/CgAGVWZhmNiAYkjSAACsulrs1Lk558.jpg.webp',prag:'The France international had been left out of PSG’s squad for last weekend’s victory at home against RC Strasbourg Alsace (4-2) after he picked up an ankle injury during a training session on Friday the 18th of October.'},
    {title:'Flick excited by Bayern reunion but feels at home at Barcelona',src:'https://img.allfootballapp.com/www/M00/58/90/CgAGVmcXsVSAYVv3AAJ1GR-T_vg462.jpg.webp',prag:'https://img.allfootballapp.com/www/M00/58/90/CgAGVmcXsVSAYVv3AAJ1GR-T_vg462.jpg.webp'},
    {title:'Returning De Bruyne will not be rushed back, says Guardiola',src:'https://img.allfootballapp.com/www/M00/54/C0/720x-/-/-/CgAGVWbxmmWAbKp4ADJRAvt17q8134.jpg.webp',prag:'Manchester Citys Kevin de Bruyne will be eased back into action after being sidelined by a muscle injury, with Pep Guardiola describing him as a doubt for Wednesdays Champions League clash with Sparta Prague.'},
    {title:'Simeone: Courtois and myself have different views, but I’m grateful to him',src:'https://img.allfootballapp.com/www/M00/58/8F/720x-/-/-/CgAGVWcXqkuANrKRAAJsXH0FHMk597.jpg.webp',prag:'Atletico Madrid manager Diego Simeone has not backed away from his comments in the aftermath of the Madrid derby, following Thibaut Courtois’ response. Simeone said that while nothing justified the objects thrown at the Real Madrid goalkeeper, Courtois could have been more intelligent to avoid provoking the fans.'},
    {title:'Jose Maria Gimenez against La Liga plans to host Barcelona-Atletico in USA',src:'https://img.allfootballapp.com/www/M00/58/8F/720x-/-/-/CgAGVWcXpseAC0oDAAHtPVSS06A260.jpg.webp',prag:'Atletico Madrid defender Jose Maria Gimenez has criticised plans to hold their December clash with Barcelona in the USA. Los Rojiblancos are scheduled to face Barcelona on the 21st or 22nd of December at Montjuic, but the Uruguayan feels they should keep La Liga matches in Spain.'},
    {title:'Arsenal make appeal decision after red card ruled Saliba out of Liverpool clash',src:'https://img.allfootballapp.com/www/M00/58/8F/720x-/-/-/CgAGVmcXpseAKsbdAAEv4vhzkzo017.jpg.webp',prag:'Saliba, 23, was sent off for a last-man foul on Bournemouth striker Evanilson as he tried to cover a wayward Leandro Trossard back pass.The centre-back was placed just beyond the halfway line when he brought down the Cherries ace in the middle of the pitch after 30 minutes'},
    {title:'Kane leads Bayern squad list for UCL match against Barca, Musiala & Palhinha in',src:'https://img.allfootballapp.com/www/M00/58/8F/720x-/-/-/CgAGVmcXoueAI0ByAAG3W5wadK8026.jpg.webp',prag:'Adam Aznou called up for his first Champions League match. Arijon Ibrahimović called up for his first official match of the season'},
    {title:'Barcelona-Atletico Madrid USA fixture edges closer as club gives approval',src:'https://img.allfootballapp.com/www/M00/49/A1/720x-/-/-/CgAGVWVtBaaAeqnmAAOpmoU2HtI823.jpg.webp',prag:'This week, reports have emerged that La Liga are taking a step forward in their bid to host a match in the United States. The idea is for Barcelona’s fixture against Atletico Madrid, which is schedule to be held on the 21st of December, to be moved from Catalonia to the US.'}
]
function lastNew(lastNews){
const lastNewsCont=document.querySelector('.last-news1')
lastNews.forEach(last => {
    const newsLast=document.createElement('div')
    newsLast.classList.add('newslast')
    newsLast.innerHTML=`<img src="${last.src}" alt="">
        <h1>${last.title}</h1>`
        lastNewsCont.appendChild(newsLast)
        newsLast.addEventListener('click', () => {
            window.location.href = `detail.html?type=lastNews&title=${encodeURIComponent(last.title)}&src=${encodeURIComponent(last.src)}&prag=${encodeURIComponent(last.prag)}`;
        }); 
});
}
lastNew(lastNews)
async function getFetch(){
    try {
        const response=await fetch('headline.json')
        if(!response.ok){
            throw new Error('data is failed')
        }
        const data=await response.json()
        // console.log(data)
        transfer(data.transfer)
        trending(data.trending)
    } catch (error) {
        
    }
}
getFetch()
function transfer(transfers){
    const transNewsCont=document.querySelector('.trean-news')
    transfers.forEach(transfer => {
        const transLast=document.createElement('div')
        transLast.classList.add('transLast')
        transLast.innerHTML=`<img src="${transfer.src}" alt="">
            <h1>${transfer.title}</h1>`
            transNewsCont.appendChild(transLast)
        transLast.addEventListener('click', () => {
            transLast.addEventListener('click', () => {
                window.location.href = `detail.html?type=transfer&title=${encodeURIComponent(transfer.title)}&src=${encodeURIComponent(transfer.src)}&prag=${encodeURIComponent(transfer.prag)}`;
            });            
    })
    });
}
function trending(trendings){
    const trendNewsCont=document.querySelector('.trin-news')
    trendings.forEach(trending => {
        const trendlast=document.createElement('div')
        trendlast.classList.add('trendlast')
        trendlast.innerHTML=`<img src="${trending.src}" alt="">
            <h1>${trending.title}</h1>`
         trendNewsCont.appendChild(trendlast)
         trendlast.addEventListener('click', () => {
            trendlast.addEventListener('click', () => {
                window.location.href = `detail.html?type=trending&title=${encodeURIComponent(trending.title)}&src=${encodeURIComponent(trending.src)}&prag=${encodeURIComponent(trending.prag)}`;
            });            
            })
    });
}