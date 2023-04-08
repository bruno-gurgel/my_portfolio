import { useDisableIntrospection } from '@graphql-yoga/plugin-disable-introspection'
import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations'
import { createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'

import { schema } from '@/lib/graphql/schema'

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  graphqlEndpoint: '/api/graphql',
  graphiql: process.env.NODE_ENV !== 'production',
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          useDisableIntrospection(),
          usePersistedOperations({
            getPersistedOperation(key: string) {
              return persistedOperations[key]
            }
          })
        ]
      : undefined
})

export const config = {
  api: {
    bodyParser: false
  }
}
