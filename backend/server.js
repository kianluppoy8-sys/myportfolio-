const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const portfolioData = {
  aboutMe: "I'm Kianzhen, the guy who loves to watch spiderman and gets the job done. exploring by day just the codebase by night.",
  quote: {
    text: "The wise man never says everything he think, but always think everything he says.",
    author: "Aristotle"
  },
  socials: [
    { platform: "Facebook", url: "https://www.facebook.com/zh3nnn" },
    { platform: "GitHub", url: "https://github.com/kianluppoy8-sys" },
    { platform: "Instagram", url: "https://www.instagram.com/zhenie.sleep/" }
  ],
  skills: [
    { name: "Programming Langgugage", category: "Python, Java, Javascript, Typescript, HTML, CSS, nodejs, sql, php" },
    { name: "Backdoor Control", category: "Linux, Privelege escelation, backdoor analysis, website penetration testing, Cve researcher" }
  ],
  teams: [
    { name: "D3VNULL", description: "A teams that particapted on some capture the flag events", image: "/assets/devnull.png" },
    { name: "CYBER SOCIETY", description: "Formerly known as ICT Club, is the Official Organization of ACLC College Of Taytay's ICT Strand.", image: "/assets/cyber_security.png" }
  ]
};

app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.listen(PORT, () => {
  console.log(` running on http://localhost:${PORT}`);
});
