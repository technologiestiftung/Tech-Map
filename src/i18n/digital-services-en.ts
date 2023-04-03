import { Content } from './digital-services-de'

export const content: Content = {
  description: {
    title: 'Tech Map',
    subTitle: 'Digital Service Team',
    disclaimerDesktop:
      'Welcome to our Tech Map. \n\nOn this map we locate and categorize the technologies we use.\n\n To get more information about a tool you can select the individual stations on the map.',
    disclaimerMobile:
      'Welcome to our Tech Map. \n\nOn this map we locate and categorize the technologies we use.\n\n More information on how to use the map can be found in our info box, which can be opened by clicking the button below.',
    manual: {
      usage: {
        title: 'How to use the map',
        description:
          'On this map we locate the technologies we use and categorize them.\n\nTo get more information about a tool you can select the individual stations on the map.',
      },
      zones: {
        title: 'Explanation of the zones',
        description:
          'To locate the state of the respective technology in our daily work, we work with different categories, which are visualized on the map as "zones".',
      },
    },
    zones: {
      hauptzone: {
        title: 'Hauptzone',
        description:
          'The technologies that have proven to be stable over a longer period of time and several projects are collected here under this item.',
      },
      neueZone: {
        title: 'Neue Zone',
        description:
          'Technologies that have been used for the first time but have the potential to become part of the standard repertoire after further testing.',
      },
      haltezone: {
        title: 'Haltezone',
        description:
          'Here are technologies that we do not recommend further, but are still occasionally used in existing projects.',
      },
      wunschzone: {
        title: 'Wunschzone',
        description:
          'This is where we collect technologies that look promising and that we may have even prototyped with, but lack experience on production environments.',
      },
    },
    lines: {
      tools: 'Tools',
      frameworks: 'Frameworks',
      programming: 'Programming',
      hardware: 'Hardware',
    },
  },
  technologies: {
    adobe: {
      title: 'Adobe Creative Cloud',
      description:
        'The Adobe Creative Cloud is still in use by other departments of the Technologiestiftung, mainly for print based work. For the digital projects we work on as Digital Service Team we try to avoid it.',
      link: 'https://www.adobe.com',
      displayLink: 'https://www.adobe.com',
    },
    asana: {
      title: 'Asana',
      description: 'To organise our work and our scrum process we  use Asana.',
      link: 'https://asana.com',
      displayLink: 'https://asana.com',
    },
    arduino: {
      title: 'Arduino',
      description:
        'Arduino are microcontroller development boards that have a large community, because they are cheap and especially because very many instructions can be found on the Internet, which makes it easier to get started. There are different Arduino microcontroller development boards available, for every project the right one. These are often used to record data from sensors, but also to build small robots or the like. For some time now Arduino has been getting strong competition from ESP32, these microcontroller development boards are partly more powerful, smaller and have WLAN and Bluetooth included, which makes them very attractive. Both are programmed with C/C++. The microcontroller development boards are more economical than the Pi.',
      link: 'https://www.arduino.cc/',
      displayLink: 'https://www.arduino.cc/',
    },
    aws: {
      title: 'AWS',
      description:
        'Amazon Web Services (AWS) is a cloud computing platform provided by Amazon. It offers a wide range of cloud-based services, including computing power, storage, databases, analytics, and machine learning, to help scale and grow applications and infrastructure.',
      link: 'https://aws.amazon.com/',
      displayLink: 'https://aws.amazon.com/',
    },
    bullseye: {
      title: 'OS Bullseye',
      description: 'Bullseye is the newest Linux Destrubution for the Raspberry Pi',
      link: 'https://www.raspberrypi.com/software/operating-systems/',
      displayLink: 'https://www.raspberrypi.com',
    },
    c: {
      title: 'C/C++',
      description:
        'C++ can do everything that C can do but inverted this is not the case. Both are often used in conjunction with hardware components, the reason being that both work very close to the machine level, but the C compiler is faster than the C++ compiler.',
      link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
      displayLink: 'Wikipedia Link',
    },
    datasette: {
      title: 'Datasette',
      description:
        'Datasette is an open-source web application that allows users to explore and publish data using SQL queries. It is built with Python and SQLite and provides a simple way to convert CSV, JSON, and other data formats into an SQLite database that can be easily queried using SQL statements. With Datasette, users can quickly create a web-based interface for their data, which allows them to explore and visualize their data using a range of charts and graphs. Its variant DatasetteLite runs serverless, entirely inside the browser.',
      link: 'https://datasette.io/',
      displayLink: 'https://datasette.io/',
    },
    django: {
      title: 'Django',
      description:
        'Django is a high-level open-source web framework written in Python that follows the model-view-controller (MVC) architectural pattern. It handles database access, URL routing, user authentication, modelling via its own ORM (Object-Relational Mapping), a templating engine that allows developers to create dynamic HTML pages by rendering data with templates and a built-in administration interface that allows non-technical users to manage the data in the application. Django is widely used for building web applications and is known for its scalability, security, and robustness.',
      link: 'https://www.djangoproject.com/',
      displayLink: 'https://www.djangoproject.com/',
    },
    docker: {
      title: 'Docker',
      description:
        'Docker is a de facto standard for containers, a package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings',
      link: 'https://www.docker.com',
      displayLink: 'https://www.docker.com',
    },
    esp32: {
      title: 'ESP-32',
      description:
        'ESP32 are microcontroller development boards, which are very powerful, small and cheap. For this reason, its has a great popularity. Also thanks to integrated Wi-Fi and Bluetooth, which, for example, the boards from Arduino do not have. Thus, you can implement with these fast projects, another advantage you can use them with Arduino IDE. Like Arduino, they can be used for sensor data acquisition and other projects. On the Internet you can find many examples to follow, which facilitates the Einstig. It is programmed with C/C++.',
      link: 'https://www.espressif.com/en/products/socs/esp32',
      displayLink: 'https://www.espressif.com/',
    },
    fastapi: {
      title: 'FastAPI',
      description:
        'FastAPI is a modern, fast, asynchronous web framework for building APIs with Python 3.7+ based on standard Python type hints. It is designed to be fast, easy to use, and to help developers build APIs quickly and efficiently. It provides automatic data validation, serialization, and documentation using the OpenAPI and JSON Schema standards, making it easy for developers to create well-documented and easy-to-use APIs',
      link: 'https://fastapi.tiangolo.com/',
      displayLink: 'https://fastapi.tiangolo.com/',
    },
    figma: {
      title: 'Figma',
      description:
        'Figma is our go-to-tool when it comes to design work. Our Figma workflow starts with Ideation and Conception, gives us the opportunity to prototype in every state and fidelity and in the end we use it for the Development Handover of the flows and Visual Designs. ',
      link: 'https://www.figma.com/',
      displayLink: 'https://www.figma.com',
    },
    folium: {
      title: 'Folium',
      description:
        'Folium is a Python library used for creating interactive maps and visualizations. It is built on top of the Leaflet JavaScript library, an open-source library for interactive maps. Folium allows users to create maps using data from various sources such as GeoJSON files, Pandas DataFrames, and Python dictionaries.',
      link: 'https://python-visualization.github.io/folium/',
      displayLink: 'https://python-visualization.github.io/folium/',
      status: 'wunschzone',
      technologyLine: 'frameworks',
      icon: { coordinates: [182.5, 3351.6814748361116], orientation: 'SW' },
    },
    github: {
      title: 'Github',
      description: 'We use Github for version management for all software development projects.',
      link: 'https://github.com',
      displayLink: 'https://github.com',
    },
    html: {
      title: 'HTML/CSS3',
      description:
        'HTML (HyperText Markup Language) is the most basic building block of the www. Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML No web without HTML and CSS.',
      link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
      displayLink: 'MDN-Web-docs',
    },
    javascript: {
      title: 'JavaScript',
      description:
        'Not only our frontends are mainly written in JavaScript, it is also used in various backend frameworks we use.',
      link: 'developer.mozilla.org/en-US/docs/Web/JavaScript',
      displayLink: 'MDN-Web-docs',
    },
    jekyll: {
      title: 'Jekyll',
      description:
        'In cooperation with external stakeholders jekyll has already been used and it can still be found in one or the other codebase. However, it is not our go-to tool.',
      link: 'https://jekyllrb.com/',
      displayLink: 'https://jekyllrb.com/',
    },
    jira: {
      title: 'Atlassian Jira',
      description:
        'To organize our collaboration, we used the different types of boards that Jira provides us. However, we will switch to Asana in the future.',
      link: 'https://jira.atlassian.com',
      displayLink: 'www.figma.com',
    },
    jupyter: {
      title: 'Jupyter Notebook',
      description:
        'Jupyter Notebook is an open-source web application that allows users to create and share documents that contain live code, equations, visualizations, and narrative text. It is widely used in data science, scientific computing, and machine learning as a convenient and interactive environment for prototyping and data exploration. It supports multiple programming languages, mainly Python, and allows users to write, execute, and analyze code in a web browser. Its variant JupyterLite works serverless, living completely inside the browser.',
      link: 'https://jupyter.org/',
      displayLink: 'https://jupyter.org/',
    },
    leaflet: {
      title: 'leaflet',
      description:
        'Leaflet is a JavaScript library for creating Web-Gis applications and is already being tested in our company.',
      link: 'https://leafletjs.com/',
      displayLink: 'https://leafletjs.com/',
    },
    linux: {
      title: 'Linux',
      description:
        'Linux is an open, freely accessible operating system. There are also different distributions available, for example for the Raspberry Pis, desktop PCs and other applications adapted operating systems. Since Linux is open source and has existed for a long time, the community is very large. Nevertheless, Linux on PCs and laptops is a niche product.',
      link: 'https://en.wikipedia.org/wiki/Linux',
      displayLink: 'Wikipedia Link',
    },

    lorawan: {
      title: 'LoRaWan',
      description:
        'LoRaWAN belongs to the Low Power Wide Area Network (LPWAN). What does LPWAN mean, what does LPWAN stand for, it stands for sending data over a long distance and at the same time low energy consumption. With LoRaWAN you can bridge 1 to 2 km in cities and even up to 10 km or more in rural areas. Distances of up to 50 km or more have even been overcome. However, this depends on various conditions, such as the height of the connected sensors, obstacles such as walls and the like. LoRaWAN has even been used in power plants, and even these thick walls could be penetrated by LoRaWAN. Because of these properties, it is finding great application in the Internet of Things field. However, the disadvantage is that the transmission time and data rate are low. However, this is always sufficient for the transmission of sensor data. Another advantage is that LoRaWAN uses a frequency range that is freely accessible and usable for everyone, so you do not have to ask permission if you want to start your own project. Only the appropriate hardware is needed. With a gateway you can for example cover your whole house.',
      link: 'https://en.wikipedia.org/wiki/LoRa',
      displayLink: 'Wikipedia Link',
    },
    mapbox: {
      title: 'mapbox',
      description:
        'Mapbox is a mapping library which is now closed-sourced and therefore will not be used by us in the future.',
      link: 'https://www.mapbox.com/',
      displayLink: 'https://www.mapbox.com/',
    },
    maplibre: {
      title: 'maplibre',
      description:
        'MapLibre was created as an open-source fork of mapbox and might be used by us in the future.',
      link: 'https://maplibre.org',
      displayLink: 'https://maplibre.org',
    },
    matomo: {
      title: 'Matomo',
      description:
        'We are big fans of privacy, so we are seeing the need to use analytics software - but if it will be needed in the future we would like to use Matomo.',
      link: 'https://matomo.org',
      displayLink: 'https://matomo.org',
    },
    md: {
      title: 'MD/MDX',
      description:
        'Using Markdown, our authors can insert formatted text into our code without further editing, and correct existing text through its readability. MDX complements this markup language with JSX, which enables its use in modern JS frameworks.',
      link: 'https://mdxjs.com/',
      displayLink: 'https://mdxjs.com/',
    },
    meshnet: {
      title: 'Mesh Networks',
      description:
        'Mesh networks are currently used to increase the WLAN range in the home. One advantage over repeaters is that the data rate remains the same. Another advantage of the mesh is that if enough nodes are available, that even in case of failure or addition of new ones, these automatically log into the network or look for a new way to forward the data in case of failure. Since the mesh network uses only one SSID, it is not necessary to log in again and again. A disadvantage is, however, that a high energy consumption is present, depending on how many mesh nodes you use.',
      link: 'https://en.wikipedia.org/wiki/Mesh_networking',
      displayLink: 'Wikipedia Link',
    },
    mongodb: {
      title: 'MongoDB',
      description:
        'MongoDB ist eine quelloffene, dokumentenorientierte NoSQL-Datenbank, die ein JSON-ähnliches Format zum Speichern und Abrufen von Daten verwendet und auf hohe Leistung, Skalierbarkeit und Verfügbarkeit ausgelegt ist. Sie ist eine beliebte Wahl für moderne Webanwendungen und Big-Data-Lösungen. MongoDB unterstützt dynamische Schemata, so dass Datenstrukturen ohne Ausfallzeiten oder komplexe Migrationen geändert werden können. Darüber hinaus bietet es fortschrittliche Funktionen wie automatisches Sharding, Replikatsätze, geografische Indizierung und Volltextsuche.',
      link: 'https://www.mongodb.com/',
      displayLink: 'https://www.mongodb.com/',
    },
    msoffice: {
      title: 'Microsoft Office 365',
      description:
        'We use Microsoft Office 365 for documentation, presentations and spreadsheets, as well as Outlook as our email and calendar program and OneDrive as a cloud hosting provider for MS Office documents.',
      link: 'https://www.office.com',
      displayLink: 'https://www.office.com',
    },
    netlify: {
      title: 'Netlify',
      description:
        'Netlify is our first choice for deploying all web applications thanks to its easy integration and dynamic updating. ',
      link: 'https://www.netlify.com/',
      displayLink: 'https://www.netlify.com/',
      status: 'hauptzone',
      technologyLine: 'tools',
      icon: { coordinates: [1220.5, 1700.4509841302233], orientation: 'SE' },
    },
    netlifyCMS: {
      title: 'NetlifyCMS',
      description:
        'NetlifyCMS is a free CMS service which connects directly to a git platform and uses it as a DB. Unfortunately it is no longer meintained by Netlify and therefore we have no future with it.',
      link: 'https://www.netlifycms.org/',
      displayLink: 'https://www.netlifycms.org/',
    },
    newsletterToGo: {
      title: 'Newsletter2Go/SendInBlue',
      description:
        'The various newsletters of the Technology Foundation run via SendInBlue, but we in the Digital Service Team are also happy to look around for alternatives with more creative freedom.',
      link: 'https://sendinblue.com',
      displayLink: 'https://www.sendinblue.com',
    },
    node: {
      title: 'node.js',
      description:
        'Node.js is a runtime that allows JavaScript to be executed outside the browser. Essential as a development server, we also use it in production.',
      link: 'https://nodejs.org/',
      displayLink: 'https://nodejs.org/',
    },
    penpot: {
      title: 'Penpot',
      description:
        'Of course we are big fans of FOSS, so we are excited to see an open source design tool evolving and can‘t wait to put our hands on Penpot when it reaches a state where we can use it in production.',
      link: 'https://penpot.app',
      displayLink: 'https://penpot.app',
    },
    postgrsql: {
      title: 'PostgreSQL',
      description:
        'PostgreSQL ist eine relationale Open-Source-Datenbank, die für ihre Robustheit, Skalierbarkeit und ihren erweiterten Funktionsumfang bekannt ist, insbesondere für ihre PostGIS-Erweiterung.',
      link: 'https://www.postgresql.org/',
      displayLink: 'https://www.postgresql.org/',
    },
    python: {
      title: 'python',
      description:
        'Python is one of the most used programming language, dominant in data science, popular for its simplicity, readability, and ease of use. It is also very interesting for interacting with software built in other languages.',
      link: 'https://www.python.org/',
      displayLink: 'https://www.python.org/',
    },
    raspberryPy: {
      title: 'Raspberry Pi',
      description:
        'Raspberry Pis are single board computers which were available for a low price before Corona. With these small power protzen different projects can be realized. Since these are very small, comparable to a cigarette box, this can be accommodated space-saving. Also, the consumption is very low and thus it finds popularity as a server for example home automation or media servers, but also partly in the industry. There is actually nothing you can not realize with a Pi! For this reason, the community is also very large. However, as far as the future of the Pis is concerned, it is not yet clear, because due to supply bottlenecks and other problems of the economy, the Pis are currently difficult to get and the prices have increased extremely, which makes the Pis again somewhat less attractive. Nevertheless, since the Pis are open source in terms of hardware and software, it will remain a popular tool for the community.',
      link: 'https://www.raspberrypi.com',
      displayLink: 'https://www.raspberrypi.com',
    },
    react: {
      title: 'React/Next.js',
      description:
        'The component-based JavaScript library is our first choice when it comes to frontends. We prefer to use the Next.js framework because of its performance through server-side rendering.',
      link: 'https://nextjs.org/',
      displayLink: 'https://nextjs.org/',
    },
    sass: {
      title: 'Sass/SCSS',
      description:
        'We use SCSS in our stylesheets to extend CSS with variables, functions, nesting and simplified synthax.',
      link: 'https://sass-lang.com/',
      displayLink: 'https://sass-lang.com/',
    },
    slack: {
      title: 'Slack',
      description:
        'Our internal communication mostly works via Slack Channels. Also we like to use it in our other projects if possible.',
      link: 'https://slack.com',
      displayLink: 'https://slack.com',
    },
    solidjs: {
      title: 'SolidJS',
      description:
        'SolidJS is not yet used by us on a regular basis. We think the framework has potential and could offer an alternative to the React library in the future.',
      link: 'https://www.solidjs.com/',
      displayLink: 'https://www.solidjs.com/',
    },
    strapi: {
      title: 'Strapi (CL)',
      description:
        'Strapi is an open-source, highly customizable, headless content management system (CMS) built with Node.js. It allows developers to quickly create and manage content APIs, which can be consumed by various frontend applications, including web and mobile apps. It features custom content types, access controls and permissions for different user roles. The platform includes a user-friendly admin interface to create and manage content.',
      link: 'https://strapi.io/',
      displayLink: 'https://strapi.io/',
    },
    streamit: {
      title: 'streamlit',
      description:
        'Streamlit is an open-source Python library used for building interactive data science and machine learning web applications. With Streamlit, developers can quickly create user interfaces for their data analysis or machine learning models without the need for front-end development skills, turning them into shareable web apps.',
      link: 'https://streamlit.io/',
      displayLink: 'https://streamlit.io/',
    },
    tailwind: {
      title: 'Tailwind',
      description:
        'Tailwind is another CSS framework that is firmly in our saddle. It allows standardized and fast UI styling within the components.',
      link: 'https://tailwindcss.com/',
      displayLink: 'https://tailwindcss.com/',
    },
    typescript: {
      title: 'TypeScript',
      description:
        'TypeScript has become a standard. Also at our company. It adds static types to JS, helps debugging and prevents errors in the production environment.',
      link: 'https://www.typescriptlang.org/',
      displayLink: 'https://www.typescriptlang.org/',
    },
    typo3: {
      title: 'TYPO 3',
      description:
        'TYPO3 is an open-source CMS, which has been in use for a long time. However, it is rarely used for new projects.',
      link: 'https://typo3.org/',
      displayLink: 'https://typo3.org/',
    },
    vscode: {
      title: 'VS Code',
      description:
        'Everyone uses the coding environment of her or his choice but most of us have at least installed VS Code.',
      link: 'https://code.visualstudio.com',
      displayLink: 'https://code.visualstudio.com',
    },
    vue: {
      title: 'Vue',
      description:
        'In cooperation with external stakeholders, we occasionally work with Vue.js. However, our standard is ReactJS.',
      link: 'https://vuejs.org/',
      displayLink: 'https://vuejs.org/',
    },
    wordpress: {
      title: 'Wordpress',
      description:
        'Wordpress is the most used CMS in the world. However, we no longer use it for current projects.',
      link: 'https://wordpress.com/',
      displayLink: 'https://wordpress.com/',
    },
  },
  functionality: {
    description: 'Description',
    status: 'Status',
    buttonClosePopover: 'Discover map',
    buttonBackToIndex: 'Back to Index',
    buttonCloseInfobox: 'Close infobox',
    buttonCloseExplanation: 'Close Description',
    impressum: 'Impressum',
    privacyNotice: 'Privacy Notice',
  },
}
export default content
