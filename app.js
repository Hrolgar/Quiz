const correctAnswers = ["B", "A", "A", "B"];
const form = document.querySelector(".quiz-form");

const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //! check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  //! Show result on page
  result.classList.remove("d-none");
  scroll({ top: 0, behavior: "smooth" });

  //! animate score text
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 40);
});

// setTimeout(() => {

// }, 5000);
