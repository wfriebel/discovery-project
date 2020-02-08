const EducatorsResolver = {
  Query: {
    getEmployees: async (parent, args, context, info) => {
      return { name: 'Will' };
    },
  },
};

module.exports = EducatorsResolver;