import { Customer, CommunicationChannel, CommunicationLog, CommunicationStatus } from './types';

export const customers: Customer[] = [
  {
    id: 'cust101',
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    phone: '+15551234567',
    communicationPreference: [CommunicationChannel.EMAIL, CommunicationChannel.SMS],
  },
  {
    id: 'cust102',
    name: 'Bob Johnson',
    email: 'bob.j@example.com',
    phone: '+15559876543',
    communicationPreference: [CommunicationChannel.APP_NOTIFICATION],
  },
];

export let communicationLogs: CommunicationLog[] = [
  {
    id: 'log001',
    customerId: 'cust101',
    channel: CommunicationChannel.EMAIL,
    subject: 'Your Auto Loan Statement is Ready',
    message: 'Dear Alice, your statement is available for download.',
    timestamp: '2025-09-26T10:00:00Z',
    status: CommunicationStatus.DELIVERED,
  },
  {
    id: 'log002',
    customerId: 'cust101',
    channel: CommunicationChannel.SMS,
    message: 'Reminder: Your payment is due in 3 days. Reply YES to confirm.',
    timestamp: '2025-09-27T08:30:00Z',
    status: CommunicationStatus.SENT,
  },
  {
    id: 'log003',
    customerId: 'cust102',
    channel: CommunicationChannel.APP_NOTIFICATION,
    message: 'New offer: Special financing rates on latest vehicle models!',
    timestamp: '2025-09-27T12:00:00Z',
    status: CommunicationStatus.READ,
  },
];
