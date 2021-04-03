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
	],
	images: {
		wallpaper: require('../images/wallpaper.jpg'),
		profilePic: require('../images/profile.jpg'),
		profileBE: require('../images/beprofile.jpg'),
		wallpaperBE: require('../images/bewallpaper.jpg'),
		musicPlayer: require('../images/app.gif'),
		todoApp: require('../images/todo.gif'),
		homePage: require('../images/homepage.gif'),
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
	projects: [
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