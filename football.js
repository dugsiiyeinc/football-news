const toggleButton=document.querySelector('.toggle-button')
const nav=document.querySelector('.navbar')
toggleButton.addEventListener("click", function(){
nav.classList.toggle('active')
})
getfech()
async function getfech(){
    try {
    const response = await fetch('/headline.JSON')
    if(!response.ok){
        throw new Error('data is failed')
    }
    const result = await response.json()
    matchesData = result.lastWeekMatch;
    lastmatches(matchesData[indexLast])
    officialNews(result.oficial)
    footballVideows(result.videoes)
    upcomingDta=result.upcoming
    upcomingMatches(upcomingDta[indexUpcoming])
    } catch (error) {
        console.log('error at fetch news ',error)
    }    
}
let indexLast=0
function lastmatches(lastsMatch){
    const img1=document.querySelector('#img1')
    const text1=document.querySelector('#text1')
    const img2=document.querySelector('#img2')
    const text2=document.querySelector('#text2')
    const title1=document.querySelector('#title1')
    const title2=document.querySelector('#title2')
    img1.src=lastsMatch.src1
    text1.textContent=lastsMatch.text1
    img2.src=lastsMatch.src2
    text2.textContent=lastsMatch.text2
    title1.textContent=lastsMatch.title1
    title2.textContent=lastsMatch.title2
}
document.getElementById('prev').addEventListener('click',()=>{
  setTimeout(() => {
    indexLast--
    if(indexLast<0){
        indexLast = matchesData.length - 1;
    }
    lastmatches(matchesData[indexLast]);
  }, 300);
})
document.getElementById('next').addEventListener('click',()=>{
   setTimeout(() => {
    indexLast++
    if(indexLast>matchesData.length-1){
        indexLast=0
    }
    lastmatches(matchesData[indexLast])
   }, 300);
})

function officialNews(official){
    const officialNs=document.querySelector('.official-news')
    official.forEach(offic => {
        const newsOfficial=document.createElement('div')
        newsOfficial.classList.add('news-official')
        newsOfficial.innerHTML=`<img src="${offic.src}" alt="">
        <h1>${offic.title}</h1>`
        officialNs.appendChild(newsOfficial)
        newsOfficial.addEventListener('click',()=>{
            window.location.href=`detail.html?type=transfer&title=${encodeURIComponent(offic.title)}&src=${encodeURIComponent(offic.src)}&prag=${encodeURIComponent(offic.prag)}`
        })
    });
}
function footballVideows(videos){
    const videosFoot=document.querySelector('.videos')
    videos.forEach(video => {
        const videoesNews=document.createElement('div')
        videoesNews.classList.add('vidoes-news')
        videoesNews.innerHTML=`<img src="${video.src}" alt="">
        <h1>${video.text}</h1>`
        videosFoot.appendChild(videoesNews)
        videoesNews.addEventListener('click', () => {
            window.location.href = `detail.html?type=video&text=${encodeURIComponent(video.text)}&video=${encodeURIComponent(video.video)}`;
        })
    });
}
function upcomingMatches(upcomings){
    const img3=document.querySelector('#img3')
    const img4=document.querySelector('#img4')
    const title3=document.querySelector('#title3')
    const title4=document.querySelector('#title4')
    const time=document.querySelector('#time')
    img3.src=upcomings.src1
    img4.src=upcomings.src2
    title3.textContent=upcomings.title1
    title4.textContent=upcomings.title2
    time.textContent=upcomings.time
}
let indexUpcoming=0
document.getElementById('prev2').addEventListener('click',()=>{
    setTimeout(() => {
        indexUpcoming--
        if(indexUpcoming<0){
            indexUpcoming=upcomingDta.length-1
        }
        upcomingMatches(upcomingDta[indexUpcoming])
    }, 300);
})
document.getElementById('next2').addEventListener('click',()=>{
    setTimeout(() => {
        indexUpcoming++
        if(indexUpcoming>upcomingDta.length-1){
            indexUpcoming=0
        }
        upcomingMatches(upcomingDta[indexUpcoming])
    }, 300);
})
