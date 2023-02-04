import { builder } from "../builder";

builder.prismaObject("Post", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    content: t.exposeString("content"),
    published: t.exposeBoolean("published"),
    slug: t.exposeString("slug"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("updatedAt", {
      type: "Date",
    }),
    author: t.relation("author"),
    comments: t.relation("comments"),
  }),
});

builder.queryField("posts", (t) =>
  t.prismaField({
    type: ["Post"],
    resolve: (query) => prisma.post.findMany(),
  })
);

builder.mutationField("createPost", (t) =>
  t.prismaField({
    type: "Post",
    args: {
      title: t.arg.string({ required: true }),
      content: t.arg.string({ required: true }),
      slug: t.arg.string({ required: true }),
      authorId: t.arg.id({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      const { title, content, slug, authorId } = args;

      return prisma.post.create({
        ...query,
        data: {
          title,
          content,
          slug,
          authorId: String(authorId),
        },
      });
    },
  })
);
