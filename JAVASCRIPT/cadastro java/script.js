let p = document.querySelector("p");
let input = document.querySelector("input");

const contacts = [
  { name: "Rodolfo", number: "(21) 9233232223" },
  { name: "Sara", number: "(22) 322233223" },
  { name: "Ana", number: "(11) 919992222" },
  { name: "Diego", number: "(21) 9941413926" },
];

function search() {
  let i = 0;
  let found = false;
  while (i < contacts.length) {
    if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
      p.innerHTML = `Contato encontrado Nome: ${contacts[i].name} Tel: ${contacts[i].number}`;
      found = true;

      break;
    }
    i++;
    if (!found) {
      p.innerHTML = "Contato não encontrado, tente novamente";
    }
  }
}
