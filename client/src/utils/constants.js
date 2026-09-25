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
  APP_NAME: 'Sushmap-Live',
  APP_DESCRIPTION: 'The official platform for meeting of Team Sushmap.',
  APP_TAGLINE: 'Powering Smart Meetings and Collaboration',
  
  // Social Media Links
  SOCIAL_LINKS: {
    GITHUB: 'https://github.com',
    TWITTER: 'https://twitter.com',
    LINKEDIN: 'https://linkedin.com',
    EMAIL: 'mailto:support@sushmap.com',
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
      title: 'Professional HD Meetings',
      description: 'Conduct seamless HD meetings and discussions with teams from anywhere.',
      shortDescription: 'Professional meeting experience',
      color: 'orange'
    },
    {
      icon: 'FaComments',
      title: 'Live Meeting Collaboration',
      description: 'Collaborate with teams and participants using live chat and screen sharing.',
      shortDescription: 'Meeting collaboration',
      color: 'green'
    },
    {
      icon: 'FaShieldAlt',
      title: 'Secure Meeting Platform',
      description: 'Private meeting rooms with secure authentication for professional collaboration.',
      shortDescription: 'Secure meeting sessions',
      color: 'purple'
    },
    {
      icon: 'FaUsers',
      title: 'Sushmap meeting Workspace',
      description: 'Manage meetings, discussions and team collaboration from one unified platform.',
      shortDescription: 'Complete meeting workspace',
      color: 'indigo'
    }
  ],
  
  // Benefits Data (for Home page)
  BENEFITS: [
    'Professional meetings rooms',
    'Team collaboration',
    'Participant communication',
    'Screen sharing',
    'Secure authentication',
    'Accessible anywhere'
  ],
  
  // Trust Indicators (for Hero section)
  TRUST_INDICATORS: [
    'Built for Sushmap',
    'Part of Sushmap Ecosystem',
    'Secure meeting Platform'
  ],
  
  // Home Page Content
  HOME_CONTENT: {
    HERO: {
      BADGE_TEXT: 'Official Product of the Sushmap Ecosystem',
      HEADING: 'Power Your',
      HEADING_HIGHLIGHT: 'Sushmap Journey',
      SUBHEADING: 'Sushmap-Live enables teams and participants to conduct secure meetings and discussions through one professional collaboration platform.',
      CTA_AUTHENTICATED: 'Go to Dashboard',
      CTA_PRIMARY: 'Start meeting',
      CTA_SECONDARY: 'Sign In',
    },
    FEATURES: {
      HEADING: 'Everything Required For Modern Meetings',
      DESCRIPTION: 'Built for Sushmap users, teams, organizations and meeting participants.',
    },
    BENEFITS: {
      HEADING: 'Why Sushmap-Live?',
      DESCRIPTION: 'A meeting-first collaboration platform designed as a core product of the Sushmap ecosystem.',
    },
    CTA: {
      HEADING: 'Ready To Meeting?',
      DESCRIPTION: 'Experience professional meeting collaboration with Sushmap-Live.',
      BUTTON_AUTHENTICATED: 'Go to Dashboard',
      BUTTON_GUEST: 'Get Started',
    },
  },
  
  // Dashboard Content
  DASHBOARD_CONTENT: {
    WELCOME: {
      GREETING: 'Welcome back, {userName}! 👋',
      DESCRIPTION: 'Create or join professional meeting sessions and collaborate with your team.',
    },
    ACTION_CARDS: {
      HOST: {
        TITLE: 'Host Meeting',
        DESCRIPTION: 'Create a secure meeting room for your team and participants.',
        BUTTON: 'Create Meeting',
        BUTTON_LOADING: 'Creating...',
      },
      JOIN: {
        TITLE: 'Join Meeting',
        DESCRIPTION: 'Enter a Meeting ID shared by your host or meeting organizer.',
        BUTTON: 'Join Meeting',
      },
    },
    SESSIONS_LIST: {
      HEADING: 'Meeting Sessions',
      DESCRIPTION: 'Manage your active and previous meeting sessions.',
      LOADING: 'Loading meeting sessions...',
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
      HEADING: 'Join Meeting',
      DESCRIPTION: 'Enter the Meeting ID provided by your Host.',
      ROOM_ID_LABEL: 'Meeting ID',
      ROOM_ID_PLACEHOLDER: 'Enter Meeting ID',
      ROOM_ID_HELP: 'Ask your host or meeting organizer for the Meeting ID.',
      BUTTON: 'Join Meeting',
      BUTTON_LOADING: 'Joining...',
    },
    INFO_CARD: {
      HEADING: 'Meeting Details',
      ROOM_ID_LABEL: 'Meeting ID',
      SHAREABLE_LINK_LABEL: 'Shareable Link',
      COPY_BUTTON: 'Copy',
      COPIED_BUTTON: 'Copied!',
      STATUS_LABEL: 'Status',
      PARTICIPANTS_LABEL: 'Participants',
    },
    HEADER: {
      HOSTING_TITLE: 'Hosting Meeting',
      JOINING_TITLE: 'Meeting Session',
      END_SESSION_BUTTON: 'End Meeting',
    },
    VIDEO: {
      TITLE: 'Live meeting',
      CONNECTED: 'Connected',
      FULLSCREEN: 'Fullscreen',
      CONNECTING: 'Connecting to secure meeting room...',
      LEAVE_BUTTON: 'Leave Meeting',
      END_BUTTON: 'End Meeting',
    },
    PARTICIPANTS: {
      HEADING: 'Meeting Participants',
      HOST_LABEL: 'Host',
      PARTICIPANT_LABEL: 'Participant',
      JOINED_USERS_LABEL: 'Joined Users',
      EMPTY_MESSAGE: 'Participants will appear here after joining the meeting.',
    },
  },
  
  // Auth Content
  AUTH_CONTENT: {
    LOGIN: {
      HEADING: 'Welcome To Sushmap-Live',
      DESCRIPTION: 'Sign in to manage your meetings and collaboration sessions.',
    },
    REGISTER: {
      HEADING: 'Create Your Sushmap-Live Account',
      DESCRIPTION: 'Join the Sushmap ecosystem and start hosting professional meetings.',
    },
  },
  
  // Loading Messages
  LOADING_MESSAGES: {
    SESSION: 'Loading meeting...',
    SESSIONS: 'Loading meeting sessions...',
    GENERAL: 'Loading...',
  },
  
  BRANDING_GUIDELINES: {
    IDENTITY: "Always refer to the platform as 'Sushmap-Live'.",
    ECOSYSTEM: 'Whenever possible mention that Sushmap-Live is a product within the Sushmap Ecosystem.',
    TONE: 'Professional, premium, enterprise-grade, meeting and collaboration focused.',
    AVOID: [
      'Live class platform',
      'Education platform',
      'Online classroom',
      'Student collaboration',
      'Meeting app',
      'Zoom clone'
    ],
    PREFERRED_KEYWORDS: [
      'Meetings',
      'Team Collaboration',
      'Video Conferencing',
      'Screen Sharing',
      'Meeting Participants',
      'Collaboration Workspace',
      'Sushmap Ecosystem'
    ]
  }
};

