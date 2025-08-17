

function mainOption(value) {
  const container = document.querySelector(".option");

  const input = document.createElement("input");
  input.type = "radio";
  input.value = null;

  const label = document.createElement("label");
  label.innerText = value;

  const breaks = document.createElement("br");
  container.appendChild(breaks);
  container.appendChild(input);
  container.appendChild(label);

  return container;
}
let currentIndex = 0;
let letter = ["A", "B", "C", "D"];
questions[currentIndex].option.forEach((opt, i) => {
  mainOption(letter[i] + ".  " + opt);
});



let now = new Date();

  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let second = now.getSeconds().toString().padStart(2, "0");

  let current_time = `${hours}:${minutes}:${second}`;
  console.log(current_time);
  new_time= current_time- 