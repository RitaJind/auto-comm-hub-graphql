import gql from 'graphql-tag';

export const typeDefs = gql`
  enum CommunicationChannel {
    EMAIL
    SMS
    CALL
    APP_NOTIFICATION
  }

  enum CommunicationStatus {
    SENT
    DELIVERED
    READ
    FAILED
    CLICKED
  }

  type Customer {
    id: ID!
    name: String!
    email: String
    phone: String
    communicationPreference: [CommunicationChannel!]!
    communicationLogs(channel: CommunicationChannel): [CommunicationLog!]! # Nested query
  }

  type CommunicationLog {
    id: ID!
    customerId: ID!
    channel: CommunicationChannel!
    subject: String
    message: String!
    timestamp: String!
    status: CommunicationStatus!
    customer: Customer! # Relationship: A log belongs to a customer
  }

  input LogCommunicationInput {
    customerId: ID!
    channel: CommunicationChannel!
    subject: String
    message: String!
    status: CommunicationStatus = SENT # Default to SENT
  }

  input UpdateCommunicationStatusInput {
    id: ID!
    status: CommunicationStatus!
  }

  type Query {
    customers: [Customer!]!
    customer(id: ID!): Customer
    communicationLogs(customerId: ID, channel: CommunicationChannel): [CommunicationLog!]!
  }

  type Mutation {
    logCommunication(input: LogCommunicationInput!): CommunicationLog!
    updateCommunicationStatus(input: UpdateCommunicationStatusInput!): CommunicationLog
  }
`;
