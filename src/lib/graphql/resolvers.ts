//import prisma from "@/lib/prisma/prisma";
//export const resolvers = {
//Query: {
//allUsers: () => {
//return prisma.user.findMany();
//},
//allPosts: () => {
//return prisma.post.findMany();
//},
//allComments: () => {
//return prisma.comment.findMany();
//},
//allProjects: () => {
//return prisma.project.findMany();
//},
//},
//Mutation: {
//createUser: async (_: any, { name, email, password }: any) => {
//return prisma.user.create({
//data: {
//name,
//email,
//},
//});
//},
//createPost: async (_: any, { title, content, slug, authorId }: any) => {
//console.log("createPost", title, content, slug, authorId);
//return prisma.post.create({
//data: {
//title,
//content,
//slug,
//authorId,
//},
//});
//},
//},
//};
