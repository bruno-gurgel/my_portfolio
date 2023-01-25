import { builder } from "./builder";
import "./types/Comment";
import "./types/Post";
import "./types/User";
import "./types/Project";

export const schema = builder.toSchema();
