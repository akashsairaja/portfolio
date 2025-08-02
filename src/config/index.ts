import wallpaper from '../images/wallpaper.jpg';
import profilePic from '../images/profile.jpg';
import profileBE from '../images/beprofile.jpg';
import wallpaperBE from '../images/bewallpaper.jpg';
import musicPlayer from '../images/app.gif';
import todoApp from '../images/todo.gif';
import homePage from '../images/homepage.gif';

interface Folder {
  icon: string;
  name: string;
}

interface Images {
  wallpaper: string;
  profilePic: string;
  profileBE: string;
  wallpaperBE: string;
  musicPlayer: string;
  todoApp: string;
  homePage: string;
}

interface Skill {
  skill: string;
  icon: string;
}

interface SkillCategory {
  label: string;
  icon: string;
  skills: Skill[];
}

interface Academic {
  mothAndYear: string;
  title: string;
  university: string;
  location: string;
}

interface ExperienceItem {
  timeline: string;
  designation: string;
  icon: string;
  isLink: boolean;
  company: string;
  location: string;
  developed: string[];
  isNewStart?: boolean;
}

interface ContributionItem {
  title: string;
  projectUrl: string;
  imageKey: string;
}

interface Project {
  icon: string;
  title: string;
  client: string;
  description: string;
  company: string;
}

interface Profile {
  aboutme: string;
  email: string;
  dob: string;
  location: string;
  degree: string;
  designation: string;
  [key: string]: string | string[];
}

interface Config {
  folders: Folder[];
  images: Images;
  profile: Profile;
  professionalSkills: SkillCategory[];
  academics: Academic[];
  experience: ExperienceItem[];
  contribution: ContributionItem[];
  projects: Project[];
  resume?: string;
}

const config: Config = {
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
  ],
  experience: [
    {
      timeline: '2021 - Present',
      designation: 'Software Engineer',
      icon: 'fa fa-briefcase',
      isLink: true,
      company: 'Tech Company',
      location: 'Remote',
      developed: ['Web applications', 'APIs'],
      isNewStart: true,
    },
    {
      timeline: '2019 - 2021',
      designation: 'Junior Developer',
      icon: 'fa fa-briefcase',
      isLink: true,
      company: 'Another Tech Company',
      location: 'Chennai, India',
      developed: ['Internal tools', 'Client dashboards'],
    },
  ],
  contribution: [
    {
      title: 'Music Player Application',
      projectUrl: 'https://github.com/akashsairaja/music-player',
      imageKey: 'musicPlayer',
    },
    {
      title: 'Todo Application',
      projectUrl: 'https://github.com/akashsairaja/todo-app',
      imageKey: 'todoApp',
    },
    {
      title: 'Portfolio Website',
      projectUrl: 'https://github.com/akashsairaja/portfolio',
      imageKey: 'homePage',
    }
  ],
  projects: [
    {
      icon: 'fa fa-rocket',
      title: 'Project A',
      client: 'Client A',
      description: 'Description of Project A',
      company: 'Tech Company',
    },
    {
      icon: 'fa fa-rocket',
      title: 'Project B',
      client: 'Client B',
      description: 'Description of Project B',
      company: 'Another Tech Company',
    },
  ],
  academics: [
    {
      mothAndYear: '2014 - 2018',
      title: 'Bachelor of Engineering',
      university: 'Example University',
      location: 'Chennai, India',
    },
    {
      mothAndYear: '2018 - 2020',
      title: 'Master of Business Administration',
      university: 'Example Business School',
      location: 'Chennai, India',
    },
  ],
};

export default config;
