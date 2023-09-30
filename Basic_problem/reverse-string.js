
export function reverseString(str) {
    // Declare a variable to store the reversed string
    let reversed = '';
  
    // Loop through the string backwards
    for (let i = str.length - 1; i >= 0; i--) {
      // Add each character to the reversed string
      reversed += str[i];
    }
  
    // Return the reversed string
    return reversed;
  }