import { builder } from "../builder";

builder.prismaObject("Comment", {
  fields: (t) => ({
    id: t.exposeID("id"),
    content: t.exposeString("content"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("updatedAt", {
      type: "Date",
    }),
    author: t.relation("author"),
    post: t.relation("post"),
  }),
});

builder.queryField("comments", (t) =>
  t.prismaField({
    type: ["Comment"],
    resolve: (query) => prisma.comment.findMany({ ...query }),
  })
);
