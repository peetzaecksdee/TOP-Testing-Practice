import { caesarCipher, calculator, capitalize, reverseString } from "./test";

test("Capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("whAt")).toBe("What");
  expect(capitalize("cAPLOCKS")).toBe("Caplocks");
  expect(capitalize("yeAa")).toBe("Yeaa");
  expect(capitalize("whAtS uP")).toBe("Whats up");
})

test("Reverse String", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("WhaErwr")).toBe("rwrEahW");
  expect(reverseString("You Are NOT The GOAT")).toBe("TAOG ehT TON erA uoY");
})

test("Calculator", () => {
  expect(calculator.add(1, 5)).toBe(6);
  expect(calculator.add(50123, 5123)).toBe(55246);
  expect(calculator.subtract(100, 99)).toBe(1);
  expect(calculator.subtract(519023, 1289402185491)).toBe(519023 - 1289402185491);
  expect(calculator.multiply(9, 10)).toBe(90);
  expect(calculator.multiply(1285, 1209)).toBe(1285 * 1209);
  expect(calculator.divide(3, 2)).toBe(3 / 2);
  expect(calculator.divide(999, 222)).toBe(999 / 222);
  expect(calculator.divide(1, 0)).toBe(1 / 0);
})

test("Caesar Cipher", () => {
  expect(caesarCipher(0, "Cop")).toBe("Cop");
  expect(caesarCipher(20, "Serendipity led to unexpected discoveries.")).toBe("Mylyhxcjcns fyx ni ohyrjywnyx xcmwipylcym.");
  expect(caesarCipher(15, "The tranquility of the forest enveloped my senses.")).toBe("Iwt igpcfjxaxin du iwt udgthi tcktadets bn htchth.");
  expect(caesarCipher(6, "Laughter echoed through the halls, filling the air with joy.")).toBe("Rgamnzkx kinukj znxuamn znk ngrry, lorrotm znk gox cozn pue.");
  expect(caesarCipher(50, "Echoes of forgotten melodies resonated in the ancient ruins.")).toBe("Cafmcq md dmpemrrcl kcjmbgcq pcqmlyrcb gl rfc ylagclr psglq.");
  expect(caesarCipher(1, "With each step, new adventures unfolded on the path ahead.")).toBe("Xjui fbdi tufq, ofx bewfouvsft vogpmefe po uif qbui bifbe.");
  expect(caesarCipher(-1, "Whispers of the past lingered in the abandoned corridors.")).toBe("Vghrodqr ne sgd ozrs khmfdqdc hm sgd zazmcnmdc bnqqhcnqr.");
})

test("Analyze Array", () => {
  
})