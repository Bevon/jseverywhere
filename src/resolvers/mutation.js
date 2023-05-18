export const Mutation = {
  newNote: async function (parent, args, context, info) {
    return await context.models.noteModel.create({
      content: args.content,
      author: "The Good Adversary",
    });
  },
};
