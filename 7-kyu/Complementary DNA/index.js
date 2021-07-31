
/*
  Title:
    Complementary DNA
  Description:
    Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
    If you want to know more: http://en.wikipedia.org/wiki/DNA
    In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
    You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
    More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
    Example: (input: output)
    DNA_strand ("ATTGC") # return "TAACG"
    DNA_strand ("GTAT") # return "CATA"

    DNAStrand ("ATTGC") // return "TAACG"
    DNAStrand ("GTAT") // return "CATA"

    dnaStrand("ATTGC") // return "TAACG"
    dnaStrand("GTAT") // return "CATA"

    MakeComplement("ATTGC") => "TAACG"
    MakeComplement("GTAT") => "CATA"

    DNA_strand("ATTGC") // returns "TAACG"
    DNA_strand("GTAT") // returns "CATA"

    DNA_strand ("ATTGC") # return "TAACG"
    DNA_strand ("GTAT") # return "CATA"

    dna_strand("ATTGC") # return "TAACG"
    dna_strand("GTAT") # return "CATA"

    DnaStrand.makeComplement("ATTGC") // return "TAACG"
    DnaStrand.makeComplement("GTAT") // return "CATA"

    DnaStrand.makeComplement("ATTGC") // return "TAACG"
    DnaStrand.makeComplement("GTAT") // return "CATA"

    makeComplement("ATTGC") // return "TAACG"
    makeComplement("GTAT") // return "CATA"

    dnaStrand []        `shouldBe` []
    dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
    dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
    dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

    (is (= (dna-strand "ATTGC") "TAACG"))
    (is (= (dna-strand "GTAT") "CATA"))

    dna_strand("ATTGC") // return "TAACG"
    dna_strand("GTAT")  // return "CATA"

    DNAStrand("ATTGC") // returns "TAACG"
    DNAStrand("GTAT") // returns "CATA"

    dna_strand("ATTGC") // returns "TAACG"
    dna_strand("GTAT")  // returns "CATA"

    dnastrand("ATTGC") # returns "TAACG"
    dnastrand("GTAT")  # returns "CATA"

    dna_strand("ATTGC") == "TAACG"
    dna_strand("GTAT") == "CATA"

    Dna.dna_strand("ATTGC") == "TAACG"
    Dna.dna_strand("GTAT") == "CATA"

  Examples:
  Notes:
  Kata Link:
    https://www.codewars.com/kata/554e4a2f232cdd87d9000038
  Discuss Link:
    https://www.codewars.com/kata/554e4a2f232cdd87d9000038/discuss
  Solutions Link:
    https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions
*/
// Long Solution
function DNAStrand (dna) {
  const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };

  return dna
    .split('')
    .map(string => pairs[string])
    .join('');
}
// Short Solution
/*
const DNAStrand = () => {}
*/
// Function Export
module.exports = DNAStrand;
