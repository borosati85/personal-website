const projects = [
    {
        id: 1,
        title: 'e-Commerce App',
        description: 'A small webshop I made for a friend, to help him selling his honey products online. Front-end is created with React, used Redux-Sagas for state management. Backend is provided by FireBase, online payments by Stripe.',
        url: 'https://github.com/borosati85/project-honey',
        githubUrl: 'https://github.com/borosati85/project-honey',
        technologies:['react','redux', 'firebase', 'stripe']
    },
    {
        id: 2,
        title: 'Face Recognition App',
        description: 'A face recognition app, using the power of face-api-js, and React.',
        url: 'https://borosati85.github.io/face-app/',
        githubUrl: 'https://github.com/borosati85/face-app',
        technologies:['react', 'face-api-js']
    },
    {
        id: 3,
        title: 'Contacts App',
        description: 'A fun little app, with endless random users generated with random-data-api.com and robohash.com. Created with React and used Redux-Sagas for state management.',
        url: 'https://borosati85.github.io/cat-contacts/',
        githubUrl: 'https://github.com/borosati85/cat-contacts',
        technologies:['react', 'redux', 'random-data-api.com', 'robohash.com']
    },
    {
        id: 4,
        title: 'Gradient Background Generator',
        description: 'A simple application that helps select the right gradient background combination. Created with HTML, CSS, and Javascript.',
        url: 'https://borosati85.github.io/background-generator/',
        githubUrl: 'https://github.com/borosati85/background-generator',
        technologies:['HTML', 'CSS', 'JavaScript']
    }
];

export { projects };