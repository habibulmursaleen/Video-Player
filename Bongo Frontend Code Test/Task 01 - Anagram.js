function anagramCheckingOff(string1, string2) {
  if (string1.length !== string2.length) return console.log(false);

  const string2ToCheckOff = string2.split("");

  for (let i = 0; i < string1.length; i++) {
    let letterFound = false;
    for (let j = 0; j < string2ToCheckOff.length; j++) {
      if (string1[i] === string2ToCheckOff[j]) {
        string2ToCheckOff[j] = null;
        letterFound = true;
        break;
      }
    }
    if (!letterFound) return console.log(false);
  }

  return console.log(true);
}

anagramCheckingOff("eat", "tar");
anagramCheckingOff("bleat", "table");
