// Solution 1
export function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert the string to lowercase
    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse the string
    const reversedStr = formattedStr.split('').reverse().join('');
    // Return whether the formatted string is equal to the reversed string
    return formattedStr === reversedStr;
  }

  