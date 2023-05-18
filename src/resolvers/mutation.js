export const Mutation = {
  newNote: async function (parent, args, context, info) {
    return await context.models.noteModel.create({
      content: args.content,
      author: "The Good Adversary",
    });
  },
  deleteNote: async function (parent, args, context, info) {
    try {
      await context.models.noteModel.findOneAndRemove({ _id: args.id });
      return true;
    } catch (error) {
      return false;
    }
  },
  updateNote: async function (parent, args, context, info) {
    return await context.models.noteModel.findOneAndUpdate(
      { _id: args.id },
      {
        $set: {
          content:args.content,
        },
      },
      {
        new: true,
      }
    );
  },
};
