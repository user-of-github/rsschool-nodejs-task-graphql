import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import {graphql} from 'graphql';
import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import {UUIDType} from './types/uuid.js';
import { Schema } from './types/schema.js';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  const { prisma } = fastify;

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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        schema: Schema,
        source: body.query,
        contextValue: prisma,
        variableValues: body.variables,
      });

      console.log(result);

      return result;
    },
  });
};

export default plugin;
