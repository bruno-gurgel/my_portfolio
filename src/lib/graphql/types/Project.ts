import { builder } from "../builder";

builder.prismaObject("Project", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
    updatedAt: t.expose("updatedAt", {
      type: "Date",
    }),
    cover: t.exposeString("cover"),
    link: t.exposeString("link"),
    description: t.exposeString("description"),
  }),
});

builder.queryField("projects", (t) =>
  t.prismaField({
    type: ["Project"],
    resolve: (query) => prisma.project.findMany({ ...query }),
  })
);

builder.mutationField("createProject", (t) =>
  t.prismaField({
    type: "Project",
    args: {
      name: t.arg.string({ required: true }),
      link: t.arg.string({ required: true }),
      cover: t.arg.string({ required: true }),
      description: t.arg.string({ required: true }),
    },
    resolve: async (query, _parent, args, ctx) => {
      return prisma.project.create({
        ...query,
        data: {
          ...args,
        },
      });
    },
  })
);
