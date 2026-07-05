export default {
  async fetch(request, env, ctx) {
    const serverModule = await import('../dist/server/server.js');
    return serverModule.default.fetch(request, env, ctx);
  },
};
