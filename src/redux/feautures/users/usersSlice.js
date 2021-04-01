const POST_ADDED = 'POST_ADDED';
const MESSAGE_ADDED = 'MESSAGE_ADDED';

const initialState = [
  {
    userActive: true,
    networkStatus: 'Online',
    userData: {
      id: '1',
      imageURL: 'https://celebmafia.com/wp-content/uploads/2019/04/elle-fanning-photoshoot-for-teen-vogue-magazine-april-2019-2.jpg',
      imageAlt: 'User',
      firstName: 'Elle',
      lastName: 'Fanning',
      description: [
        ['Birthday', 'April 9'],
        ['Current city', 'Los Angeles'],
        ['Relationship', 'Actively searching']
      ]
    },
    friends: [
      '2',
      '3',
      '4',
      '5'
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
          id: '2',
          authorId: '1',
          date: 'April 10, 2020',
          text: 'Going to gym',
          likes: '10'
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
                text: 'Hello Friend'
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 22, 2020',
                text: 'Oh hi Mark!'
              },
              {
                id: '3',
                authorId: '2',
                date: 'April 22, 2020',
                text: '...'
              }
            ]
          }
        },
        {
          id: '3',
          userId: '3',
          messagesData: {
            idCurrent: '3',
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
              },
              {
                id: '3',
                authorId: '3',
                date: 'April 11, 2020',
                text: 'Nice photo btw'
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
                text: `Let's watch new season of Mr. Robot!`
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 14, 2020',
                text: `Yeah, let's do it!`
              },
              {
                id: '3',
                authorId: '4',
                date: 'April 16, 2020',
                text: 'Great!'
              }
            ]
          }
        },
        {
          id: '5',
          userId: '5',
          messagesData: {
            idCurrent: '9',
            messages: [
              {
                id: '1',
                authorId: '5',
                date: 'April 9, 2020',
                text: 'Hey'
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 11, 2020',
                text: 'What?'
              },
              {
                id: '3',
                authorId: '5',
                date: 'April 11, 2020',
                text: 'Nothing...'
              },
              {
                id: '4',
                authorId: '5',
                date: 'April 12, 2020',
                text: 'Hey'
              },
              {
                id: '5',
                authorId: '1',
                date: 'April 12, 2020',
                text: 'What?'
              },
              {
                id: '6',
                authorId: '5',
                date: 'April 14, 2020',
                text: 'Nothing...'
              },
              {
                id: '7',
                authorId: '5',
                date: 'April 15, 2020',
                text: 'Hey'
              },
              {
                id: '8',
                authorId: '1',
                date: 'April 15, 2020',
                text: 'What?'
              },
              {
                id: '9',
                authorId: '5',
                date: 'April 15, 2020',
                text: 'Nothing...'
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
      id: '2',
      imageURL: 'https://i.pinimg.com/originals/9a/54/af/9a54afe8c51013ee60e010c74fb4af65.png',
      imageAlt: 'User',
      firstName: 'Elliot',
      lastName: 'Alderson',
      description: [
        ['Birthday', 'September 17'],
        ['Current city', 'New York City']
      ]
    },
    friends: [
      '1',
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
            idCurrent: '3',
            messages: [
              {
                id: '1',
                authorId: '2',
                date: 'April 21, 2020',
                text: 'Hello Friend'
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 22, 2020',
                text: 'Oh hi Mark!'
              },
              {
                id: '3',
                authorId: '2',
                date: 'April 22, 2020',
                text: '...'
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
      imageURL: 'https://celebmafia.com/wp-content/uploads/2017/03/dakota-fanning-photoshoot-for-jimmy-choo-spring-summer-2017-13.jpg',
      imageAlt: 'User',
      firstName: 'Dakota',
      lastName: 'Fanning',
      description: [
        ['Birthday', 'February 23'],
        ['Current city', 'Los Angeles'],
        ['Relationship', 'Actively searching']
      ]
    },
    friends: [
      '1',
      '2',
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
            idCurrent: '3',
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
              },
              {
                id: '3',
                authorId: '3',
                date: 'April 11, 2020',
                text: 'Nice photo btw'
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
      imageURL: 'https://adultpaintbynumber.com/wp-content/uploads/2020/10/Angela-Moss-Mr-Robot-paint-by-numbers.jpg',
      imageAlt: 'User',
      firstName: 'Angela',
      lastName: 'Moss',
      description: [
        ['Birthday', 'February 27'],
        ['Current city', 'New York City'],
        ['Relationship', 'Actively searching']
      ]
    },
    friends: [
      '1',
      '2',
      '3',
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
            idCurrent: '3',
            messages: [
              {
                id: '1',
                authorId: '4',
                date: 'April 10, 2020',
                text: `Let's watch new season of Mr. Robot!`
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 14, 2020',
                text: `Yeah, let's do it!`
              },
              {
                id: '3',
                authorId: '4',
                date: 'April 16, 2020',
                text: 'Great!'
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
      imageURL: 'https://pyxis.nymag.com/v1/imgs/825/ae1/bcce427fc131cf1f95aede3d9764d31023-26-mr-robot.rsquare.w700.jpg',
      imageAlt: 'User',
      firstName: 'Mr.',
      lastName: 'Robot',
      description: [
        ['Current city', 'New York City']
      ]
    },
    friends: [
      '1',
      '2',
      '3',
      '4'
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
            idCurrent: '9',
            messages: [
              {
                id: '1',
                authorId: '5',
                date: 'April 9, 2020',
                text: 'Hey'
              },
              {
                id: '2',
                authorId: '1',
                date: 'April 11, 2020',
                text: 'What?'
              },
              {
                id: '3',
                authorId: '5',
                date: 'April 11, 2020',
                text: 'Nothing...'
              },
              {
                id: '4',
                authorId: '5',
                date: 'April 12, 2020',
                text: 'Hey'
              },
              {
                id: '5',
                authorId: '1',
                date: 'April 12, 2020',
                text: 'What?'
              },
              {
                id: '6',
                authorId: '5',
                date: 'April 14, 2020',
                text: 'Nothing...'
              },
              {
                id: '7',
                authorId: '5',
                date: 'April 15, 2020',
                text: 'Hey'
              },
              {
                id: '8',
                authorId: '1',
                date: 'April 15, 2020',
                text: 'What?'
              },
              {
                id: '9',
                authorId: '5',
                date: 'April 15, 2020',
                text: 'Nothing...'
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
      const user = state.find((user) => user.userData.id === action.userId);
      const userActive = state.find((user) => user.userData.id === action.userActiveId);;
    
      user.postsData.idCurrent = (+user.postsData.idCurrent + 1).toString();
    
      user.postsData.posts.unshift({
        id: user.postsData.idCurrent,
        authorId: userActive.userData.id,
        date: getCurrentDate(),
        text: action.postText,
        likes: ''
      });

      return state;
    }
    case MESSAGE_ADDED: {
      const user = state.find((user) => user.userData.id === action.userId);
      const userActive = state.find((user) => user.userData.id === action.userActiveId);
      const userChat = user.chatsData.chats.find((chat) => chat.id === action.userActiveId);
      const userActiveChat = userActive.chatsData.chats.find((chat) => chat.id === action.userId);
    
      if (userChat) {
        const message = {
          id: (+userChat.messagesData.idCurrent + 1).toString(),
          authorId: action.userActiveId,
          date: getCurrentDate(),
          text: action.messageText
        }
    
        userChat.messagesData.idCurrent = message.id;
        userChat.messagesData.messages.push(message);
        userActiveChat.messagesData.idCurrent = message.id;
        userActiveChat.messagesData.messages.push(message);
      }

      return state;
    }
    default: {
      return state;
    }
  }
}
