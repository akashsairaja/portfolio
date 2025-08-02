// Import images
import wallpaper from '../images/wallpaper.jpg';
import profilePic from '../images/profile.jpg';
import profileBE from '../images/beprofile.jpg';
import wallpaperBE from '../images/bewallpaper.jpg';
import musicPlayer from '../images/app.gif';
import todoApp from '../images/todo.gif';
import homePage from '../images/homepage.gif';

const config = {
	folders: [
		{
			icon: 'fa fa-laptop fa-2x',
			name: 'MyProfile',
		},
		{
			icon: 'fa fa-folder fa-2x',
			name: 'Experience',
		},
		{
			icon: 'fa fa-folder fa-2x',
			name: 'Academics',
		},
		{
			icon: 'fa fa-folder fa-2x',
			name: 'Skills',
		},
		{
			icon: 'fa fa-folder fa-2x',
			name: 'Contribution',
		},
		{
			icon: 'fa fa-folder fa-2x',
			name: 'Projects',
		},
	],
	images: {
		wallpaper,
		profilePic,
		profileBE,
		wallpaperBE,
		musicPlayer,
		todoApp,
		homePage,
	},
	profile: {
		aboutme: 'HEY! I AM Akash Sai, Software Engineer',
		email: 'akashsairaja@gmail.com',
		dob: '15/07/1996',
		location: 'Chennai , TamilNadu, India',
		degree: 'MBA/ BE',
		designation: 'Software Engineer',
	},
	professionalSkills: [
		{
			label: 'Programming Languages',
			icon: 'fa fa-language',
			skills: [
				{
					skill: 'JAVA',
					icon: 'fa fa-star',
				},
				{
					skill: 'JavaScript',
					icon: 'fa fa-star',
				},
				{
					skill: 'Python',
					icon: 'fa fa-star',
				},
			],
		},
		{
			label: 'Frontend Languages & Frameworks',
			icon: 'fa fa-life-saver',
			skills: [
				{
					skill: 'React',
					icon: 'fa fa-star',
				},
				{
					skill: 'Redux',
					icon: 'fa fa-star',
				},
				{
					skill: 'HTML5',
					icon: 'fa fa-star',
				},
				{
					skill: 'SASS',
					icon: 'fa fa-star',
				},
				{
					skill: 'Bootstrap',
					icon: 'fa fa-star',
				},
			],
		},
		{
			label: 'Scripting / Back-End Frameworks',
			icon: 'fa fa-linux',
			skills: [
				{
					skill: 'Node JS',
					icon: 'fa fa-star',
				},
				{
					skill: 'Spring boot',
					icon: 'fa fa-star',
				},
			],
		},
		{
			label: 'Caching, Querying & Databases',
			icon: 'fa fa-database',
			skills: [
				{
					skill: 'PostgreSQL',
					icon: 'fa fa-star',
				},
				{
					skill: 'Redis',
					icon: 'fa fa-star',
				},
				{
					skill: 'Elastic Search',
					icon: 'fa fa-star',
				},
				{
					skill: 'Mongo DB',
					icon: 'fa fa-star',
				},
				{
					skill: 'MySQL',
					icon: 'fa fa-star',
				},
			],
		},
		{
			label: 'HTTP / TCP',
			icon: 'fa fa-connectdevelop',
			skills: [
				{
					skill: 'REST',
					icon: 'fa fa-star',
				},
				{
					skill: 'Socket IO',
					icon: 'fa fa-star',
				},
			],
		},
		{
			label: 'Messaging / Steaming',
			icon: 'fa fa-chain',
			skills: [
				{
					skill: 'Apache Kafka',
					icon: 'fa fa-star',
				},
				{
					skill: 'MQTT',
					icon: 'fa fa-star',
				},
			],
		},
		{
			label: 'Container Technology',
			icon: 'fa fa-cloud',
			skills: [
				{
					skill: 'Docker',
					icon: 'fa fa-star',
				},
			],
		},
		{
			label: 'Automation / Testing Frameworks',
			icon: 'fa fa-cloud',
			skills: [
				{
					skill: 'Cypress',
					icon: 'fa fa-star',
				},
				{
					skill: 'Mocha/Chai',
					icon: 'fa fa-star',
				},
			],
		},
		{
			label: 'Other Tools',
			icon: 'fa fa-tasks',
			skills: [
				{
					skill: 'GIT',
					icon: 'fa fa-star',
				},
				{
					skill: 'Maven',
					icon: 'fa fa-star',
				},
				{
					skill: 'ServiceNow',
					icon: 'fa fa-star',
				},
				{
					skill: 'JIRA',
					icon: 'fa fa-star',
				},
			],
		},
		{
			label: 'Development Tools',
			icon: 'fa fa-hourglass-end',
			skills: [
				{
					skill: 'Web Storm',
					icon: 'fa fa-star',
				},
				{
					skill: 'Visual Code',
					icon: 'fa fa-star',
				},
				{
					skill: 'Postman',
					icon: 'fa fa-star',
				},
			],
		},
	],
	academics: [
		{
			mothAndYear: 'March, 2021',
			title: 'MBA - International Business',
			university: 'Pondicherry University',
			location: 'Chennai, Tamil Nadu',
		},
		{
			mothAndYear: 'May, 2017',
			title: 'Electronics & Communication - Engineer',
			university: 'Meenakashi University',
			location: 'Chennai, Tamil Nadu',
		},
		{
			mothAndYear: 'May, 2013',
			title: 'Intermediate, Biology',
			university: 'Avichi Higher Secondary School',
			location: 'Chennai, Tamil Nadu',
		},
		{
			mothAndYear: 'May, 2011',
			title: 'High School',
			university: 'Pathipaga Chemmal K Ganapathy Government Higher secondary School',
			location: 'Chennai, Tamil Nadu',
		},
	],
	contribution: [
		{
			title: 'Music Player App - HTML5 - React - Nodejs',
			projectUrl: 'https://github.com/akashsairaja/Audio-Player-HTML5-React-NodeJS',
			imageKey: 'musicPlayer',
		},
		{
			title: 'Todo App Starter Kit for React - Redux / Node JS',
			projectUrl: 'https://github.com/akashsairaja/todo-application',
			imageKey: 'todoApp',
		},
		{
			title: 'Set as your home page',
			projectUrl: 'https://github.com/akashsairaja/set-your-homepage',
			imageKey: 'homePage',
		},
	],
	projects: [
		{
			title: 'Lima - Cloud Enteripise Data HUB',
			client: 'Intel, Logitech, Nokia',
			icon: 'fa fa-cloud',
			description: 'Create and manage remote data source connections such as File\n' +
				'\t\t\t\t\t\t\tSystems (HDFS, S3, etc.), Database Systems (MSSQL, ORALCE, MySQL,\n' +
				'\t\t\t\t\t\t\tMongoDB, etc.) and to load the data into different systems using Node ,\n' +
				'\t\t\t\t\t\t\tGo API. Clients can create transformations such as to perform query\n' +
				'\t\t\t\t\t\t\toperations like Join, Union and Upsert etc. from UI. Node will help\n' +
				'\t\t\t\t\t\t\tto generate data and pass to backend to perform the Big Data\n' +
				'\t\t\t\t\t\t\tOperations using Spark and NodeJS. Workflows are set of\n' +
				'\t\t\t\t\t\t\ttransformations and data load that can be scheduled. Scheduling is\n' +
				'\t\t\t\t\t\t\tdone through Node scheduler Micro service. In Node Part we have made\n' +
				'\t\t\t\t\t\t\tthe Architecture as to Micro services and Standalone Apps. Each\n' +
				'\t\t\t\t\t\t\tMicro service will serve REST API’s for each modules. Load Balancer\n' +
				'\t\t\t\t\t\t\tservice is used to balance and reroute all REST API’s hits from UI.',
			company: 'Aline - Consulting Oy',
		},
		{
			title: 'DEMAND MANAGEMENT AND PLANNING',
			client: 'Nokia',
			icon: 'fa fa-chain',
			description: 'The project was done as to handle Big Data from NodeJS. Users will\n' +
				'\t\t\t\t\t\t\tupload their large scale files from UI, Node will process and parse\n' +
				'\t\t\t\t\t\t\tthe files and made as JSON object based on metadata, then backend\n' +
				'\t\t\t\t\t\t\tdid queries and process such as data validation, referential\n' +
				'\t\t\t\t\t\t\tverification & auto create functionality. Then finally load the\n' +
				'\t\t\t\t\t\t\tvalid records into master tables and invalid into log tables which\n' +
				'\t\t\t\t\t\t\tis flexible to check business users.',
			company: 'Aline - Consulting Oy',
		},
		{
			title: 'ONLINE BOOKING HOTELS, CARS, TAXI AND ACTIVITES',
			client: 'XeniApp',
			icon: 'fa fa-tripadvisor',
			description: 'XeniApp is a travel booking portal that allows you to browse and\n' +
				'\t\t\t\t\t\t\tbuild your trip itinerary on a single page. You can add flights,\n' +
				'\t\t\t\t\t\t\thotels, car rentals, transfer and Activities by simply dragging and\n' +
				'\t\t\t\t\t\t\tdropping them into your itinerary and book multiple items in one\n' +
				'\t\t\t\t\t\t\tclick.',
			company: 'XeniApp',
		},
		{
			title: 'Web Scrapping Tool',
			client: '',
			icon: 'fa fa-terminal',
			description: 'The project was done as to Scrap the product information’s like\n' +
				'\t\t\t\t\t\t\tcategory, specifications, technical description, images, review’s\n' +
				'\t\t\t\t\t\t\tfrom Amazon. UI driven triggering the python scripts, from there\n' +
				'\t\t\t\t\t\t\tscript produce data , updating it in MY-SQL and exporting file',
			company: 'EVERDEAR INFRACON PRIVATE LIMITED',
		},
	],
	experience: [
		{
			timeline: 'March 29, 2021',
			designation: 'Full Stack Software Engineer',
			company: 'Growthops',
			location: 'Kalampur, Malaysia',
			icon: 'fa fa-check',
			isNewStart: false,
			isLink: false,
			developed: [],
		},
		{
			timeline: 'March , 29, 2021',
			isNewStart: true,
			isLink: false,
			developed: [],
			designation: '',
			location: '',
			icon: '',
		},
		{
			timeline: 'March 26, 2021',
			designation: 'Full Stack Developer',
			company: 'Aline - Consulting Private Limited',
			location: 'Chennai, Hyderbad - India',
			icon: 'fa fa-check',
			isNewStart: false,
			isLink: false,
			developed: [
				'Developed Dynamic Layout / Form Builder for Process Automation Tool (BPM)',
				'Developed common components to connect, view data from various external systems',
				'Implemented / Developed complete Environment Management tool screens which is used ' +
				'to control the complete product micro services fromUI Driven',
				'Developed Draggable / Droppable components',
				'Developed customized DataGrid to search, view , filter ,edit ,manage ,reusable',
				'Implemented JWT based Single Sign on mechanism (SSO), Session, Log Management in Front-End.',
			],
		},
		{
			timeline: 'January 25, 2020',
			designation: 'Back-End Engineer',
			company: 'Aline - Consulting Private Limited',
			location: 'Chennai, Hyderbad - India',
			icon: 'fa fa-star',
			isNewStart: false,
			isLink: false,
			developed: [
				'Developed apis to connect, view, extract file / data from various external systems like HDFS, S3, FTP , SFTP,MySql , MSSQL, Mongodb, TeraData, Saphana , PostgreSQL, Cassendra.',
				'Developed Kerberos Based Authentication system for MS-SQL, Sap Hana & Teradata (Intel Specific).',
				'Developed Scheduling based Script’s to insert, update, delete records and send email status to user',
				'Implemented JWT based Single Sign on mechanism (SSO), Session Management , oauth using passport.',
				'Developed import and export functionality, Migration Assistant',
				'Developed dynamic Query Builder to perform Spark SQL operations',
				'Developed API’s for booking Hotel, Cars, taxis and Activities with Stripe (CROSS API CALLS)',
			],
		},
		{
			timeline: 'July 18, 2018',
			isNewStart: true,
			isLink: false,
			developed: [],
			designation: '',
			location: '',
			icon: '',
		},
		{
			timeline: 'April 02, 2018',
			designation: 'Junior Application Developer',
			company: 'EVERDEAR INFRACON PRIVATE LIMITED',
			location: 'Chennai - India',
			icon: 'fa fa-check',
			isNewStart: false,
			isLink: false,
			developed: [
				'Developed Python script with selenium web driver, beautiful soup to pull product information based on asin ids',
				'Implemented trigger / stop the python script and update the status during scrapping.',
				'Developed extracting process and loading the data in MySQL.',
			],
		},
		{
			timeline: 'May 14, 2017',
			designation: 'Freelancer',
			company: 'Web Developer / Media Editor',
			location: 'somewhere in the world',
			icon: 'fa fa-check',
			isNewStart: false,
			isLink: true,
			developed: [
				'https://www.instagram.com/minicuts',
				'https://www.youtube.com/minicuts',
				'http://amirthavalligroups.com/',
				'http://www.blueballtechnologies.com/',
				'http://www.happystaysolutions.com/',
			],
		},
		{
			timeline: 'Engineering Graduate / May -2017',
			isNewStart: true,
			developed: [],
			designation: '',
			location: '',
			icon: '',
		},
	],
	resume: '', //https://www.drive.com/akashresume.pdf
};

export default config;
