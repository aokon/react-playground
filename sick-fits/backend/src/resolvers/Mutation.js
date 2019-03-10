const Mutations = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutations.createItem({
      data: {
        ...args
      }
    }, info);

    return item;
  }
};

module.exports = Mutations;
