import { GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { UUIDType } from './uuid.js';
import UserType from './user.js';

export const SubscriberOnAuthorType = new GraphQLObjectType({
  name: 'SubscribersOnAuthors',
  fields: () => ({
    subscriber: {
      type: new GraphQLNonNull(UserType),
      name: 'subscriber'
    },
    subscriberId: {
      type: new GraphQLNonNull(UUIDType),
      name: 'subscriberId'
    },
    author: {
      type: new GraphQLNonNull(UserType),
      name: 'author'
    },
    authorId: {
      type: new GraphQLNonNull(UUIDType),
      name: 'authorId'
    },
  })
})
