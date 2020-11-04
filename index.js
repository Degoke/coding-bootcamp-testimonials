const picture = document.querySelector(".profile-image");
const text = document.querySelector(".review");
const names = document.querySelector(".name");
const job = document.querySelector(".job");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".back-button");

const data = [
  {
    name: "Tanya Sinclair",
    job: "UX Engineer",
    picture: "/images/image-tanya.jpg",
    text: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future.`,
  },
  {
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    picture: "/images/image-john.jpg",
    text: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
  },
];

let current = 0;

nextButton.onclick = () => {
  if (current < data.length) {
    current += 1;
    picture.src = data[current].picture;
    text.innerHTML = data[current].text;
    names.innerHTML = data[current].name;
    job.innerHTML = data[current].job;
  }
};

prevButton.onclick = () => {
  if (current >= 0) {
    current -= 1;
    picture.src = data[current].picture;
    text.innerHTML = data[current].text;
    names.innerHTML = data[current].name;
    job.innerHTML = data[current].job;
  }
};
