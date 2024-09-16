import { PrismaClient } from '@prisma/client';
import { get } from 'http';
const prisma = new PrismaClient();

const attachment = [
  {
    id: 1,
    fileURL: 'i1.jpg',
    fileName: 'DesignDoc.pdf',
    taskId: 1,
    uploadedById: 1,
  },
  {
    id: 2,
    fileURL: 'i2.jpg',
    fileName: 'NavAlgorithm.pdf',
    taskId: 2,
    uploadedById: 3,
  },
  {
    id: 3,
    fileURL: 'i3.jpg',
    fileName: 'EnergySolutions.pdf',
    taskId: 3,
    uploadedById: 5,
  },
  {
    id: 4,
    fileURL: 'i4.jpg',
    fileName: 'SoftwareWorkflow.pdf',
    taskId: 4,
    uploadedById: 7,
  },
  {
    id: 5,
    fileURL: 'i5.jpg',
    fileName: 'AIPredictions.pdf',
    taskId: 5,
    uploadedById: 9,
  },
  {
    id: 6,
    fileURL: 'i6.jpg',
    fileName: 'BiotechTest.pdf',
    taskId: 6,
    uploadedById: 11,
  },
  {
    id: 7,
    fileURL: 'i7.jpg',
    fileName: 'GolfAI.pdf',
    taskId: 7,
    uploadedById: 13,
  },
  {
    id: 8,
    fileURL: 'i8.jpg',
    fileName: 'HotelDB.pdf',
    taskId: 8,
    uploadedById: 15,
  },
  {
    id: 9,
    fileURL: 'i9.jpg',
    fileName: 'TelecomUpgrade.pdf',
    taskId: 9,
    uploadedById: 17,
  },
  {
    id: 10,
    fileURL: 'i10.jpg',
    fileName: 'SecurityProtocol.pdf',
    taskId: 10,
    uploadedById: 19,
  },
];
const comment = [
  {
    id: 1,
    text: 'We need to update this design to include new specifications.',
    taskId: 1,
    userId: 2,
  },
  {
    id: 2,
    text: 'Can we meet to discuss the navigation algorithm updates?',
    taskId: 2,
    userId: 4,
  },
  {
    id: 3,
    text: 'This energy solution looks promising, but needs more research.',
    taskId: 3,
    userId: 6,
  },
  {
    id: 4,
    text: "Let's revise the software development workflow to include agile methodologies.",
    taskId: 4,
    userId: 8,
  },
  {
    id: 5,
    text: 'We should consider newer AI models for better accuracy.',
    taskId: 5,
    userId: 10,
  },
  {
    id: 6,
    text: 'Product testing needs to be more rigorous.',
    taskId: 6,
    userId: 12,
  },
  {
    id: 7,
    text: 'Optimization algorithms are not yet efficient.',
    taskId: 7,
    userId: 14,
  },
  {
    id: 8,
    text: 'Database overhaul could impact current operations negatively.',
    taskId: 8,
    userId: 16,
  },
  {
    id: 9,
    text: 'Infrastructure upgrades must be done during low traffic hours.',
    taskId: 9,
    userId: 18,
  },
  {
    id: 10,
    text: 'Security measures need to be enhanced to prevent data breaches.',
    taskId: 10,
    userId: 20,
  },
  {
    id: 11,
    text: 'Consider using more robust training datasets for AI.',
    taskId: 11,
    userId: 1,
  },
  {
    id: 12,
    text: 'Server security update meeting scheduled for next week.',
    taskId: 12,
    userId: 2,
  },
  {
    id: 13,
    text: 'UX redesign has been well received in initial user tests.',
    taskId: 13,
    userId: 3,
  },
  {
    id: 14,
    text: 'Data analytics implementation needs to account for real-time processing delays.',
    taskId: 14,
    userId: 4,
  },
  {
    id: 15,
    text: 'Encryption project needs to align with international security standards.',
    taskId: 15,
    userId: 5,
  },
  {
    id: 16,
    text: 'Review cloud storage optimization strategies in Q3 meeting.',
    taskId: 16,
    userId: 6,
  },
  {
    id: 17,
    text: 'Hardware compatibility tests to include newer device models.',
    taskId: 17,
    userId: 7,
  },
  {
    id: 18,
    text: 'Visualization tools to support both 2D and 3D data representations.',
    taskId: 18,
    userId: 8,
  },
  {
    id: 19,
    text: 'IoT device prototypes to undergo extensive field testing.',
    taskId: 19,
    userId: 9,
  },
  {
    id: 20,
    text: 'Legacy system upgrade to start with backend databases.',
    taskId: 20,
    userId: 10,
  },
  {
    id: 21,
    text: 'Network security framework should prioritize threat detection improvements.',
    taskId: 21,
    userId: 1,
  },
  {
    id: 22,
    text: 'Application deployment strategies to include Docker integration.',
    taskId: 22,
    userId: 2,
  },
  {
    id: 23,
    text: 'Market analysis should cover competitive product landscapes.',
    taskId: 23,
    userId: 3,
  },
  {
    id: 24,
    text: 'Feedback mechanisms to utilize adaptive questioning techniques.',
    taskId: 24,
    userId: 4,
  },
  {
    id: 25,
    text: 'API integration must ensure data privacy compliance.',
    taskId: 25,
    userId: 5,
  },
];
const project = [
  {
    id: 1,
    name: 'Apollo',
    description: 'A space exploration project.',
    startDate: '2023-01-01T00:00:00Z',
    endDate: '2023-12-31T00:00:00Z',
  },
  {
    id: 2,
    name: 'Beacon',
    description: 'Developing advanced navigation systems.',
    startDate: '2023-02-01T00:00:00Z',
    endDate: '2023-10-15T00:00:00Z',
  },
  {
    id: 3,
    name: 'Catalyst',
    description: 'A project to boost renewable energy use.',
    startDate: '2023-03-05T00:00:00Z',
    endDate: '2024-03-05T00:00:00Z',
  },
  {
    id: 4,
    name: 'Delta',
    description: 'Delta project for new software development techniques.',
    startDate: '2023-01-20T00:00:00Z',
    endDate: '2023-09-20T00:00:00Z',
  },
  {
    id: 5,
    name: 'Echo',
    description: 'Echo project focused on AI advancements.',
    startDate: '2023-04-15T00:00:00Z',
    endDate: '2023-11-30T00:00:00Z',
  },
  {
    id: 6,
    name: 'Foxtrot',
    description: 'Exploring cutting-edge biotechnology.',
    startDate: '2023-02-25T00:00:00Z',
    endDate: '2023-08-25T00:00:00Z',
  },
  {
    id: 7,
    name: 'Golf',
    description: 'Development of new golf equipment using AI.',
    startDate: '2023-05-10T00:00:00Z',
    endDate: '2023-12-10T00:00:00Z',
  },
  {
    id: 8,
    name: 'Hotel',
    description: 'Hotel management system overhaul.',
    startDate: '2023-03-01T00:00:00Z',
    endDate: '2024-01-01T00:00:00Z',
  },
  {
    id: 9,
    name: 'India',
    description: 'Telecommunication infrastructure upgrade.',
    startDate: '2023-06-01T00:00:00Z',
    endDate: '2023-12-01T00:00:00Z',
  },
  {
    id: 10,
    name: 'Juliet',
    description: 'Initiative to enhance cyber-security measures.',
    startDate: '2023-07-01T00:00:00Z',
    endDate: '2024-02-01T00:00:00Z',
  },
];
const projectTeam = [
  { id: 1, teamId: 1, projectId: 1 },
  { id: 2, teamId: 2, projectId: 1 },
  { id: 3, teamId: 3, projectId: 1 },
  { id: 4, teamId: 4, projectId: 1 },
  { id: 5, teamId: 5, projectId: 1 },
  { id: 6, teamId: 1, projectId: 2 },
  { id: 7, teamId: 2, projectId: 2 },
  { id: 8, teamId: 3, projectId: 2 },
  { id: 9, teamId: 4, projectId: 2 },
  { id: 10, teamId: 5, projectId: 2 },
  { id: 11, teamId: 1, projectId: 3 },
  { id: 12, teamId: 2, projectId: 3 },
  { id: 13, teamId: 3, projectId: 3 },
  { id: 14, teamId: 4, projectId: 3 },
  { id: 15, teamId: 5, projectId: 3 },
  { id: 16, teamId: 1, projectId: 4 },
  { id: 17, teamId: 2, projectId: 4 },
  { id: 18, teamId: 3, projectId: 4 },
  { id: 19, teamId: 4, projectId: 4 },
  { id: 20, teamId: 5, projectId: 4 },
];
const task = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Design the main module.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Design',
    startDate: '2023-01-10T00:00:00Z',
    dueDate: '2023-04-10T00:00:00Z',
    projectId: 1,
    authorUserId: 1,
    assignedUserId: 2,
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Implement the navigation algorithm.',
    status: 'To Do',
    priority: 'High',
    tags: 'Coding',
    startDate: '2023-01-15T00:00:00Z',
    dueDate: '2023-05-15T00:00:00Z',
    projectId: 2,
    authorUserId: 3,
    assignedUserId: 4,
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Develop renewable energy solutions.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Development',
    startDate: '2023-03-20T00:00:00Z',
    dueDate: '2023-09-20T00:00:00Z',
    projectId: 3,
    authorUserId: 5,
    assignedUserId: 6,
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'Outline new software development workflows.',
    status: 'To Do',
    priority: 'High',
    tags: 'Planning',
    startDate: '2023-01-25T00:00:00Z',
    dueDate: '2023-06-25T00:00:00Z',
    projectId: 4,
    authorUserId: 7,
    assignedUserId: 8,
  },
  {
    id: 5,
    title: 'Task 5',
    description: 'Research AI models for prediction.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Research',
    startDate: '2023-04-20T00:00:00Z',
    dueDate: '2023-10-20T00:00:00Z',
    projectId: 5,
    authorUserId: 9,
    assignedUserId: 10,
  },
  {
    id: 6,
    title: 'Task 6',
    description: 'Biotech product testing.',
    status: 'To Do',
    priority: 'Backlog',
    tags: 'Testing',
    startDate: '2023-03-01T00:00:00Z',
    dueDate: '2023-08-01T00:00:00Z',
    projectId: 6,
    authorUserId: 11,
    assignedUserId: 12,
  },
  {
    id: 7,
    title: 'Task 7',
    description: 'AI optimization for golf equipment.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Optimization',
    startDate: '2023-05-15T00:00:00Z',
    dueDate: '2023-11-15T00:00:00Z',
    projectId: 7,
    authorUserId: 13,
    assignedUserId: 14,
  },
  {
    id: 8,
    title: 'Task 8',
    description: 'Overhaul of the database for hotel management.',
    status: 'To Do',
    priority: 'High',
    tags: 'Database',
    startDate: '2023-04-01T00:00:00Z',
    dueDate: '2023-10-01T00:00:00Z',
    projectId: 8,
    authorUserId: 15,
    assignedUserId: 16,
  },
  {
    id: 9,
    title: 'Task 9',
    description: 'Upgrade telecom infrastructure.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Infrastructure',
    startDate: '2023-06-10T00:00:00Z',
    dueDate: '2023-12-10T00:00:00Z',
    projectId: 9,
    authorUserId: 17,
    assignedUserId: 18,
  },
  {
    id: 10,
    title: 'Task 10',
    description: 'Enhance security protocols.',
    status: 'To Do',
    priority: 'Urgent',
    tags: 'Security',
    startDate: '2023-07-05T00:00:00Z',
    dueDate: '2024-01-05T00:00:00Z',
    projectId: 10,
    authorUserId: 19,
    assignedUserId: 20,
  },
  {
    id: 11,
    title: 'Task 11',
    description: 'Finalize AI training parameters.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'AI, Training',
    startDate: '2023-01-20T00:00:00Z',
    dueDate: '2023-05-20T00:00:00Z',
    projectId: 5,
    authorUserId: 1,
    assignedUserId: 3,
  },
  {
    id: 12,
    title: 'Task 12',
    description: 'Update server security protocols.',
    status: 'To Do',
    priority: 'High',
    tags: 'Security',
    startDate: '2023-02-10T00:00:00Z',
    dueDate: '2023-06-10T00:00:00Z',
    projectId: 1,
    authorUserId: 2,
    assignedUserId: 4,
  },
  {
    id: 13,
    title: 'Task 13',
    description: 'Redesign user interface for better UX.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Design, UX',
    startDate: '2023-03-15T00:00:00Z',
    dueDate: '2023-07-15T00:00:00Z',
    projectId: 2,
    authorUserId: 5,
    assignedUserId: 6,
  },
  {
    id: 14,
    title: 'Task 14',
    description: 'Implement real-time data analytics.',
    status: 'To Do',
    priority: 'High',
    tags: 'Analytics',
    startDate: '2023-04-05T00:00:00Z',
    dueDate: '2023-08-05T00:00:00Z',
    projectId: 3,
    authorUserId: 7,
    assignedUserId: 8,
  },
  {
    id: 15,
    title: 'Task 15',
    description: 'Develop end-to-end encryption solution.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Encryption',
    startDate: '2023-05-01T00:00:00Z',
    dueDate: '2023-09-01T00:00:00Z',
    projectId: 4,
    authorUserId: 9,
    assignedUserId: 10,
  },
  {
    id: 16,
    title: 'Task 16',
    description: 'Optimize cloud storage usage.',
    status: 'To Do',
    priority: 'Backlog',
    tags: 'Cloud, Storage',
    startDate: '2023-06-15T00:00:00Z',
    dueDate: '2023-10-15T00:00:00Z',
    projectId: 5,
    authorUserId: 11,
    assignedUserId: 12,
  },
  {
    id: 17,
    title: 'Task 17',
    description: 'Test software for hardware compatibility.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Testing, Hardware',
    startDate: '2023-07-10T00:00:00Z',
    dueDate: '2023-11-10T00:00:00Z',
    projectId: 6,
    authorUserId: 13,
    assignedUserId: 14,
  },
  {
    id: 18,
    title: 'Task 18',
    description: 'Create new data visualization tools.',
    status: 'To Do',
    priority: 'High',
    tags: 'Visualization',
    startDate: '2023-08-05T00:00:00Z',
    dueDate: '2023-12-05T00:00:00Z',
    projectId: 7,
    authorUserId: 15,
    assignedUserId: 16,
  },
  {
    id: 19,
    title: 'Task 19',
    description: 'Build prototype for new IoT devices.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'IoT',
    startDate: '2023-09-01T00:00:00Z',
    dueDate: '2024-01-01T00:00:00Z',
    projectId: 8,
    authorUserId: 17,
    assignedUserId: 18,
  },
  {
    id: 20,
    title: 'Task 20',
    description: 'Update legacy systems to new tech standards.',
    status: 'To Do',
    priority: 'Urgent',
    tags: 'Legacy, Upgrade',
    startDate: '2023-10-10T00:00:00Z',
    dueDate: '2024-02-10T00:00:00Z',
    projectId: 9,
    authorUserId: 19,
    assignedUserId: 20,
  },
  {
    id: 21,
    title: 'Task 21',
    description: 'Establish new network security framework.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Security',
    startDate: '2023-01-30T00:00:00Z',
    dueDate: '2023-05-30T00:00:00Z',
    projectId: 10,
    authorUserId: 1,
    assignedUserId: 3,
  },
  {
    id: 22,
    title: 'Task 22',
    description: 'Revise application deployment strategies.',
    status: 'To Do',
    priority: 'High',
    tags: 'Deployment',
    startDate: '2023-02-20T00:00:00Z',
    dueDate: '2023-06-20T00:00:00Z',
    projectId: 1,
    authorUserId: 2,
    assignedUserId: 4,
  },
  {
    id: 23,
    title: 'Task 23',
    description: 'Conduct market analysis for product fit.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Market Analysis',
    startDate: '2023-03-25T00:00:00Z',
    dueDate: '2023-07-25T00:00:00Z',
    projectId: 2,
    authorUserId: 5,
    assignedUserId: 6,
  },
  {
    id: 24,
    title: 'Task 24',
    description: 'Optimize user feedback collection mechanism.',
    status: 'To Do',
    priority: 'High',
    tags: 'Feedback',
    startDate: '2023-04-15T00:00:00Z',
    dueDate: '2023-08-15T00:00:00Z',
    projectId: 3,
    authorUserId: 7,
    assignedUserId: 8,
  },
  {
    id: 25,
    title: 'Task 25',
    description: 'Integrate new API for third-party services.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'API Integration',
    startDate: '2023-05-05T00:00:00Z',
    dueDate: '2023-09-05T00:00:00Z',
    projectId: 4,
    authorUserId: 9,
    assignedUserId: 10,
  },
  {
    id: 26,
    title: 'Task 26',
    description: 'Update internal tooling for development teams.',
    status: 'To Do',
    priority: 'Backlog',
    tags: 'Tooling',
    startDate: '2023-06-25T00:00:00Z',
    dueDate: '2023-10-25T00:00:00Z',
    projectId: 5,
    authorUserId: 11,
    assignedUserId: 12,
  },
  {
    id: 27,
    title: 'Task 27',
    description: 'Prepare cloud migration strategy document.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Cloud Migration',
    startDate: '2023-07-20T00:00:00Z',
    dueDate: '2023-11-20T00:00:00Z',
    projectId: 6,
    authorUserId: 13,
    assignedUserId: 14,
  },
  {
    id: 28,
    title: 'Task 28',
    description: 'Design scalable database architecture.',
    status: 'To Do',
    priority: 'Medium',
    tags: 'Database Design',
    startDate: '2023-08-15T00:00:00Z',
    dueDate: '2023-12-15T00:00:00Z',
    projectId: 7,
    authorUserId: 15,
    assignedUserId: 16,
  },
  {
    id: 29,
    title: 'Task 29',
    description: 'Prototype new mobile technology.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Mobile Tech',
    startDate: '2023-09-10T00:00:00Z',
    dueDate: '2024-01-10T00:00:00Z',
    projectId: 8,
    authorUserId: 17,
    assignedUserId: 18,
  },
  {
    id: 30,
    title: 'Task 30',
    description: 'Enhance data encryption levels.',
    status: 'To Do',
    priority: 'High',
    tags: 'Encryption',
    startDate: '2023-10-15T00:00:00Z',
    dueDate: '2024-02-15T00:00:00Z',
    projectId: 9,
    authorUserId: 19,
    assignedUserId: 20,
  },
  {
    id: 31,
    title: 'Task 31',
    description: 'Refactor backend code for better maintainability.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Refactoring, Backend',
    startDate: '2023-11-01T00:00:00Z',
    dueDate: '2024-03-01T00:00:00Z',
    projectId: 10,
    authorUserId: 20,
    assignedUserId: 1,
  },
  {
    id: 32,
    title: 'Task 32',
    description:
      'Expand the network infrastructure to support increased traffic.',
    status: 'To Do',
    priority: 'Medium',
    tags: 'Networking, Infrastructure',
    startDate: '2023-11-05T00:00:00Z',
    dueDate: '2024-01-05T00:00:00Z',
    projectId: 1,
    authorUserId: 2,
    assignedUserId: 3,
  },
  {
    id: 33,
    title: 'Task 33',
    description: 'Create a new client dashboard interface.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'UI, Dashboard',
    startDate: '2023-11-10T00:00:00Z',
    dueDate: '2024-02-10T00:00:00Z',
    projectId: 2,
    authorUserId: 4,
    assignedUserId: 5,
  },
  {
    id: 34,
    title: 'Task 34',
    description:
      'Develop an automated testing framework for new software releases.',
    status: 'To Do',
    priority: 'Medium',
    tags: 'Testing, Automation',
    startDate: '2023-11-15T00:00:00Z',
    dueDate: '2024-03-15T00:00:00Z',
    projectId: 3,
    authorUserId: 6,
    assignedUserId: 7,
  },
  {
    id: 35,
    title: 'Task 35',
    description:
      'Optimize database queries to improve application performance.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Database, Optimization',
    startDate: '2023-11-20T00:00:00Z',
    dueDate: '2024-01-20T00:00:00Z',
    projectId: 4,
    authorUserId: 8,
    assignedUserId: 9,
  },
  {
    id: 36,
    title: 'Task 36',
    description: 'Implement end-user training for new system features.',
    status: 'To Do',
    priority: 'Backlog',
    tags: 'Training, User Experience',
    startDate: '2023-11-25T00:00:00Z',
    dueDate: '2024-01-25T00:00:00Z',
    projectId: 5,
    authorUserId: 10,
    assignedUserId: 11,
  },
  {
    id: 37,
    title: 'Task 37',
    description:
      'Conduct a comprehensive security audit of the existing infrastructure.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Security, Audit',
    startDate: '2023-12-01T00:00:00Z',
    dueDate: '2024-02-01T00:00:00Z',
    projectId: 6,
    authorUserId: 12,
    assignedUserId: 13,
  },
  {
    id: 38,
    title: 'Task 38',
    description: 'Revise mobile app to incorporate new payment integrations.',
    status: 'To Do',
    priority: 'Medium',
    tags: 'Mobile, Payments',
    startDate: '2023-12-05T00:00:00Z',
    dueDate: '2024-02-05T00:00:00Z',
    projectId: 7,
    authorUserId: 14,
    assignedUserId: 15,
  },
  {
    id: 39,
    title: 'Task 39',
    description: 'Update cloud configuration to optimize costs.',
    status: 'Work In Progress',
    priority: 'Urgent',
    tags: 'Cloud, Cost Saving',
    startDate: '2023-12-10T00:00:00Z',
    dueDate: '2024-02-10T00:00:00Z',
    projectId: 8,
    authorUserId: 16,
    assignedUserId: 17,
  },
  {
    id: 40,
    title: 'Task 40',
    description: 'Implement automated backup procedures for critical data.',
    status: 'To Do',
    priority: 'High',
    tags: 'Backup, Automation',
    startDate: '2023-12-15T00:00:00Z',
    dueDate: '2024-02-15T00:00:00Z',
    projectId: 9,
    authorUserId: 18,
    assignedUserId: 19,
  },
];
const taskAssignment = [
  { id: 1, userId: 1, taskId: 1 },
  { id: 2, userId: 2, taskId: 2 },
  { id: 3, userId: 3, taskId: 3 },
  { id: 4, userId: 4, taskId: 4 },
  { id: 5, userId: 5, taskId: 5 },
  { id: 6, userId: 6, taskId: 6 },
  { id: 7, userId: 7, taskId: 7 },
  { id: 8, userId: 8, taskId: 8 },
  { id: 9, userId: 9, taskId: 9 },
  { id: 10, userId: 10, taskId: 10 },
  { id: 11, userId: 11, taskId: 11 },
  { id: 12, userId: 12, taskId: 12 },
  { id: 13, userId: 13, taskId: 13 },
  { id: 14, userId: 14, taskId: 14 },
  { id: 15, userId: 15, taskId: 15 },
  { id: 16, userId: 16, taskId: 16 },
  { id: 17, userId: 17, taskId: 17 },
  { id: 18, userId: 18, taskId: 18 },
  { id: 19, userId: 19, taskId: 19 },
  { id: 20, userId: 20, taskId: 20 },
  { id: 21, userId: 1, taskId: 21 },
  { id: 22, userId: 2, taskId: 22 },
  { id: 23, userId: 3, taskId: 23 },
  { id: 24, userId: 4, taskId: 24 },
  { id: 25, userId: 5, taskId: 25 },
  { id: 26, userId: 6, taskId: 26 },
  { id: 27, userId: 7, taskId: 27 },
  { id: 28, userId: 8, taskId: 28 },
  { id: 29, userId: 9, taskId: 29 },
  { id: 30, userId: 10, taskId: 30 },
];
const team = [
  {
    teamName: 'Quantum Innovations',
    productOwnerUserId: 11,
    projectManagerUserId: 2,
  },
  {
    teamName: 'Nebula Research',
    productOwnerUserId: 13,
    projectManagerUserId: 4,
  },
  {
    teamName: 'Orion Solutions',
    productOwnerUserId: 15,
    projectManagerUserId: 6,
  },
  {
    teamName: 'Krypton Developments',
    productOwnerUserId: 17,
    projectManagerUserId: 8,
  },
  {
    teamName: 'Zenith Technologies',
    productOwnerUserId: 19,
    projectManagerUserId: 10,
  },
];
const user = [
  {
    username: 'AliceJones',
    teamId: 1,
    profilePictureUrl: 'p1.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174001',
  },
  {
    username: 'BobSmith',
    teamId: 2,
    profilePictureUrl: 'p2.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174002',
  },
  {
    username: 'CarolWhite',
    teamId: 3,
    profilePictureUrl: 'p3.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174003',
  },
  {
    username: 'DaveBrown',
    teamId: 4,
    profilePictureUrl: 'p4.jpeg',
    cognitoId: '213b7530-1031-70e0-67e9-fe0805e18fb3',
  },
  {
    username: 'EveClark',
    teamId: 5,
    profilePictureUrl: 'p5.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174005',
  },
  {
    username: 'FrankWright',
    teamId: 1,
    profilePictureUrl: 'p6.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174006',
  },
  {
    username: 'GraceHall',
    teamId: 2,
    profilePictureUrl: 'p7.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174007',
  },
  {
    username: 'HenryAllen',
    teamId: 3,
    profilePictureUrl: 'p8.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174008',
  },
  {
    username: 'IdaMartin',
    teamId: 4,
    profilePictureUrl: 'p9.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174009',
  },
  {
    username: 'JohnDoe',
    teamId: 5,
    profilePictureUrl: 'p10.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174010',
  },
  {
    username: 'LauraAdams',
    teamId: 1,
    profilePictureUrl: 'p11.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174011',
  },
  {
    username: 'NormanBates',
    teamId: 2,
    profilePictureUrl: 'p12.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174012',
  },
  {
    username: 'OliviaPace',
    teamId: 3,
    profilePictureUrl: 'p13.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174013',
  },
  {
    username: 'PeterQuill',
    teamId: 4,
    profilePictureUrl: 'p1.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174014',
  },
  {
    username: 'QuincyAdams',
    teamId: 5,
    profilePictureUrl: 'p2.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174015',
  },
  {
    username: 'RachelGreen',
    teamId: 1,
    profilePictureUrl: 'p3.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174016',
  },
  {
    username: 'SteveJobs',
    teamId: 2,
    profilePictureUrl: 'p4.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174017',
  },
  {
    username: 'TinaFey',
    teamId: 3,
    profilePictureUrl: 'p5.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174018',
  },
  {
    username: 'UrsulaMonroe',
    teamId: 4,
    profilePictureUrl: 'p6.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174019',
  },
  {
    username: 'VictorHugo',
    teamId: 5,
    profilePictureUrl: 'p7.jpeg',
    cognitoId: '123e4567-e89b-12d3-a456-426614174020',
  },
];

const getModelName = (name: string): string => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

async function deleteAllData(orderedFileNames: string[]) {
  const modelNames = orderedFileNames.map((fileName) => {
    return getModelName(fileName);
  });

  for (const modelName of modelNames) {
    const model: any = prisma[modelName as keyof typeof prisma];
    try {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } catch (error) {
      console.error(`Error clearing data from ${modelName}:`, error);
    }
  }
}

async function main() {
  const data = {
    team,
    project,
    projectTeam,
    user,
    task,
    attachment,
    comment,
    taskAssignment,
  };
  const orderedFileNames = [
    'team',
    'project',
    'projectTeam',
    'user',
    'task',
    'attachment',
    'comment',
    'taskAssignment',
  ];

  await deleteAllData(orderedFileNames);

  for (const fileName of orderedFileNames) {
    const jsonData = data[`${fileName}`];
    console.log('jsonData', jsonData);
    const modelName = getModelName(fileName);
    const model: any = prisma[modelName as keyof typeof prisma];

    try {
      for (const data of jsonData) {
        await model.create({ data });
      }
      console.log(`Seeded ${modelName} with data from ${fileName}`);
    } catch (error) {
      console.error(`Error seeding data for ${modelName}:`, error);
    }
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
