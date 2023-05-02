export const Query = {
  notes: async function (parent, args, context) {
    return await context.models.noteModel.find();
  },
  note: async function (parent, args, context) {
    console.log(context);
    return await context.models.noteModel.findById(args.id);
  },
};
