# Automotive Customer Communication Hub GraphQL API

A GraphQL API simulating a centralized hub for managing automotive financial services customer communication history and preferences. This project demonstrates GraphQL's power for integrating and exposing data from various communication services, supporting both queries and mutations for customer interactions.

## 🎯 Project Overview

This project aligns with building scalable, reusable communication services in a financial context, specifically designed for automotive financial services. It showcases how GraphQL provides a unified API for frontends consuming data from disparate backend systems (simulated by mock data).

## ✨ Features

- **GraphQL Schema** for Customer & Communication Logs management
- **Query Operations** for retrieving customer details and communication history
- **Mutation Operations** for logging new communications and updating statuses
- **Simulated Data Aggregation** from different "microservices"
- **Relationship Resolvers** for nested queries between customers and communications
- **TypeScript** for type safety and better development experience

## 🛠 Technologies Used

- **Node.js** - Runtime environment
- **TypeScript** - Type-safe JavaScript
- **Express** - Web framework
- **Apollo Server** - GraphQL server implementation
- **GraphQL** - Query language for APIs

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RitaJind/auto-comm-hub-graphql.git
   cd auto-comm-hub-graphql
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open GraphQL Playground at: `http://localhost:4000/graphql`

### Available Scripts

- `npm start` - Start the development server with ts-node
- `npm run build` - Build the TypeScript project
- `npm run serve` - Run the built JavaScript version
- `npm run dev` - Start with file watching for development

## 📋 GraphQL Schema

### Types

- **Customer**: User profiles with communication preferences
- **CommunicationLog**: Record of all customer interactions
- **CommunicationChannel**: EMAIL, SMS, CALL, APP_NOTIFICATION
- **CommunicationStatus**: SENT, DELIVERED, READ, FAILED, CLICKED

### Sample Queries

```graphql
# Get all customers
query {
  customers {
    id
    name
    email
    communicationPreference
  }
}

# Get customer with communication logs
query {
  customer(id: "cust101") {
    name
    communicationLogs {
      id
      channel
      message
      status
      timestamp
    }
  }
}

# Filter communication logs
query {
  communicationLogs(customerId: "cust101", channel: EMAIL) {
    id
    subject
    message
    status
  }
}
```

### Sample Mutations

```graphql
# Log new communication
mutation {
  logCommunication(input: {
    customerId: "cust101"
    channel: EMAIL
    subject: "Payment Reminder"
    message: "Your payment is due tomorrow"
    status: SENT
  }) {
    id
    timestamp
    status
  }
}

# Update communication status
mutation {
  updateCommunicationStatus(input: {
    id: "log001"
    status: READ
  }) {
    id
    status
  }
}
```

## 🏗 Project Structure

```
auto-comm-hub-graphql/
├── src/
│   ├── index.ts          # Main server entry point
│   ├── schema.ts         # GraphQL schema definitions
│   ├── resolvers.ts      # GraphQL resolvers
│   ├── types.ts          # TypeScript interfaces
│   └── mockData.ts       # In-memory mock data
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Relevance to Automotive Financial Services

This project directly demonstrates key concepts relevant to automotive financial services:

- **Scalable Communication Services**: Shows how to build unified APIs that can aggregate multiple communication channels
- **GraphQL Integration**: Demonstrates modern API design patterns for complex data relationships
- **CRM Integration Simulation**: Mimics real-world scenarios where customer data comes from various sources
- **Financial Services Context**: Uses realistic automotive finance scenarios (loan statements, payment reminders, promotional offers)
- **Microservices Pattern**: GraphQL acts as an API Gateway, aggregating data from different mock "services"

## 🔧 Development

The project uses in-memory mock data for simplicity, allowing focus on GraphQL implementation rather than database management. This makes it perfect for demonstrating API design patterns and GraphQL capabilities.

## 📈 Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- Authentication and authorization
- Real-time subscriptions for communication updates
- Integration with actual communication providers
- Performance optimization with DataLoader
- API rate limiting and caching

## 📄 License

MIT License - see LICENSE file for details