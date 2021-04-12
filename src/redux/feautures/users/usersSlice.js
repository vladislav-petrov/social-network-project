import { cloneDeep } from 'lodash';

const POST_ADDED = 'POST_ADDED';
const MESSAGE_ADDED = 'MESSAGE_ADDED';

const initialState = [
  {
    userActive: false,
    networkStatus: 'Online',
    userData: {
      id: '1',
      imageURL: 'https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageAlt: 'User',
      firstName: 'James',
      lastName: 'Pickford',
      descriptionData: {
        idCurrent: '3',
        description: [
          {
            id: '1',
            partText: ['Birthday', 'April 3']
          },
          {
            id: '2',
            partText: ['Current city', 'Dallas']
          },
          {
            id: '3',
            partText: ['Relationship', 'Actively searching']
          }
        ]
      }
    },
    friends: [
      '2',
      '3',
      '4',
      '5',
      '6'
    ],
    postsData: {
      idCurrent: '3',
      posts: [
        {
          id: '3',
          authorId: '2',
          date: 'April 12, 2020',
          text: 'Hi, how are you?',
          likes: '12'
        },
        {
          id: '1',
          authorId: '1',
          date: 'April 9, 2020',
          text: `It's my first post!`,
          likes: '29'
        }
      ]
    },
    chatsData: {
      chats: [
        {
          id: '2',
          userId: '2',
          messagesData: {
            idCurrent: '3',
            messages: [
              {
                id: '1',
                authorId: '2',
                date: 'April 21, 2020',
                text: 'Hello!'
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 22, 2020',
                text: 'Oh hi Olivia!'
              },
              {
                id: '3',
                authorId: '2',
                date: 'April 22, 2020',
                text: 'Glad to see you here!'
              }
            ]
          }
        },
        {
          id: '3',
          userId: '3',
          messagesData: {
            idCurrent: '2',
            messages: [
              {
                id: '1',
                authorId: '3',
                date: 'April 11, 2020',
                text: 'Welcome!'
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 11, 2020',
                text: 'Thanks!'
              }
            ]
          }
        },
        {
          id: '4',
          userId: '4',
          messagesData: {
            idCurrent: '3',
            messages: [
              {
                id: '1',
                authorId: '4',
                date: 'April 10, 2020',
                text: `Hey, wanna hang out with me and Olivia tomorrow?`
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 14, 2020',
                text: `Yeah, sure!`
              },
              {
                id: '3',
                authorId: '4',
                date: 'April 16, 2020',
                text: `Great! I'll call you later`
              }
            ]
          }
        },
        {
          id: '5',
          userId: '5',
          messagesData: {
            idCurrent: '4',
            messages: [
              {
                id: '1',
                authorId: '5',
                date: 'April 9, 2020',
                text: 'Hey James'
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 11, 2020',
                text: 'Hi!'
              },
              {
                id: '3',
                authorId: '5',
                date: 'April 11, 2020',
                text: 'Wanna play football next week?'
              },
              {
                id: '4',
                authorId: '1',
                date: 'April 12, 2020',
                text: 'Yeah, why not'
              }
            ]
          }
        },
        {
          id: '6',
          userId: '6',
          messagesData: {
            idCurrent: '2',
            messages: [
              {
                id: '1',
                authorId: '6',
                date: 'April 10, 2020',
                text: `Hi James! Long time no see...`
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 14, 2020',
                text: `Yeah, I miss you so much...`
              }
            ]
          }
        }
      ]
    }
  },
  {
    userActive: true,
    networkStatus: 'Offline',
    userData: {
      id: '2',
      imageURL: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageAlt: 'User',
      firstName: 'Olivia',
      lastName: 'Palmer',
      descriptionData: {
        idCurrent: '2',
        description: [
          {
            id: '1',
            partText: ['Birthday', 'September 9']
          },
          {
            id: '2',
            partText: ['Current city', 'Austin']
          }
        ]
      }
    },
    friends: [
      '1',
      '3',
      '4',
      '5',
      '6'
    ],
    postsData: {
      idCurrent: '',
      posts: []
    },
    chatsData: {
      chats: [
        {
          id: '1',
          userId: '1',
          messagesData: {
            idCurrent: '3',
            messages: [
              {
                id: '1',
                authorId: '2',
                date: 'April 21, 2020',
                text: 'Hello!'
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 22, 2020',
                text: 'Oh hi Olivia!'
              },
              {
                id: '3',
                authorId: '2',
                date: 'April 22, 2020',
                text: 'Glad to see you here!'
              }
            ]
          }
        }
      ]
    }
  },
  {
    userActive: false,
    networkStatus: 'Online',
    userData: {
      id: '3',
      imageURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageAlt: 'User',
      firstName: 'Matias',
      lastName: 'Hook',
      descriptionData: {
        idCurrent: '3',
        description: [
          {
            id: '1',
            partText: ['Birthday', 'May 15']
          },
          {
            id: '2',
            partText: ['Current city', 'Los Angeles']
          },
          {
            id: '3',
            partText: ['Relationship', 'Married']
          }
        ]
      }
    },
    friends: [
      '1',
      '2',
      '4',
      '5',
      '6'
    ],
    postsData: {
      idCurrent: '',
      posts: []
    },
    chatsData: {
      chats: [
        {
          id: '1',
          userId: '1',
          messagesData: {
            idCurrent: '2',
            messages: [
              {
                id: '1',
                authorId: '3',
                date: 'April 11, 2020',
                text: 'Welcome!'
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 11, 2020',
                text: 'Thanks!'
              }
            ]
          }
        }
      ]
    }
  },
  {
    userActive: false,
    networkStatus: 'Online',
    userData: {
      id: '4',
      imageURL: 'https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageAlt: 'User',
      firstName: 'Audrey',
      lastName: 'Moss',
      descriptionData: {
        idCurrent: '3',
        description: [
          {
            id: '1',
            partText: ['Birthday', 'February 29']
          },
          {
            id: '2',
            partText: ['Current city', 'New York City']
          },
          {
            id: '3',
            partText: ['Relationship', 'Actively searching']
          }
        ]
      }
    },
    friends: [
      '1',
      '2',
      '3',
      '5',
      '6'
    ],
    postsData: {
      idCurrent: '',
      posts: []
    },
    chatsData: {
      chats: [
        {
          id: '1',
          userId: '1',
          messagesData: {
            idCurrent: '3',
            messages: [
              {
                id: '1',
                authorId: '4',
                date: 'April 10, 2020',
                text: `Hey, wanna hang out with me and Olivia tomorrow?`
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 14, 2020',
                text: `Yeah, sure!`
              },
              {
                id: '3',
                authorId: '4',
                date: 'April 16, 2020',
                text: `Great! I'll call you later`
              }
            ]
          }
        }
      ]
    }
  },
  {
    userActive: false,
    networkStatus: 'Offline',
    userData: {
      id: '5',
      imageURL: 'https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageAlt: 'User',
      firstName: 'Gareth',
      lastName: 'Watson',
      descriptionData: {
        idCurrent: '1',
        description: [
          {
            id: '1',
            partText: ['Current city', 'New York City']
          }
        ]
      }
    },
    friends: [
      '1',
      '2',
      '3',
      '4',
      '6'
    ],
    postsData: {
      idCurrent: '',
      posts: []
    },
    chatsData: {
      chats: [
        {
          id: '1',
          userId: '1',
          messagesData: {
            idCurrent: '4',
            messages: [
              {
                id: '1',
                authorId: '5',
                date: 'April 9, 2020',
                text: 'Hey James'
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 11, 2020',
                text: 'Hi!'
              },
              {
                id: '3',
                authorId: '5',
                date: 'April 11, 2020',
                text: 'Wanna play football next week?'
              },
              {
                id: '4',
                authorId: '1',
                date: 'April 12, 2020',
                text: 'Yeah, why not'
              }
            ]
          }
        } 
      ]
    }
  },
  {
    userActive: false,
    networkStatus: 'Online',
    userData: {
      id: '6',
      imageURL: 'https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      imageAlt: 'User',
      firstName: 'Tanya',
      lastName: 'Morrigan',
      descriptionData: {
        idCurrent: '3',
        description: [
          {
            id: '1',
            partText: ['Birthday', 'June 20']
          },
          {
            id: '2',
            partText: ['Current city', 'London']
          },
          {
            id: '3',
            partText: ['Relationship', 'Actively searching']
          }
        ]
      }
    },
    friends: [
      '1',
      '2',
      '3',
      '4',
      '5'
    ],
    postsData: {
      idCurrent: '',
      posts: []
    },
    chatsData: {
      chats: [
        {
          id: '1',
          userId: '1',
          messagesData: {
            idCurrent: '2',
            messages: [
              {
                id: '1',
                authorId: '6',
                date: 'April 10, 2020',
                text: `Hi James! Long time no see...`
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 14, 2020',
                text: `Yeah, I miss you so much...`
              }
            ]
          }
        }
      ]
    }
  }
];

const getCurrentDate = function() {
  const monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const date = new Date();
  const month = monthsNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

export const addPostCreateAction = function(userId, userActiveId, postText) {
  return {
    type: POST_ADDED,
    userId: userId,
    userActiveId: userActiveId,
    postText: postText
  };
}

export const addMessageCreateAction = function(userId, userActiveId, messageText) {
  return {
    type: MESSAGE_ADDED,
    userId: userId,
    userActiveId: userActiveId,
    messageText: messageText
  };
}

export const usersReducer = function(state = initialState, action) {
  switch (action.type) {
    case POST_ADDED: {
      const stateCopy = cloneDeep(state);
      const userCopy = stateCopy.find((user) => user.userData.id === action.userId);
      const userActiveCopy = stateCopy.find((user) => user.userData.id === action.userActiveId);;

      userCopy.postsData.idCurrent = (+userCopy.postsData.idCurrent + 1).toString();

      userCopy.postsData.posts.unshift({
        id: userCopy.postsData.idCurrent,
        authorId: userActiveCopy.userData.id,
        date: getCurrentDate(),
        text: action.postText,
        likes: ''
      });

      return stateCopy;
    }
    case MESSAGE_ADDED: {
      const stateCopy = cloneDeep(state);
      const userCopy = stateCopy.find((user) => user.userData.id === action.userId);
      const userActiveCopy = stateCopy.find((user) => user.userData.id === action.userActiveId);
      const userChatCopy = userCopy.chatsData.chats.find((chat) => chat.id === action.userActiveId);
      const userActiveChatCopy = userActiveCopy.chatsData.chats.find((chat) => chat.id === action.userId);

      if (userChatCopy) {
        const message = {
          id: (+userChatCopy.messagesData.idCurrent + 1).toString(),
          authorId: action.userActiveId,
          date: getCurrentDate(),
          text: action.messageText
        }

        userChatCopy.messagesData.idCurrent = message.id;
        userChatCopy.messagesData.messages.push(message);
        userActiveChatCopy.messagesData.idCurrent = message.id;
        userActiveChatCopy.messagesData.messages.push(message);
      }

      return stateCopy;
    }
    default: {
      return state;
    }
  }
}
