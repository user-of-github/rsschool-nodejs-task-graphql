import { PrismaClient } from '@prisma/client';
import { UUIDType } from './uuid.js';
import { GraphQLFloat, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { ProfileType } from './profile.js';

const UserType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(UUIDType),
      description: 'The id of the user.',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the user.',
    },
    balance: {
      type: new GraphQLNonNull(GraphQLFloat),
      description: 'The balance of the user'
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
    // subscribedToUser: {
    //   type: new GraphQLList(UserType),
    //   resolve: async (user, _, context: PrismaClient) => await context.user.findMany({
    //     where: {
    //       userSubscribedTo: {
    //         some: {
    //           authorId: req.params.userId,
    //         },
    //       },
    //     },
    //   })
    // }
  })
});
export default UserType;
