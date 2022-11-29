import self from "../img/amineNew2.jpeg"
import mock1 from "../img/ISOLPLUS.png"
import mock2 from "../img/beedelivery.png"
import mock3 from "../img/talentium.png"
import mock4 from "../img/leedy.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Amine",
    lastName: "Douiri",
    initials: "ads", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        
        {
            emoji: '🇹🇳',
            text: 'based in the TN'
        },
        {
            emoji: "👨🏽‍🎓",
            text: "Student at ESPRIT"
        },
        {
            emoji: "📧",
            text: "medamine.douiri@esprit.tn"
        },
        {
            emoji: "📞",
            text: "+216 53 625 891"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/AminDouiri99/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://github.com/AminDouiri99",
            icon: "fa fa-github",
            label: 'github'
        }
        ,
        {
            link: "https://www.linkedin.com/in/amine-douiri-269a27160/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Amine. Fullstack engineer, I'm specialized in web ( front-back )and mobile development, looking for an internship. You should hire me!",
    skills:
        {
            MobileDev: ['FLUTTER', 'KOTLIN', 'SWIFT'],
            WebFrontEnd: ['REACT', 'NEXT JS', 'ANGULAR'],
            WebBackEnd: ['NODE JS', 'NEST JS', 'SPRING BOOT','DOTNET'],
            Database: ['MYSQL', 'MONGODB', 'POSTGRESQL','ORACLE'],
            DevOps: ['JENKINS', 'DOCKER', 'SONARQUBE','NEXUS','GRAFANA'],
            CollaborativeTools: ['GIT(GITHUB,GITLAB)']

        }
    ,
    hobbies: [
        {
            label: 'gym',
            emoji: '🏋️'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '👨‍🍳'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "ISOL Plus",
            live: "https://www.isolplus.net/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "beedelivery",
            live: "https://www.beedelivery.tn",
            source: "",
            image: mock2
        },
        {
            title: "Talentium",
            live: "https://appgallery.huawei.com/app/C105365913",
            source: "https://github.com/AminDouiri99/Mini-Projet-Kotlin",
            image: mock3
        },
        {
            title: "Leedy",
            live: "",
            source: "https://github.com/AminDouiri99/PimBackOfficReact",
            image: mock4
        },
    ]
}