const getDate = new Date();
const getTheDay = getDate.getDate();
const getTheMonth = getDate.getMonth() + 1;
const getTheYear = getDate.getFullYear();
const getTodayDate = `${getTheDay}/${getTheMonth}/${getTheYear}`;

export const PAGES = [
    {
        page: "about",
        content: [
            [
                "23 January 1984",
                [
                    "I was born in Rome, Italy, on a cold morning of Monday 23rd January 1984.",
                    "Unlike many other people, I love Monday morning, when a new week starts. It is because I was born on Monday morning and also because I alway worked hard to follow my dream job."
                ]
            ],
            [
                "1 March 2015",
                [
                    "Because of my passion for SEO and programming languages, in 2015 I decided to move to the best place in the world for working in these fields: London.",
                    "Moving from Rome to London has completely changed my life because the Capital of England is a place where I met people from all over the world and where I found thousands of opportunities."
                ]
            ],
            [
                "01 August 2016",
                [
                    "I founded an Italian travel magazine that in a few years has reached more than 300k monthly views.",
                    "You can find it on google by typing <em>ViaggIn</em>.",
                    "I reached this great result because of my passion for travel, SEO and coding.",
                ]
            ],
            [
                "01 October 2018",
                [
                    "I decided to improve my knowledge by studying Computer Science at the Birkbeck University of London.",
                    "The Birkbeck University of London has been an incredible place where I met a lot of people that have my same passion: programming languages and new technologies.",
                    "In those years I studied some important subjects about Computer Science like Object Oriented, Functional Programming, Database, Algorithms, Mobile First, Responsive Design as well as great programming languages like JavaScript, PHP, Python and Java.",
                ]
            ],
            [
                "01 January 2021",
                [
                    "This is a special date for me because I found my first job as a <em>Junior Full Stack Developer</em> in a great web agency whose name is <a href='https://www.heavypenguin.com/' rel='noreferrer noopener'>Heavy Penguin</a>.",
                    "At Heavy Penguin I learned how to work in an agile environment as well as I learned how to work in a small but busy team.",
                    "In this great web agency I worked as a full stack developer for important clients like <a href='https://www.heavypenguin.com/' rel='noreferrer noopener'>Institute Of The Motor Industry</a> and <a href='https://www.cam.ac.uk/' rel='noreferrer noopener'>Cambridge University</a> combining my knowledge of JavaScript, PHP and Python."
                ]
            ],
            [
                "01 August 2021",
                [
                    "It has been a great day: the first August 2021 I got my Foundation Degree in Computer Science at the <a href='https://www.bbk.ac.uk/' rel='noreferrer noopener'>BirkBeck University of London</a>."
                ]
            ],
            [
                "03 January 2022",
                [
                    "After a few years as full stack developer, I decided to be focused on just one stack: front-end development.",
                    "On Monday 3rd January 2022 I started a new incredible path as Junior Front End Developer at <a href='https://sobold.co.uk/' rel='noreferrer noopener'>SoBold</a>, a great web development company based in the centre of London.",
                    "In this new web agency I have been focused on Front-End development, having the time to understand this stack much better, working for great clients like <a href='https://www.collercapital.com/' rel='noreferrer noopener'>Coller Capital</a>, <a href='https://arenko.group/' rel='noreferrer noopener'>Arenko</a>, <a href='https://www.kapowprimary.com/' rel='noreferrer noopener'>Kapow</a>, <a href='https://commonpurposeclub.co.uk/' rel='noreferrer noopener'>Common purpose</a>, <a href='https://www.jamieandthejam.co.uk/' rel='noreferrer noopener'>Jamie and the Jam</a>, and many more."
                ],
            ],
            [
                `${getTodayDate}`,
                [
                    "Today I am proud about what I have done because I found my dream job: be a great Front End developer.",
                    "This is the reason why I still love every Monday morning.",
                    "My main goal as a Web Developer is to increase customer satisfaction delivering robust code that can reduce maintenance time and technical debt.",
                    "At the moment I am working with Node, React and PHP but because of my knowledge I am able to switch between new and old technologies easily.",
                    "I love the JavaScript environment because it allows creating faster web applications, this is why I am glad of using NodeJS and React together.",
                    "I like PHP too because a lot of businesses in the world have been written with this programming language that version by version is getting faster, more secure and better - especially from the version 8."

                ]
            ]
        ]
    },
    {
        page: "contact",
        content: [
            "I'm seeking out opportunities to collaborate with companies / agencies / individuals, not just work for them.",
            "I want to bring my skills as Full Stack Developer and SEO and work together to solve real business-problems.",
            "Feel free to reach out through any platforms bellow:",
            "<a className='contact__email link-no-style link-highlight' href='mailto:info@marcovaleri.net'>info@marcovaleri.net</a>"
        ]
    },
    {
        page: "cookie policy",
        content: [
            "<strong>Cookie Policy</strong>",
            "This website uses cookies for essential functions, such as ensuring the website works properly and providing a smooth user experience. However, I do not collect, store, or share any personal data from our visitors.",
            "<strong>What are cookies?</strong>",
            "Cookies are small text files that websites store on your computer or device. They are widely used to make websites function correctly and to provide information to website owners.",
            "<strong>How I use cookies</strong>",
            "I use cookies to:",
            "1 - Enable basic website functionality, such as page navigation and access to secure areas",
            "2 - Remember your preferences, like language or display settings",
            "I want to assure you that the cookies I use do not track or collect any personally identifiable information about you.",
            "<strong>Managing cookies:</strong>",
            "You can control and/or delete cookies as you wish - for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site andsome services and functionalities may not work.",
            "<strong>Changes to this policy:</strong>",
            "I may update this policy from time to time. I will notify you of any changes by posting the new policy on this page.",
            "<strong>Contact me:</strong>",
            "If you have any questions about this policy, please contact me at info@marcovaleri.net.",
        ]
    }
]