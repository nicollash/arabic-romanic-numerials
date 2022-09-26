export const chart = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

export const toRoman = (decimal: number) =>
  chart.reduce(
    (acc, numeral) => {
      const [roman, remainder] = acc;
      const [letter, value] = numeral;
      return [
        roman + (letter as string).repeat(Number(remainder) / Number(value)),
        Number(remainder) % Number(value),
      ];
    },
    ["", decimal]
  )[0];

export const toArabic = (roman: string) => {
  const romans: any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return roman
    .toUpperCase()
    .split("")
    .reduce(
      (previousValue, currentValue, currentIndex, array) =>
        romans[array[currentIndex + 1]] > romans[currentValue]
          ? previousValue - romans[currentValue]
          : previousValue + romans[currentValue],
      0
    );
};
