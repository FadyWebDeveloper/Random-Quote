const btn = document.getElementById("btn1");
const txt = document.getElementById("demo");


let quote = [
  { content: "“Be yourself; everyone else is already taken.”", name: "― Oscar Wilde" },
  { content: "“So many books, so little time.”", name: "― Frank Zappa" },
  { content: "“It is better to be hated for what you are than to be loved for what you are not.”", name: "― Andre Gide, Autumn Leaves" },
  { content: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”", name: "― Mahatma Gandhi" },
  { content: "“So many books, so little time.”", name: "― Frank Zappa" },

]


btn.onclick = function () {
  const randomElement = quote[Math.floor(Math.random() * quote.length)];
    txt.innerHTML= `
    <p> ${randomElement.content} </p>
    <span> ${randomElement.name}</span>`

}



/*
  txt.innerHTML = ` <p>
  “Be yourself; everyone else is already taken.”
</p>
<span>
  ― Oscar Wilde
</span>
  `
  */