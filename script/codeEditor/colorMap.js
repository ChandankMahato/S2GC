const highlight = {
  Logical: ["AND", "OR", "XOR", "NAND", "NOR"],
  LDASTA: ["LDA", "LDB", "STA", "STB"],
  Branch: ["ISZ", "BUN", "BSA", "XCHG", "JZ", "JNZ", "JLE", "JL", "JGE", "JG"],
  Arithmetic: ["ADD", "SUB", "DECA", "DECB", "INCA", "INCB"],
  Boolean: ["TESTA", "TESTB", "CLA", "CLB", "CMA", "CMB"],
  Shift: ["SHRA", "SHLA", "SHRB", "SHLB"],
  Skip: [
    "SC",
    "SNC",
    "SZ",
    "SNC",
    "SV",
    "SNV",
    "SS",
    "SNE",
    "SLE",
    "SL",
    "SG",
    "SGE",
  ],
  HLT: ["HLT"],
  Comment: ["//*"],
  lineEnd: [";"],
  AddressMode: ["#", "@", "$"],
  //write also for like this => Numbers: [],
};
