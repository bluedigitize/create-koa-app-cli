/** @type {{get: handlers.get}} */
const handlers = {
  /**
   * @param {Context} ctx
   * @param next
   *
   * @return {Promise<void>}
   */
  get: async (ctx, next) => {
    ctx.body = {
      response: 'healthy'
    };
  }
};

module.exports = handlers;
