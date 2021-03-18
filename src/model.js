const state = {
  userData: {
    id: '1',
    imageURL: 'https://celebmafia.com/wp-content/uploads/2019/04/elle-fanning-photoshoot-for-teen-vogue-magazine-april-2019-2.jpg',
    imageAlt: 'User',
    firstName: 'Elle',
    lastName: 'Fanning',
    details: [
      ['Birthday', 'April 9'],
      ['Current city', 'Los-Angeles'],
      ['Relationship', 'Actively searching']
    ]
  },
  friendsData: [
    {
      id: '2',
      imageURL: 'https://i.pinimg.com/originals/9a/54/af/9a54afe8c51013ee60e010c74fb4af65.png',
      imageAlt: 'Friend',
      firstName: 'Elliot',
      lastName: 'Alderson'
    },
    {
      id: '3',
      imageURL: 'https://celebmafia.com/wp-content/uploads/2017/03/dakota-fanning-photoshoot-for-jimmy-choo-spring-summer-2017-13.jpg',
      imageAlt: 'Friend',
      firstName: 'Dakota',
      lastName: 'Fanning'
    },
    {
      id: '4',
      imageURL: 'https://adultpaintbynumber.com/wp-content/uploads/2020/10/Angela-Moss-Mr-Robot-paint-by-numbers.jpg',
      imageAlt: 'Friend',
      firstName: 'Angela',
      lastName: 'Moss'
    },
    {
      id: '5',
      imageURL: 'https://pyxis.nymag.com/v1/imgs/825/ae1/bcce427fc131cf1f95aede3d9764d31023-26-mr-robot.rsquare.w700.jpg',
      imageAlt: 'Friend',
      firstName: 'Mr.',
      lastName: 'Robot'
    }
  ],
  posts: [
    {
      id: '2',
      date: 'April 12, 2020',
      text: 'Hi, how are you?',
      likes: '12'
    },
    {
      id: '1',
      date: 'April 10, 2020',
      text: 'Going to gym',
      likes: '10'
    },
    {
      id: '1',
      date: 'April 9, 2020',
      text: `It's my first post!`,
      likes: '29'
    }
  ],
  dialogs: [
    {
      id: '2',
      messages: [
        {
          id: '2',
          date: 'April 21, 2020',
          text: 'Hello Friend'
        },
        {
          id: '1',
          date: 'April 22, 2020',
          text: 'Oh hi Mark!'
        },
        {
          id: '2',
          date: 'April 22, 2020',
          text: '...'
        }
      ]
    },
    {
      id: '3',
      messages: [
        {
          id: '3',
          date: 'April 9, 2020',
          text: 'Welcome!'
        },
        {
          id: '1',
          date: 'April 9, 2020',
          text: 'Thanks!'
        },
        {
          id: '3',
          date: 'April 9, 2020',
          text: 'Nice photo btw'
        }
      ]
    },
    {
      id: '4',
      messages: [
        {
          id: '4',
          date: 'April 12, 2020',
          text: `Let's watch new season of Mr. Robot!`
        },
        {
          id: '1',
          date: 'April 14, 2020',
          text: `Yeah, let's do it!`
        },
        {
          id: '4',
          date: 'April 14, 2020',
          text: 'Great!'
        }
      ]
    },
    {
      id: '5',
      messages: [
        {
          id: '5',
          date: 'April 10, 2020',
          text: 'Hey'
        },
        {
          id: '1',
          date: 'April 11, 2020',
          text: 'What?'
        },
        {
          id: '5',
          date: 'April 11, 2020',
          text: 'Nothing...'
        },
        {
          id: '5',
          date: 'April 14, 2020',
          text: 'Hey'
        },
        {
          id: '1',
          date: 'April 14, 2020',
          text: 'What?'
        },
        {
          id: '5',
          date: 'April 14, 2020',
          text: 'Nothing...'
        },
        {
          id: '5',
          date: 'April 19, 2020',
          text: 'Hey'
        },
        {
          id: '1',
          date: 'April 20, 2020',
          text: 'What?'
        },
        {
          id: '5',
          date: 'April 20, 2020',
          text: 'Nothing...'
        }
      ]
    }
  ]
};

export default state;
