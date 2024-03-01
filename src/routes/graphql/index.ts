import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import {graphql} from 'graphql';
import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import {UUIDType} from './types/uuid.js';
import {AppSchema} from './types/schema.js';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req) {
      const body = req.body;

      console.log(UUIDType)

      const result = await graphql({
        schema: AppSchema,
        source: body.query
      });

      console.log(result);

      return {};
    },
  });
};

export default plugin;
