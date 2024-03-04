import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { PrismaClient } from '@prisma/client';
import { UUIDType } from './uuid.js';
import { PostType } from './post.js';
import { MemberTypeId } from './member.js';
import UserType from './user.js';
import { ProfileType } from './profile.js';


const CreatePostInputType = new GraphQLInputObjectType({
  name: 'CreatePostInput',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    content: {
      type: new GraphQLNonNull(GraphQLString)
    },
    authorId: {
      type: new GraphQLNonNull(UUIDType)
    }
  }
});

const CreateUserInputType = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    balance: {
      type: GraphQLFloat
    }
  }
});

const CreateProfileInputType = new GraphQLInputObjectType({
  name: 'CreateProfileInput',
  fields: {
    isMale: {
      type: new GraphQLNonNull(GraphQLBoolean)
    },
    yearOfBirth: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    userId: {
      type: new GraphQLNonNull(UUIDType)
    },
    memberTypeId: {
      type: new GraphQLNonNull(MemberTypeId)
    }
  }
});

const ChangePostInputType = new GraphQLInputObjectType({
  name: 'ChangePostInput',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});

const ChangeProfileInputType = new GraphQLInputObjectType({
  name: 'ChangeProfileInput',
  fields: {
    isMale: {
      type: GraphQLBoolean
    }
  }
});

const ChangeUserInputType = new GraphQLInputObjectType({
  name: 'ChangeUserInput',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
});


export const rootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createPost: {
      type: PostType,
      args: {
        dto: {
          type: new GraphQLNonNull(CreatePostInputType)
        }
      },
      resolve: async (_, args, prisma: PrismaClient) => await prisma.post.create({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        data: args.dto
      })
    },
     createUser: {
       type: UserType,
       args: {
         dto: {
           type: new GraphQLNonNull(CreateUserInputType)
         }
       },
       resolve: async (_, args, prisma: PrismaClient) => await prisma.user.create({
         // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
         data: args.dto
       })
     },
     createProfile: {
       type: ProfileType,
       args: {
         dto: {
           type: new GraphQLNonNull(CreateProfileInputType)
         }
       },
       resolve: async (_, args, prisma: PrismaClient) => await prisma.profile.create({
         // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
         data: args.dto
       })
     },
    deletePost: {
      type: GraphQLBoolean,
      args: {
        id: {
          type: new GraphQLNonNull(UUIDType)
        }
      },
      resolve: async (_, args, prisma: PrismaClient) => void await prisma.post.delete({
        where: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
          id: args.id
        }
      })
    },
    deleteProfile: {
      type: GraphQLBoolean,
      args: {
        id: {
          type: new GraphQLNonNull(UUIDType)
        }
      },
      resolve: async (_, args, prisma: PrismaClient) => void await prisma.profile.delete({
        where: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
          id: args.id
        }
      })
    },
    deleteUser: {
      type: GraphQLBoolean,
      args: {
        id: {
          type: new GraphQLNonNull(UUIDType)
        }
      },
      resolve: async (_, args, prisma: PrismaClient) => void await prisma.user.delete({
        where: {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
          id: args.id
        }
      })
    },
    changePost: {
      type: PostType,
      args: {
        id: {
          type: new GraphQLNonNull(UUIDType)
        },
        dto: {
          type: new GraphQLNonNull(ChangePostInputType)
        }
      },
      resolve: async (_, args, prisma: PrismaClient) => {
        try {
          return await prisma.post.update({
            where: {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
              id: args.id
            },
            data: {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
              title: args.dto.title
            },
          });
        } catch (error) {
          console.error('changePost', error);
        }
      }
    },
    changeProfile: {
      type: ProfileType,
      args: {
        id: {
          type: new GraphQLNonNull(UUIDType)
        },
        dto: {
          type: new GraphQLNonNull(ChangeProfileInputType)
        }
      },
      resolve: async (_, args, prisma: PrismaClient) => {
        try {
          return await prisma.profile.update({
            where: {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
              id: args.id
            },
            data: {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
              isMale: args.dto.isMale
            },
          });
        } catch (error) {
          console.error('changeProfile', error);
        }
      }
    },
    changeUser: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(UUIDType)
        },
        dto: {
          type: new GraphQLNonNull(ChangeUserInputType)
        }
      },
      resolve: async (_, args, prisma: PrismaClient) => {
        try {
          return await prisma.user.update({
            where: {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
              id: args.id
            },
            data: {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
              name: args.dto.name
            },
          });
        } catch (error) {
          console.error('changeUser', error);
        }
      }
    },

    subscribeTo: {
      type: UserType,
      args: {
        userId: {
          type: new GraphQLNonNull(UUIDType)
        },
        authorId: {
          type: new GraphQLNonNull(UUIDType)
        }
      },
      resolve: async (_, args, prisma: PrismaClient) => {
        try {
          return await prisma.user.update({
            where: {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
              id: args.userId
            },
            data: {
              userSubscribedTo: {
                create: {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                  authorId: args.authorId
                }
              }
            }
          });

        } catch (error) {
          console.error('subscribeTo', error);
        }
      }
    },
     unsubscribeFrom: {
       type: GraphQLBoolean,
       args: {
         userId: {
           type: new GraphQLNonNull(UUIDType)
         },
         authorId: {
           type: new GraphQLNonNull(UUIDType)
         }
       },
       resolve: async (_, args, prisma: PrismaClient) => {
         try {
           await prisma.subscribersOnAuthors.delete({
             where: {
               subscriberId_authorId: {
                 // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
                 subscriberId: args.userId,
                 // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
                 authorId: args.authorId
               }
             }
           });

           return true;
         } catch (error) {
           console.error('unsubscribeFrom', error);
           return false;
         }
       }
     }
  }
});
