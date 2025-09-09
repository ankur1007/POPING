export async function apiQuestions() {
  const apiquest = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
  );
  const data = await apiquest.json();
  try {
    if (data.results) {
      const formattedQuestion = data.results.map((u, i) => {
        return {
          id: i + 1,
          text: `${u.question}`,
          option: [...u.incorrect_answers, u.correct_answer],
          answer: `${u.correct_answer}`,
        };
      });
      sessionStorage.setItem(
        "newApiQuestion",
        JSON.stringify(formattedQuestion)
      );
      return formattedQuestion;
    }
  } catch (error) {
    console.log("unable to fetch data", error);
  }
}

export function getApiQuestion() {
  const stored = sessionStorage.getItem("newApiQuestion");
  return stored ? JSON.parse(stored) : [];
}
