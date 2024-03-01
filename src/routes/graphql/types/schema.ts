import { GraphQLSchema } from 'graphql';
import { QueryType } from './query.js';
import { UUIDType } from './uuid.js';
import  UserType from './user.js';
import { ProfileType } from './profile.js';
import { PostType } from './post.js';
import { MemberType } from './member.js';

export const AppSchema: GraphQLSchema = new GraphQLSchema({
  query: QueryType,
  types: [UUIDType, UserType, ProfileType, PostType, MemberType],
});
