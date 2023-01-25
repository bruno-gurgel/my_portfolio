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
  }),
});

builder.queryField("projects", (t) =>
  t.prismaField({
    type: ["Project"],
    resolve: (query) => prisma.project.findMany({ ...query }),
  })
);
