/**
 * Application Constants
 * 
 * Centralized constants used throughout the app
 */

export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    ME: '/auth/me',
  },
  SESSION: {
    CREATE: '/session/create',
    JOIN: '/session/join',
    END: '/session/end',
    LEAVE: '/session/leave',
    GET: '/session', // Base path, append roomId
    LIST: '/session/list',
  },
  // ZEGO token generation moved to frontend - no backend endpoint needed
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  HOST: '/host',
  JOIN: '/join',
};

export const ZEGO_CONFIG = {
  APP_ID: process.env.REACT_APP_ZEGO_APP_ID,
  SERVER_SECRET: process.env.REACT_APP_ZEGO_SERVER_SECRET || '', // Optional for test tokens
};

/**
 * App Configuration
 * Brand information and app-wide settings
 */
export const APP_CONFIG = {
  // Brand Information
  APP_NAME: 'Hirevix Live',
  APP_DESCRIPTION: 'The official recruitment, interview and collaboration platform by Hirevix. Conduct secure interviews, HR discussions, candidate assessments and professional meetings from anywhere.',
  APP_TAGLINE: 'Powering Smarter Hiring',
  
  // Social Media Links
  SOCIAL_LINKS: {
    GITHUB: 'https://github.com',
    TWITTER: 'https://twitter.com',
    LINKEDIN: 'https://linkedin.com',
    EMAIL: 'mailto:hr.hirevex@gmail.com',
  },
  
  // Footer Links
  FOOTER_LINKS: {
    QUICK_LINKS: [
      { label: 'Home', route: '/', isExternal: false },
      { label: 'Dashboard', route: '/dashboard', isExternal: false },
      { label: 'Sign In', route: '/login', isExternal: false },
      { label: 'Sign Up', route: '/register', isExternal: false },
    ],
    SUPPORT_LINKS: [
      { label: 'Help Center', url: '#', isExternal: true },
      { label: 'Documentation', url: '#', isExternal: true },
      { label: 'Privacy Policy', url: '#', isExternal: true },
      { label: 'Terms of Service', url: '#', isExternal: true },
    ],
  },
  
  // Copyright
  COPYRIGHT_TEXT: 'All rights reserved.',
  
  // Features Data (for Home and Dashboard)
  FEATURES: [
    {
      icon: 'FaVideo',
      title: 'Professional HD Interviews',
      description: 'Conduct seamless HD interviews and hiring discussions with candidates from anywhere.',
      shortDescription: 'Professional interview experience',
      color: 'blue'
    },
    {
      icon: 'FaComments',
      title: 'Live Hiring Collaboration',
      description: 'Collaborate with recruiters, HR teams and candidates using live chat and screen sharing.',
      shortDescription: 'Recruitment collaboration',
      color: 'green'
    },
    {
      icon: 'FaShieldAlt',
      title: 'Secure Interview Platform',
      description: 'Private interview rooms with secure authentication for professional hiring.',
      shortDescription: 'Secure interview sessions',
      color: 'purple'
    },
    {
      icon: 'FaUsers',
      title: 'Hirevix Recruitment Workspace',
      description: 'Manage interviews, assessments and recruitment meetings from one unified platform.',
      shortDescription: 'Complete recruitment workspace',
      color: 'indigo'
    }
  ],
  
  // Benefits Data (for Home page)
  BENEFITS: [
    'Professional interview rooms',
    'Candidate assessments',
    'HR collaboration',
    'Screen sharing',
    'Secure authentication',
    'Accessible anywhere'
  ],
  
  // Trust Indicators (for Hero section)
  TRUST_INDICATORS: [
    'Built for Recruiters',
    'Part of Hirevix Ecosystem',
    'Secure Hiring Platform'
  ],
  
  // Home Page Content
  HOME_CONTENT: {
    HERO: {
      BADGE_TEXT: 'Official Product of the Hirevix Ecosystem',
      HEADING: 'Power Your',
      HEADING_HIGHLIGHT: 'Hiring Journey',
      SUBHEADING: 'Hirevix Live enables recruiters, HR teams and candidates to conduct secure interviews, assessments and hiring discussions through one professional collaboration platform.',
      CTA_AUTHENTICATED: 'Go to Dashboard',
      CTA_PRIMARY: 'Start Interview',
      CTA_SECONDARY: 'Sign In',
    },
    FEATURES: {
      HEADING: 'Everything Required For Modern Recruitment',
      DESCRIPTION: 'Built for recruiters, hiring managers, organizations and candidates.',
    },
    BENEFITS: {
      HEADING: 'Why Hirevix Live?',
      DESCRIPTION: 'A recruitment-first collaboration platform designed as a core product of the Hirevix ecosystem.',
    },
    CTA: {
      HEADING: 'Ready To Hire Smarter?',
      DESCRIPTION: 'Experience professional recruitment collaboration with Hirevix Live.',
      BUTTON_AUTHENTICATED: 'Go to Dashboard',
      BUTTON_GUEST: 'Get Started',
    },
  },
  
  // Dashboard Content
  DASHBOARD_CONTENT: {
    WELCOME: {
      GREETING: 'Welcome back, {userName}! 👋',
      DESCRIPTION: 'Create or join professional interview sessions and collaborate with your hiring team.',
    },
    ACTION_CARDS: {
      HOST: {
        TITLE: 'Host Interview',
        DESCRIPTION: 'Create a secure interview room for recruitment and assessments.',
        BUTTON: 'Create Interview',
        BUTTON_LOADING: 'Creating...',
      },
      JOIN: {
        TITLE: 'Join Interview',
        DESCRIPTION: 'Enter an Interview ID shared by your recruiter or HR.',
        BUTTON: 'Join Interview',
      },
    },
    SESSIONS_LIST: {
      HEADING: 'Interview Sessions',
      DESCRIPTION: 'Manage your active and previous recruitment sessions.',
      LOADING: 'Loading interview sessions...',
      EMPTY: 'No sessions yet.',
      FILTER_ALL: 'All',
      FILTER_ACTIVE: 'Active',
      FILTER_ENDED: 'Ended',
      REJOIN_BUTTON: 'Rejoin',
      ENDED_BUTTON: 'Ended',
    },
  },
  
  // Session Content
  SESSION_CONTENT: {
    JOIN_FORM: {
      HEADING: 'Join Interview',
      DESCRIPTION: 'Enter the Interview ID provided by your recruiter.',
      ROOM_ID_LABEL: 'Interview ID',
      ROOM_ID_PLACEHOLDER: 'Enter Interview ID',
      ROOM_ID_HELP: 'Ask your recruiter or HR for the Interview ID.',
      BUTTON: 'Join Interview',
      BUTTON_LOADING: 'Joining...',
    },
    INFO_CARD: {
      HEADING: 'Interview Details',
      ROOM_ID_LABEL: 'Interview ID',
      SHAREABLE_LINK_LABEL: 'Shareable Link',
      COPY_BUTTON: 'Copy',
      COPIED_BUTTON: 'Copied!',
      STATUS_LABEL: 'Status',
      PARTICIPANTS_LABEL: 'Participants',
    },
    HEADER: {
      HOSTING_TITLE: 'Hosting Interview',
      JOINING_TITLE: 'Interview Session',
      END_SESSION_BUTTON: 'End Interview',
    },
    VIDEO: {
      TITLE: 'Live Interview',
      CONNECTED: 'Connected',
      FULLSCREEN: 'Fullscreen',
      CONNECTING: 'Connecting to secure interview room...',
      LEAVE_BUTTON: 'Leave Interview',
      END_BUTTON: 'End Interview',
    },
    PARTICIPANTS: {
      HEADING: 'Interview Participants',
      HOST_LABEL: 'Host',
      PARTICIPANT_LABEL: 'Participant',
      JOINED_USERS_LABEL: 'Joined Users',
      EMPTY_MESSAGE: 'Participants will appear here after joining the interview.',
    },
  },
  
  // Auth Content
  AUTH_CONTENT: {
    LOGIN: {
      HEADING: 'Welcome To Hirevix Live',
      DESCRIPTION: 'Sign in to manage interviews and recruitment sessions.',
    },
    REGISTER: {
      HEADING: 'Create Your Hirevix Account',
      DESCRIPTION: 'Join the Hirevix ecosystem and start hosting professional interviews.',
    },
  },
  
  // Loading Messages
  LOADING_MESSAGES: {
    SESSION: 'Loading interview...',
    SESSIONS: 'Loading interview sessions...',
    GENERAL: 'Loading...',
  },
  
  BRANDING_GUIDELINES: {
    IDENTITY: "Always refer to the platform as 'Hirevix Live'.",
    ECOSYSTEM: 'Whenever possible mention that Hirevix Live is a product within the Hirevix Ecosystem.',
    TONE: 'Professional, premium, enterprise-grade, HR-tech focused.',
    AVOID: [
      'Live class platform',
      'Education platform',
      'Online classroom',
      'Student collaboration',
      'Meeting app',
      'Zoom clone'
    ],
    PREFERRED_KEYWORDS: [
      'Recruitment',
      'Hiring',
      'Interview',
      'Candidate Assessment',
      'HR Collaboration',
      'Talent Acquisition',
      'Hiring Workspace',
      'Recruitment Platform',
      'Hirevix Ecosystem'
    ]
  }
};

