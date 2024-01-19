// Retrieve css variables
const cssVariables = getComputedStyle(document.body)

// Colors
export const white = cssVariables.getPropertyValue('white');
export const lightBlue = cssVariables.getPropertyValue('light_blue');
export const blue = cssVariables.getPropertyValue('blue');
export const beige = cssVariables.getPropertyValue('beige');