function navigateTo(page) {
    window.location.href = page;
  }
  const teamMembers = [
    {
        name: "Anuj Goyal",
        github: "https://github.com/anujgoyalengg",
        linkedin: "https://www.linkedin.com/in/anuj-goyal-13835b2b9/",
        image:"./assests/anuj.jpg",
        
    },
    {
        name: "Aditi Singh",
        github: "https://github.com/shakti-power",
        linkedin: "https://www.linkedin.com/in/aditi-singh-19978730b/",
        image:"./assests/Aditi.jpg",
    },
    {
        name: "Aditya Rane",
        github: "https://github.com/Haschwalt29",
        linkedin: "https://www.linkedin.com/in/aditya-rane-9b82822aa",
        image:"./assests/aditya.jpg",
    },
    {
        name: "Aflah Haami",
        github: null,
        linkedin: null,
        image: "./assests/aflah.jpg"
    },
    {
        name: "Ankit Manghnani",
        github: "https://github.com/manghnaniankit",
        linkedin: "https://in.linkedin.com/in/ankit-manghnani-8b0b522a4",
        image: "./assests/Ankit.jpg",
    },
   
    // {
    //     name: "Arnav Lihantu",
    //     github: null,
    //     linkedin: null
    // },
    {
        name: "Divya Dadhich",
        github: "https://github.com/Divya15042007",
        linkedin: "https://www.linkedin.com/in/divya-dadhich-6b6780344",
        image:"./assests/divya.jpg",
    },
    {
        name: "Hasan Wajie",
        github: "https://github.com/hasan-kalvium",
        linkedin: "https://www.linkedin.com/in/hasan-ahmed-648435319/",
        image:"./assests/Hasanf.png",
  
    },
    {
        name: "Kartik Bhardwaj",
        github: "https://github.com/kartikbhardwaj1111",
        linkedin: "https://www.linkedin.com/in/kartik-bhardwaj-0b82a8316/",
        image:"./assests/Kartikb.png",
    },
    {
        name: "Nidhi Namdev",
        github: "https://github.com/nidhi041",
        linkedin: "https://www.linkedin.com/in/nidhi-namdev-933651322/",
        image:"./assests/nidhif1.png",
    },
    {
        name: "Palchhi Jain",
        github: "https://github.com/Palchhi8",
        linkedin: "https://www.linkedin.com/in/palchhi-jain-3293a3344/",
        image:"./assests/Palchhi.jpg",
    },
    // {
    //     name: "Parth Sarawgi",
    //     github: null,
    //     linkedin: null
    // },
    {
        name: "Parv Jhanwar",
        github: "https://github.com/prvcds",
        linkedin: "http://www.linkedin.com/in/parv-jhanwar-544240326",
        image:"./assests/parv.png",
    },
    {
        name: "Prithvi Singh",
        github: "https://github.com/amberfarmer399",
        linkedin: "https://www.linkedin.com/in/prithvi-singh-b9056131b/",
        image:"./assests/prithvi.jpeg",
    },
    {
        name: "Priyanshi Chittora",
        github: "https://github.com/PRIYANSHI-eng",
        linkedin: null,
        image:"./assests/priyanshi.jpg",
    },
    {
        name: "Saksham Gupta",
        github: "https://github.com/sakxhamm",
        linkedin: "https://www.linkedin.com/in/saksham-gupta-b450a4310/",
        image:"./assests/saksham.jpg",
    },
    {
        name: "Sameer Shrotriya",
        github: "https://github.com/Sameer-s-coder",
        linkedin: "https://www.linkedin.com/in/sameer-shrotriya-82a113313/",
        image:"./assests/sameer.jpg",
    },
    {
        name: "Satvik Jain",
        github: "https://github.com/Satvik182",
        linkedin: "https://www.linkedin.com/in/satvik-jain-23b112321/",
        image:"./assests/satvik.jpeg",
    },
    {
        name: "Shivangi Sharma",
        github: "https://github.com/shvngishrma",
        linkedin: null,
        image:"./assests/shivangi.jpg",
    },
    {
        name: "Suhaan Sharma",
        github: "https://github.com/Suhaan13",
        linkedin: "https://www.linkedin.com/in/suhaan-sharma-a6503a313/",
        image:"./assests/suhaan.jpg",
    },
    // {
    //     name: "Tanishq Singhal",
    //     github: null,
    //     linkedin: null
    // },
    {
        name: "Tanvi Agarwal",
        github: "https://github.com/Tans-jpg",
        linkedin: "https://www.linkedin.com/in/tanvi-agarwal-460314253",
        image:"./assests/tanvi.jpg",
    },
    {
        name: "Tejraj Singh",
        github: null,
        linkedin: "https://www.linkedin.com/in/tejraj-singh-rajput-5734362a8",
        image:"./assests/tej.jpg",
    },
    // {
    //     name: "Vishwajeet Dubey",
    //     github: null,
    //     linkedin: null
    // }
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
                  ${
                      member.linkedin
                          ? `<a href="${member.linkedin}" target="_blank" class="icon"><img src="./assests/linkedin.png" alt="LinkedIn"></a>`
                          : `<img src="./assests/linkedin.png" alt="No LinkedIn" class="icon">`
                  }
                  ${
                      member.github
                          ? `<a href="${member.github}" target="_blank" class="icon"><img src="./assests/github.png" alt="GitHub"></a>`
                          : `<img src="./assests/github.png" alt="No GitHub" class="icon">`
                  }
              </div>
          `;
          grid.appendChild(card);
      });
  }
  
  function myFunction()  {
      const value = Math.random() < 0.5 ? 0 : 1;
      console.log(value);
  
      if (value === 0) {
          window.location.href = './games/Menja/Menja/index.html'; // Navigate to the first Achievements page
      } else {
          window.location.href = './games/The Cube/index.html'; // Navigate to the second Achievements page
      }
  };
  
  // Attach select to the global window object
  window.onload = myFunction;
  
  
    
    // Run on Load
    window.onload = populateTeamGrid;
    
  
  // Run on Load
  window.onload = populateTeamGrid;
  