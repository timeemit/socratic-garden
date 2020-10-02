"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
exports.__esModule = true;
exports.ConceptsByText = exports.CreateConceptByText = exports.ConceptByID = exports.ConceptByText = exports.CONCEPTS = void 0;
exports.CONCEPTS = [
  {
    text: "Allele",
    definition:
      "An allele is a variant form of a given gene, meaning it is one of two or more versions of a known mutation at the same place on a chromosome",
    aliases: ["Alleles", "allele"],
  },
  {
    text: "Gene",
    definition:
      "A gene is a sequence of nucleotides in DNA or RNA that encodes the synthesis of a gene product, either RNA or protein",
    aliases: ["Genes"],
  },
  {
    text: "Genotype",
    definition:
      "A genotype is an organism’s complete set of heritable genes, or genes that can be passed down from parents to offspring.",
    aliases: [],
  },
  {
    text: "Heterozygous",
    definition: "having two different alleles of a particular gene or genes",
    aliases: ["heterozygous"],
  },
  {
    text: "Homozygous",
    definition: "having two identical alleles of a particular gene or genes.",
    aliases: ["homozygous"],
  },
].map(function (_a, id) {
  var text = _a.text,
    definition = _a.definition,
    aliases = _a.aliases;
  return {
    id: id,
    text: text,
    definition: definition,
    aliases: aliases,
    as: text,
  };
});
function ConceptByText(text) {
  var concept = exports.CONCEPTS.find(function (concept) {
    return concept.text === text || concept.aliases.includes(text);
  });
  if (concept == null) {
    return CreateConceptByText(text);
  } else {
    var copy = __assign({}, concept);
    copy.as = text;
    return copy;
  }
}
exports.ConceptByText = ConceptByText;
function ConceptByID(id) {
  return exports.CONCEPTS.find(function (concept) {
    return concept.id === id;
  });
}
exports.ConceptByID = ConceptByID;
function CreateConceptByText(text) {
  return { id: -1, text: text, definition: "", aliases: [], as: text };
}
exports.CreateConceptByText = CreateConceptByText;
function ConceptsByText(text) {
  return exports.CONCEPTS.filter(function (concept) {
    return concept.text.toLowerCase().startsWith(text.toLowerCase());
  });
}
exports.ConceptsByText = ConceptsByText;
