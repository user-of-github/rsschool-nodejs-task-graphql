import {FastifyPluginAsyncTypebox} from '@fastify/type-provider-typebox';
import {graphql, parse, Source, validate} from 'graphql';
import depthLimit from 'graphql-depth-limit'
import {createGqlResponseSchema, gqlResponseSchema} from './schemas.js';
import {Schema} from './types/schema.js';

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

      const validationResult = validate(Schema, parse(new Source(body.query)), [depthLimit(5)]);

      if (validationResult.length) {
        return {
          data: null,
          errors: validationResult
        };
      }


      return await graphql({
        schema: Schema,
        source: body.query,
        contextValue: prisma,
        variableValues: body.variables,
        // @ts-ignore
        validationRules: [depthLimit(1)]
      });
    }
  });
};

export default plugin;
