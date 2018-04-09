import * as firebase from 'firebase'

export default {
    state: {
        profiles: [
            {
                id: 'sk8terbro',
                personal: {
                    firstName: 'Cody',
                    lastName: 'Garbrandt',
                    title: 'Carpet Bagger',
                    avatarUrl: 'https://skateparkoftampa.com/spot/headshots/6412mug.jpg',
                    email: 'sk8terbro@rad.net',
                    twitterUrl: 'http://www.twitter.com/sk8terbro',
                    facebookUrl: 'http:/www.facebook.com/sk8terbro',
                    instagramUrl: 'http://www.instagram.com/sk8terbro',
                    linkedInUrl: 'http://www.instagram.com/sk8terbro',
                    websiteUrl: 'http://www.sk8terbro.com'
                },
                skills: [
                    {
                        id: ';aljkfoaweifj',
                        name: 'Javascript',
                        stars: 3.5,
    
                    },
                    {
                        id: 'o3iojewrijfsd',
                        name: 'Node.js',
                        stars: 4,
                    }
                ],
                education: [
                    {
                        id: 'woiowefjlskd',
                        orgName: 'University of North Dakota',
                        location: 'Grand Forms, ND',
                        fromYear: 1970,
                        toYear: 2018,
                        degree: 'Bachelor\'s of Arts',
                        completed: true
                    }
                ],
                employment: [
                    {
                        id: 'oeiweorijfieo',
                        name: 'Home Depot',
                        city: 'Capitola',
                        state: 'California',
                        title: 'Clerk',
                        fromYear: 2000,
                        toYear: 2014,
                    }
                ]
            },
            {
                id: 'coolchick',
                personal: {
                    firstName: 'Crissy',
                    lastName: 'Coolidge',
                    title: 'Taco Roller',
                    avatarUrl: 'http://awesomejelly.com/wp-content/uploads/2015/08/tacobell2.jpg',
                    email: 'sk8terbro@rad.net',
                    twitterUrl: 'http://www.twitter.com/coolchick',
                    facebookUrl: 'http:/www.facebook.com/coolchick',
                    instagramUrl: 'http://www.instagram.com/coolchick',
                    linkedInUrl: 'http://www.instagram.com/coolchick',
                    websiteUrl: 'http://www.coolchick.com'
                },
                skills: [
                    {
                        id: ';aljkfoaweifj',
                        name: 'Vue.js',
                        stars: 5,
    
                    },
                    {
                        id: 'o3iojewrijfsd',
                        name: 'Webpack',
                        stars: 2,
                    }
                ],
                education: [
                    {
                        id: 'woiowefjlskd',
                        orgName: 'University of North Dakota',
                        location: 'Grand Forms, ND',
                        fromYear: 1970,
                        toYear: 2018,
                        degree: 'Bachelor\'s of Arts',
                        completed: true
                    }
                ],
                employment: [
                    {
                        id: 'oeiweorijfieo',
                        name: 'Home Depot',
                        city: 'Capitola',
                        state: 'California',
                        title: 'Clerk',
                        fromYear: 2000,
                        toYear: 2014,
                    }
                ]
            }
        ]
    },
    mutations: {
    
    },
    actions: {
    
    },
    getters: {
    
    }
}