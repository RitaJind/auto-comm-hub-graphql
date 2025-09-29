export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  communicationPreference: CommunicationChannel[]; // e.g., ['EMAIL', 'SMS']
}

export enum CommunicationChannel {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  CALL = 'CALL',
  APP_NOTIFICATION = 'APP_NOTIFICATION',
}

export enum CommunicationStatus {
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
  READ = 'READ',
  FAILED = 'FAILED',
  CLICKED = 'CLICKED',
}

export interface CommunicationLog {
  id: string;
  customerId: string;
  channel: CommunicationChannel;
  subject?: string; // For Email
  message: string;
  timestamp: string; // ISO string
  status: CommunicationStatus;
}
