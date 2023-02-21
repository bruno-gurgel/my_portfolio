import './types/Comment'
import './types/Post'
import './types/User'
import './types/Project'

import { builder } from './builder'

export const schema = builder.toSchema()
