/*
Write a function `repeatingTranslate(sentence)` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:
- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according the following
  rules:
  - if the word ends with a vowel, simply repeat the word twice
    (example:'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself
    (example: 'trash'->'trashash')
Note that if words are capitalized in the original sentence, they should
remain capitalized in the translated sentence.

Vowels are the letters a, e, i, o, u.

Write a helper function called translateWord(word) that will translate the word
according to the rules defined for words 3 characters or longer above.
*/

// Your code here 

// console.log(repeatingTranslate("we like to go running fast")); // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash")); // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish")); // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France")); // "herer familyily flewew to FranceFrance"
// console.log(repeatingTranslate("did he ever find the trash")); // "didid he everer findind thethe trashash"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  translateWord,
  repeatingTranslate,
}