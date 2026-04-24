import promptSync from "prompt-sync";
import { factorial } from "./factorial"

(function main() {
  const scanner = promptSync();
  let s = scanner("Digite um número: ");

  let number = parseInt(s);

  console.log(factorial(number));
})();

