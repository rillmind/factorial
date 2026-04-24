import { factorial } from "./factorial";
import { describe, it, expect } from "bun:test";

describe("factorial", () => {
  it("factorial(0) deve retornar 1", () => {
    expect(factorial(0)).toBe(1);
  });

  it("factorial(6) deve retornar 720", () => {
    expect(factorial(6)).toBe(720);
  });

  it("factorial(10) deve retornar 3628800", () => {
    expect(factorial(10)).toBe(3628800);
  });

  it("factorial(-1) deve retornar 1", () => {
    expect(factorial(-1)).toBe(1);
  });

  it("factorial(3.5) deve retornar 6", () => {
    expect(factorial(3.5)).toBe(6);
  });
});
