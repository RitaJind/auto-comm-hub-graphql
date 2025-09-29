import { customers, communicationLogs } from './mockData';
import { CommunicationLog, CommunicationStatus, CommunicationChannel, Customer } from './types';
import { v4 as uuidv4 } from 'uuid';

export const resolvers = {
  Query: {
    customers: () => customers,
    customer: (parent: any, { id }: { id: string }) => customers.find(c => c.id === id),
    communicationLogs: (parent: any, { customerId, channel }: { customerId?: string, channel?: CommunicationChannel }) => {
      let filteredLogs = communicationLogs;
      if (customerId) {
        filteredLogs = filteredLogs.filter(log => log.customerId === customerId);
      }
      if (channel) {
        filteredLogs = filteredLogs.filter(log => log.channel === channel);
      }
      return filteredLogs;
    },
  },
  Mutation: {
    logCommunication: (parent: any, { input }: { input: { customerId: string, channel: CommunicationChannel, subject?: string, message: string, status?: CommunicationStatus } }) => {
      const newLog: CommunicationLog = {
        id: uuidv4(), // Generate a unique ID
        customerId: input.customerId,
        channel: input.channel,
        subject: input.subject,
        message: input.message,
        timestamp: new Date().toISOString(),
        status: input.status || CommunicationStatus.SENT,
      };
      communicationLogs.push(newLog);
      return newLog;
    },
    updateCommunicationStatus: (parent: any, { input }: { input: { id: string, status: CommunicationStatus } }) => {
      const logIndex = communicationLogs.findIndex(log => log.id === input.id);
      if (logIndex > -1) {
        communicationLogs[logIndex] = { ...communicationLogs[logIndex], status: input.status };
        return communicationLogs[logIndex];
      }
      return null;
    },
  },
  // Nested Resolvers for Relationships
  Customer: {
    communicationLogs: (parent: Customer, { channel }: { channel?: CommunicationChannel }) => {
      let filteredLogs = communicationLogs.filter(log => log.customerId === parent.id);
      if (channel) {
        filteredLogs = filteredLogs.filter(log => log.channel === channel);
      }
      return filteredLogs;
    },
  },
  CommunicationLog: {
    customer: (parent: CommunicationLog) => customers.find(c => c.id === parent.customerId),
  },
};
