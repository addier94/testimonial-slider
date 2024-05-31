document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      image: "./images/image-john.jpg",
      text: `
          “ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”
      `,
      name: "John Tarkpor",
      role: "Junior Front-end Developer",
      active: false,
    },
    {
      image: "./images/image-tanya.jpg",
      text: `
            “ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”
      `,
      name: "Tanya Sinclair",
      role: "UX Engineer",
      active: false,
    },
  ];

  let currentIndex = 0;

  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  const imgElement = document.getElementById("imgSrc");
  const testimonialText = document.getElementById("testimonial");
  const name = document.getElementById("name");
  const role = document.getElementById("role");

  const slides = document.getElementById("slides");

  data.forEach((_) => {
    const div = document.createElement("div");
    div.classList.add("doc");
    slides.appendChild(div);
  });

  const updateTestimonial = (index) => {
    imgElement.src = data[index].image;
    testimonialText.textContent = data[index].text;
    name.textContent = data[index].name;
    role.textContent = data[index].role;

    // Update slide indicators
    const indicators = document.querySelectorAll(".doc");
    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add("active__doc");
      } else {
        indicator.classList.remove("active__doc");
      }
    });
  };

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    updateTestimonial(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % data.length;
    updateTestimonial(currentIndex);
  });

  updateTestimonial(currentIndex);
});
