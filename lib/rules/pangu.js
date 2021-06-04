const pangu = (str) => {
  const patrn = /([a-z\d][\u4E00-\u9FFF])|([\u4E00-\u9FFF][a-z\d])/gi;
  return patrn.test(str);
};

module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description: "space is needed between Chinese and English/number",
      category: "Best Practices",
      recommended: false,
    },
    fixable: "code",
    schema: [], // no options
  },

  create: function (context) {
    const panguHandler = (node) => {
      if (typeof node.value === "string") {
        const { value } = node;
        if (pangu(value)) {
          context.report({
            node,
            message: "space is needed between Chinese and English/number",
          });
        }
      }
    };
    return {
      // parser: babel-eslint
      JSXText: panguHandler,
      // parser: @typescript-eslint/parser
      Literal: panguHandler,
    };
  },
};
