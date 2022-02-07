module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Richard Timpson',
    // Main Site Title
    title: `Richard Timpson | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer @ Salesforce. Based in Salt Lake City, Utah`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,

    // Optional: Github account URL
    github: `https://github.com/richt3211`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/richard-w-timpson/`,
    // Content of the About Me section
    about: `I am a Software Engineer with a passion for understanding the first principles of Computer Science, Data Science, Software Engineering, Machine Learning, and how they translate to building useful technology products that have a positive impact on society and our broader culture. I have several years of experience in Software Engineering, with skills ranging from Infrastructure and DevOps engineering to Front-End Web Development. My current interests are in Deep Learning and its application to Artificially Intelligent Music technology products.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Modeling Expressive Musical Performance with Transformers',
        description:
          'An Undergraduate Senior Research Thesis at the University of Utah. Project focused on improving Artificially Intelligent piano performance systems.',
        link: 'https://github.com/richt3211/thesis-paper/blob/master/thesis-final.pdf',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Salesforce',
        description: 'Software Engineer, Jan 2021 - Present',
        link: 'https://www.linkedin.com/in/richard-w-timpson/',
      },
      {
        name: 'Route',
        description: 'Software Engineer, Sep 2020 - Nov 2020',
        link: 'https://www.linkedin.com/in/richard-w-timpson/',
      },
      {
        name: 'Salesforce',
        description: 'Software Engineer Intern, May 2020 - August 2020',
        link: 'https://www.linkedin.com/in/richard-w-timpson/',
      },
      {
        name: 'SunHomes.io',
        description: 'Data Scientist & Software Engineer, August 2019 - Sep 2020',
        link: 'https://www.linkedin.com/in/richard-w-timpson/',
      },
      {
        name: '3M',
        description: 'Software Engineer Intern, May 2019 - August 2019',
        link: 'https://www.linkedin.com/in/richard-w-timpson/',
      },
      {
        name: 'PlusOne Company',
        description: 'Software Engineer, Aug 2018 - May 2019',
        link: 'https://www.linkedin.com/in/richard-w-timpson/',
      },
      {
        name: 'TrueTake Media',
        description: 'Web Developer, Nov 2017 - May 2018',
        link: 'https://www.linkedin.com/in/richard-w-timpson/',
      },
      {
        name: 'PlusOne Company',
        description: 'QA Engineer Intern, May 2017 - Aug 2018',
        link: 'https://www.linkedin.com/in/richard-w-timpson/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Java, Python, C#, JavaScript (TypeScript), Golang, PHP, SQL, HTML, SCSS',
      },
      {
        name: 'Frameworks',
        description:
          'Pytorch, scikit-learn, Spring, Angular, React, Node, .NET, Laravel',
      },
      {
        name: 'Databases',
        description: 'PostgresSQL, MongoDB, MySQL',
      },
      {
        name: 'Infrastrucure/DevOps',
        description:
          'Kubernetes, Docker, Amazon Web Services (AWS), CI/CD, Helm, Terraform'
      },
      {
        name: "Concepts",
        description:
        'Distributed Systems, Machine Learning, REST API, MVC Architecture, Concurrent Programming, Test Driven Development, Statistics and Data Analysis.'
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
