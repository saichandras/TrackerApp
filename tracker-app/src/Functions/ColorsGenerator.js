export const randomColors = [
  '#c93f38',
  '#FF3855',
  '#FD3A4A',
  '#FB4D46',
  '#FA5B3D',
  '#FFAA1D',
  '#299617',
  '#2243B6',
  '#5DADEC',
  '#5946B2',
  '#9C51B6',
  '#A83731',
  '#AF6E4D',
  '#FF5470',
  '#FF7A00',
  '#0048BA',
  '#FF007C',
  '#E936A7',
  '#DA2647',
  '#44D7A8',
  '#6F2DA8',
  '#DA2647',
  '#4F86F7',
  '#B2F302',
  '#A0E6FF',
  '#DC143C',
  '#88ffcc',
  '#a8c74d',
  '#badf30',
  '#4fc172',
  '#7e5e52',
  '#b87439',
  '#eda740',
  '#b3e1e8',
  '#ff44ee',
  '#ebdcb6',
  '#c0b9a9',
  '#bc86af',
  '#dabe81',
];

export function randomColorGenerator() {
  return randomColors[Math.floor(Math.random() * randomColors.length)];
}

export function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash;
}

// Function to get two unique colors based on the name
export function getColorsForName(name) {
  // Calculate hash
  const hash = simpleHash(name);

  // Use hash to pick two colors from the array
  const colorIndex1 = hash % randomColors.length;
  let colorIndex2 = (hash + 1) % randomColors.length; // Simple attempt to get a second, different color

  // Ensure the two indices are not the same
  if (colorIndex1 === colorIndex2) {
    colorIndex2 = (colorIndex2 + 1) % randomColors.length;
  }

  return [randomColors[colorIndex1], randomColors[colorIndex2]];
}
