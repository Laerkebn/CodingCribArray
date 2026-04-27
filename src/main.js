import "./style.css";

const names = ["Lola", "Mads", "Søren", "Mikkel"];
const alders = [23, 26, 35, 98];
const mottoer = [
  "Hello World",
  "goodmoring sunshine",
  "yellow mellow",
  "wupti dupti",
];

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  const alder = alders[i];
  const motto = mottoer[i];
  console.log(`${name} (${alder} år): "${motto}"`);
}
