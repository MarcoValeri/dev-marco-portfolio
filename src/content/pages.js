const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const getDate = new Date();
const getTheDay = getDate.getDate();
const getTheMonth = getDate.getMonth();
const getTheYear = getDate.getFullYear();
const getTodayDate = `${getTheDay} ${months[getTheMonth]} ${getTheYear}`;

export const PAGES = [
    {
        page: "about",
        content: [
            [
                "23 January 1984",
                [
                    "I was born on a cold Monday morning in Rome, Italy, on January 23, 1984.",
                    "I've always embraced Monday mornings as a fresh start and a chance to pursue my passions. This enthusiasm for new beginnings has fueled my passion for a career in development, where every project is a chance to learn and grow."
                ]
            ],
            [
                "1 March 2015",
                [
                    "In 2015, my passion for technical SEO and JavaScript led me to London, the heart of the tech industry.",
                    "The move opened up a world of opportunities, where I collaborated with talented developers from diverse backgrounds, honed my skills on cutting-edge projects, and expanded my professional network."
                ]
            ],
            [
                "01 August 2016",
                [
                    "In 2016, I founded ViaggIn, an Italian travel magazine.",
                    "In just a few years, I grew ViaggIn to over 300k monthly views by combining my passion for travel with my expertise in SEO and coding. You can explore ViaggIn and discover my passion for travel, SEO, and coding."
                ]
            ],
            [
                "01 October 2018",
                [
                    "In 2018, I decided to further my knowledge by studying Computer Science at Birkbeck University of London.",
                    "Birkbeck provided an incredible environment where I connected with like-minded individuals passionate about programming languages and new technologies. During my studies, I delved into object-oriented and functional programming paradigms, explored database design principles, and honed my skills in JavaScript, Python, and Java."
                ]
            ],
            [
                "01 July 2021",
                [
                    "July 1st, 2021, marked a special date in my career as I landed my first role as a Junior Full Stack Developer at <a href='https://www.heavypenguin.com/' target='_blank' rel='noreferrer noopener'>Heavy Penguin</a>, a renowned web agency.",
                    "At Heavy Penguin, I embraced agile methodologies like Scrum and Kanban, which taught me to prioritize tasks, collaborate effectively, and deliver projects on time. I also honed my skills in JavaScript, PHP, and Python while working on impactful projects for prestigious clients like the Institute of the Motor Industry and Cambridge University."
                ]
            ],
            [
                "01 August 2021",
                [
                    "It has been a great day: the first August 2021 I got my Foundation Degree in Computer Science at the <a href='https://www.bbk.ac.uk/' target='_blank' rel='noreferrer noopener'>BirkBeck University of London</a>."
                ]
            ],
            [
                "03 January 2022",
                [
                    "After gaining experience as a full-stack developer, I realized my passion lay in creating engaging user experiences, which led me to specialize in front-end development.",
                    "On January 3rd, 2022, I embarked on an exciting new chapter as a Junior Front-End Developer at <a href='https://sobold.co.uk/' target='_blank' rel='noreferrer noopener'>SoBold</a>, a leading web development company in central London. This role allowed me to deepen my understanding of front-end technologies and collaborate on high-profile projects for prestigious clients like Coller Capital, Arenko, Kapow, Common Purpose, Jamie and the Jam, and many more."
                ],
            ],
            [
                "01 September 2023",
                [
                    "In September 2023, I joined <a href='https://www.cherrythinking.com/' target='_blank' rel='noreferrer noopener'>Cherry</a> as a React Developer, marking another exciting step in my career.",
                    "At Cherry, I continue to work on large-scale, complex React applications in the healthcare sector, utilizing my skills in React, JavaScript, Node.js, and TypeScript. This experience has allowed me to further deepen my expertise in front-end development while contributing to meaningful projects that make a real-world impact."
                ]
            ],
            [
                `${getTodayDate}`,
                [
                    "Today, I'm proud to say I've found my dream job as a web developer, and I still love every Monday morning because of it.",
                    "My main goal is to increase customer satisfaction by delivering robust, maintainable code that reduces technical debt. Currently, I work primarily with Node.js, React, and TypeScript, but I'm a quick learner and can easily adapt to new technologies while maintaining a strong foundation in established ones.",
                    "I'm particularly passionate about the JavaScript environment, as it enables the creation of faster, more responsive web applications, which is why I enjoy using Node.js and React together."
                ]
            ]
        ]
    },
    {
        page: "contact",
        content: [
            "I'm actively seeking collaborative partnerships with companies, agencies, or individuals who are passionate about solving real business problems.",
            "I bring expertise in React, Node.js, and TypeScript development, along with a proven track record in technical SEO and performance optimization.",
            "Let's connect and explore how we can leverage my skills to achieve your business goals. You can reach me at:",
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