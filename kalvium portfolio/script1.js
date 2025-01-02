// alert("Welcome to our portfolio page")
function navigateTo(page) {
    window.location.href = page;
  }
  
  
  // Team Members Data
  const teamMembers = [
  
        {
            name: "Alok Agrahari",
            github: "https://github.com/alok1047",
            linkedin: "https://www.linkedin.com/in/alok-agrahari-6b6811312/",
            image: "./assests/backk.jpg"
        },
        {
            name: "Aryan Raj",
            github: "https://github.com/aryan-63",
            linkedin: "https://www.linkedin.com/in/aryan-raj-955394323/",
            image: "./assests/backk.jpg"
        },
        {
            name: "Bhargav Jagdish",
            github: "https://github.com/Atofinite5",
            linkedin: "https://www.linkedin.com/in/bhargav-kalambhe-882b4121a/",
            image: "./assests/backk.jpg"
        },
        {
            name: "Divyanshu Peswani",
            github: "https://github.com/divyanshu1218",
            linkedin: "https://www.linkedin.com/in/divyanshu-peswani-297348344",
            image: "./assests/backk.jpg"
        },
        {
            name: "Divyanshu Verma",
            github: "https://github.com/divyanshu-vr",
            linkedin: "https://www.linkedin.com/in/divyanshu-verma-11a188317",
            image: "./assests/backk.jpg"
        },
        {
            name: "Gaurang Mishra",
            github: "https://github.com/gastrotope427",
            linkedin: "https://www.linkedin.com/in/gaurang-mishra-232267315",
            image: "./assests/backk.jpg"
        },
        {
            name: "Glory Jain",
            github: "https://github.com/GLORY-JAIN",
            linkedin: "https://www.linkedin.com/in/glory-jain-46159625b",
            image: "./assests/backk.jpg"
        },
        {
            name: "Hardik Tailor",
            github: "https://github.com/Hardyx07",
            linkedin: "https://www.linkedin.com/in/hardik-tailor",
            image: "./assests/backk.jpg"
        },
        {
            name: "Harsh Singh",
            github: "https://github.com/Quick-Genius",
            linkedin: "https://www.linkedin.com/in/harsh-singh-1b3870253",
            image: "./assests/backk.jpg"
        },
        {
            name: "Harshita Soni",
            github: "https://github.com/harshitasoni15",
            linkedin: "https://www.linkedin.com/in/harshita-soni-13279b31b/",
            image: "./assests/backk.jpg"
        },
        {
            name: "Ishita Gupta",
            github: "https://github.com/IshitaG02",
            linkedin: "https://www.linkedin.com/in/ishita-gupta-8515b5344/",
            image: "./assests/backk.jpg"
        },
        {
            name: "Jayant Kumawat",
            github: "https://github.com/Jayantx07",
            linkedin: "http://www.linkedin.com/in/jayant-kumawat-b745a8344",
            image: "./assests/backk.jpg"
        },
        {
            name: "Jessica Agarwal",
            github: null,
            linkedin: null,
            image: "./assests/backk.jpg"
        },
        {
            name: "Kartik Choudhary",
            github: "https://github.com/KARTIK001-HACKER",
            linkedin: "https://www.linkedin.com/in/kartik-choudhary-2b6806313/",
            image: "./assests/backk.jpg"
        },
        {
            name: "Krish Agarwal",
            github: "https://github.com/Krish-afk-bot-sketch",
            linkedin: "https://www.linkedin.com/in/krish-agarwal-57b845335/",
            image: "./assests/backk.jpg"
        },
        {
            name: "Krish Jain",
            github: "https://github.com/krish21-j",
            linkedin: null,
            image: "./assests/backk.jpg"
        },
        {
            name: "Kushan Singh",
            github: "https://github.com/KushanSingh-Kalvium",
            linkedin: "https://www.linkedin.com/in/kushan-singh-891781322",
            image: "./assests/backk.jpg"
        },
        {
            name: "Namonarayan Mina",
            github: "https://github.com/NamoxKalvium",
            linkedin: null,
            image: "./assests/backk.jpg"
        },
        {
            name: "Rashi Rawal",
            github: "https://github.com/rashirawal22",
            linkedin: "https://www.linkedin.com/in/rashi-rawal/",
            image: "./assests/backk.jpg"
        },
        {
            name: "Rohan Singh",
            github: "https://github.com/RohanSinghJaglan",
            linkedin: "https://www.linkedin.com/in/rohan-singh-jaglan-4175702a9/",
            image: "./assests/backk.jpg"
        },
        {
            name: "Saanvi Garg",
            github: "https://github.com/btw-saanvi",
            linkedin: "https://www.linkedin.com/in/saanvi-garg-a80546329/",
            image: "./assests/backk.jpg"
        },
        {
            name: "Samragyi Sharma",
            github: "https://github.com/sam22kalviu",
            linkedin: "https://www.linkedin.com/in/samragyi-sharma-1b1082315/",
            image: "./assests/backk.jpg"
        },
        {
            name: "Suhani Garg",
            github: null,
            linkedin: null,
            image: "./assests/backk.jpg"
        },
        {
            name: "Tejas Singh",
            github: null,
            linkedin: "https://www.linkedin.com/in/tejas-singh-b22662322/",
            image: "./assests/backk.jpg"
        }

    
  ];
  
  // Populate Team Grid
  function populateTeamGrid() {
    const grid = document.getElementById("team-grid");
    teamMembers.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="card-img">
            <h2 class="card-title">${member.name}</h2>
            <div class="icons">
                <a href="${member.linkedin}" target="_blank" class="icon"><i class="fab fa-linkedin"></i></a>
                <a href="${member.website}" target="_blank" class="icon"><i class="fas fa-globe"></i></a>
                <a href="${member.github}" target="_blank" class="icon"><i class="fab fa-github"></i></a>
            </div>
        `;
      grid.appendChild(card);
    });
  }
  
  // Run on Load
  window.onload = populateTeamGrid;
  