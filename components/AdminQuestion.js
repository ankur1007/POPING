export function QuestionFunctionality() {
  const cancel = document.getElementById("cancel");
  const save = document.getElementById("save");
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3");
  const option4 = document.getElementById("option4");
  const answerInput = document.getElementById("answerInput");
  
  cancel.addEventListener("click", () => {
    document.getElementById("adminQuestions").classList.add("hidden");
  });
  
  save.addEventListener("click", () => {
    const questionInput = document.getElementById("questionInput").value;
    localStorage.setItem("questions", JSON.stringify({questionInput}));
  });
}
