const footballimg = [
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGP_WUgl5PY-3az0ykM1BSNkMW4C1u8Ss7A&s',
        title: 'Exciting Match Highlights',
        prag: 'Catch the best moments from last night’s thrilling match.',
    },
    {
        src: 'https://images.unsplash.com/photo-1605002713581-123e77bcf83d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Transfer News',
        prag: 'Stay updated on the latest player transfers and signings.',
    },
    {
        src: 'https://assets.goal.com/images/v3/blt0af38e2adc0b803e/Players%20set%20for%20summer%20transfers.jpg?auto=webp&format=pjpg&width=1080&quality=60',
        title: 'Top Players of the Season',
        prag: 'Discover the standout performers in this football season.',
    },
    {
        src: 'https://editorial.uefa.com/resources/027d-170bbd0694d5-312bc867e551-1000/bestfinals.jpeg',
        title: 'Upcoming Fixtures',
        prag: 'Don’t miss any action! Check out the upcoming matches.',
    },
];
function changeProfile(){
    const img=document.querySelector('.hero-image')
    const text=document.querySelector('.title')
    const prag=document.querySelector('.subtitle')
    const random=Math.floor(Math.random()*footballimg.length)
    const randomImage = footballimg[random];
    img.src=randomImage.src
    text.textContent=randomImage.title
    prag.textContent=randomImage.prag
    }
    changeProfile()

const football = [
    {
      question: "What is Football News?",
      answer:
        "Football News is your go-to platform for the latest updates, match reports, transfer news, and insights from the world of football.",
    },
    {
      question: "How can I stay updated?",
      answer:
        "Subscribe to our newsletter or follow us on social media for real-time updates on scores, transfers, and breaking news.",
    },
    {
      question: "Can I submit a question?",
      answer:
        "Absolutely! Feel free to reach out through our contact form, and we’ll do our best to address your inquiries.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can contact our support team via the 'Contact Us' link in the footer. We're here to assist you!",
    },
  ];
const footballque=document.querySelector('.football-que')
football.forEach(foot => {
    const accordionItem=document.createElement('div')
    accordionItem.classList.add('accordion-item')
    accordionItem.innerHTML=`<h3 class="accordion-quention">${foot.question}</h3>
   <p class="accordion-content" style="display: none;">${foot.answer}</p>
    `
    const  accordionontent=accordionItem.querySelector('.accordion-quention')
    accordionontent.addEventListener('click',()=>{
        const accordionsContent=document.querySelectorAll('.accordion-content')
        accordionsContent.forEach(accordion=> {
            accordion.style.display='none'
        });
        accordionItem.querySelector('.accordion-content').style.display="block"
    })
    footballque.appendChild(accordionItem)
  })
  
  