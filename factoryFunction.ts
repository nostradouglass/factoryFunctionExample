function greetingFactory(language: string) {
  switch (language) {
    case "en":
      return function (name: string) {
        console.log(`hi ${name}.`);
      };
    case "es":
      return function (name: string) {
        console.log(`Hola ${name}.`);
      };
    default:
      return function () {
        console.log("Error, Language not found.");
      };
  }
}

let englishGreeting = greetingFactory("en");
let spanishGreeting = greetingFactory("es");
let germanGreeting = greetingFactory("gr");

englishGreeting("Dave");
spanishGreeting("Dave");
germanGreeting("Dave");
