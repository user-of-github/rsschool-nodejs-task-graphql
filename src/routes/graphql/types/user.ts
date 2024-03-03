import { PrismaClient } from '@prisma/client';
import { UUIDType } from './uuid.js';
import { GraphQLFloat, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { ProfileType } from './profile.js';
import { PostType } from './post.js';


const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(UUIDType),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    balance: {
      type: new GraphQLNonNull(GraphQLFloat), // TODO: ATTENTION ! Int ??
    },
     profile: {
       type: ProfileType,
       resolve: async (user, _, context: PrismaClient) => await context.profile.findUnique({
         where: {
           // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
           userId: user.id
         }
       })
     },
    posts: {
      type: new GraphQLList(PostType),
      resolve: async (user: { id: string }, _, context: PrismaClient) => await context.post.findMany({
          where: {
            authorId: user.id,
          },
        })
    },
    userSubscribedTo: {
      type: new GraphQLList(UserType),
      resolve: async (user, __, prisma) => await prisma.user.findMany({
        where: {
          subscribedToUser: {
            some: {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
              subscriberId: user.id,
            },
          },
        },
      })
    },
    subscribedToUser: {
      type: new GraphQLList(UserType),
      resolve: async (user, __, prisma) => await prisma.user.findMany({
        where: {
          userSubscribedTo: {
            some: {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
              authorId: user.id,
            },
          },
        },
      })
    }
  })
});
export default UserType;
