import promptSync from "prompt-sync";

(function main() {
  const scanner = promptSync();
  let s = scanner("Digite um número: ");

  let number = parseInt(s);

  console.log(factorial(number));
})();

function factorial(n: number) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
