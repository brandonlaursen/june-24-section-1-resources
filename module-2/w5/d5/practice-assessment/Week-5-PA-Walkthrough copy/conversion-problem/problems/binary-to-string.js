function binaryToString(binaryBlob) {

  /*
    This can be solved without parseInt() but some may find it easier
    to remember the conversion steps by including its use.
  */
  // parseInt() -
  //   * binary -> decimal
  //   * hex    -> decimal
  // toString() -
  //   * decimal -> binary
  //   * decimal -> hex
  // String.fromCharCode()
  //   * Base 10 to ASCII
  //     * 65 -> A
  //   * Binary to ASCII
  //     * 0b01000010 -> B
  //   * Base 16 to ASCII
  //     * 0x43 -> C
  // charCodeAt()
  //   * ASCII to Decimal
  //     * A -> 65
  //     * H -> 72

  let asciiStr = '';

  // * iterate through blob in sections of 8
  for (let i = 0; i < binaryBlob.length; i += 8) {
    // * slice section of binary(8bits)
    const binary = binaryBlob.slice(i, i + 8);

    // * parseInt to charCode/decimal
    // * parseInt takes code and base of what youre parsing from
    const charCode = parseInt(binary, 2);
    // * pass charCode to fromChar Code to get character
    const ascii = String.fromCharCode(charCode);
    // * accumulate characters on to string
    asciiStr += ascii;
  }

  return asciiStr;

}

/* Comment in the code below to run local tests */
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;
