import promptSync from "prompt-sync";

function main() {
  const scanner = promptSync();
  let x = scanner("Digite um número: ");

  console.log(factorial(parseInt(x)));
}()

function factorial(n: number) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

main();
