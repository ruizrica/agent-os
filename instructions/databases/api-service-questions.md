# API Service Question Database

## Discovery Phase Questions

### API Type & Purpose
1. What type of API is this? (REST, GraphQL, gRPC, WebSocket, Server-Sent Events)
2. What is the primary purpose of this API? (data access, integration, microservice)
3. Who will consume this API? (internal teams, partners, public developers)
4. Is this a new API or an enhancement to an existing one?
5. Will this replace an existing system?

### Authentication & Authorization
6. What authentication method should be used? (API keys, OAuth 2.0, JWT, mTLS)
7. Are there different permission levels for API consumers?
8. Should API keys have expiration dates?
9. Is rate limiting required? What are the limits?
10. Should there be IP allowlisting/denylisting?

### Data & Operations
11. What data entities will the API expose?
12. What operations are needed? (CRUD, search, bulk operations)
13. What data formats should be supported? (JSON, XML, Protocol Buffers)
14. Are there pagination requirements for large datasets?
15. Should the API support filtering and sorting?

## Technical Deep Dive Questions

### Performance Requirements
16. What is the expected requests per second (RPS)?
17. What are the latency requirements? (p50, p95, p99)
18. Should responses be cached? For how long?
19. Are there specific timeout requirements?
20. Should the API support request/response compression?

### Integration Patterns
21. Will this API call other services?
22. Are there webhook/callback requirements?
23. Should the API support batch operations?
24. Are there async/long-running operations?
25. Will this integrate with message queues? (Kafka, RabbitMQ, SQS)

### Data Management
26. How should API versions be managed?
27. Will there be breaking changes? How to handle them?
28. Should the API support field masking/partial responses?
29. Are there data transformation requirements?
30. Should the API support data validation beyond type checking?

## Advanced Considerations

### Error Handling & Reliability
31. What error response format should be used?
32. Should errors include debugging information?
33. Are there retry requirements for failed requests?
34. Should the API implement circuit breakers?
35. What happens during maintenance windows?

### Documentation & Developer Experience
36. Will you provide interactive API documentation? (Swagger/OpenAPI)
37. Should there be client SDKs? Which languages?
38. Are code examples needed for common use cases?
39. Will there be a sandbox environment?
40. Should there be API changelog/deprecation notices?

### Monitoring & Analytics
41. What metrics should be tracked? (usage, errors, latency)
42. Should there be per-consumer analytics?
43. Are there SLA requirements?
44. How should API health be monitored?
45. Should there be alerting for anomalies?

### Security & Compliance
46. Will the API handle sensitive data (PII, PCI, PHI)?
47. Should request/response payloads be encrypted?
48. Are there audit logging requirements?
49. Should there be request signing/verification?
50. Are there compliance requirements? (GDPR, PCI-DSS, HIPAA)

## Specialized API Types

### GraphQL Specific
- How should the schema be organized?
- Are there subscription requirements?
- Should there be query complexity limits?
- How to handle N+1 query problems?
- Are there specific resolver performance requirements?

### gRPC Specific
- Which service definition language? (Protocol Buffers)
- Should it support streaming? (unary, server, client, bidirectional)
- Are there specific proto versioning requirements?
- Should it support gRPC-Web for browser clients?
- How to handle load balancing?

### WebSocket Specific
- What events will be transmitted?
- How should connection state be managed?
- Are there reconnection requirements?
- Should it support multiple channels/rooms?
- How to handle message ordering?

### REST Specific
- Which HTTP methods will be used?
- How should resources be nested?
- Should it follow HATEOAS principles?
- How to handle partial updates? (PATCH vs PUT)
- Should it support HEAD and OPTIONS methods?

## Conditional Questions

### Microservices Architecture
- How will service discovery work?
- Are there distributed tracing requirements?
- Should it implement the saga pattern?
- How to handle distributed transactions?
- Are there specific resilience patterns needed?

### Event-Driven APIs
- What events will be published?
- Should events be ordered?
- How to handle event replay?
- Are there event sourcing requirements?
- Should it support event schemas?

### File Upload APIs
- What file types and sizes are allowed?
- Should uploads be resumable?
- Are there virus scanning requirements?
- Should it support multipart uploads?
- How to handle file processing?

## Question Selection Algorithm

```
IF api_type == "internal_microservice":
  FOCUS on questions 1-25 + microservices set
ELIF api_type == "public_api":
  FOCUS on questions 1-40 + documentation set
ELIF api_type == "partner_integration":
  FOCUS on questions 1-35 + security set
ELIF api_type == "high_performance":
  FOCUS on performance + monitoring questions
ELSE:
  START with questions 1-20, expand based on responses
```

## Response Analysis Patterns

- If "real-time" mentioned → Explore WebSocket/SSE options
- If "high volume" mentioned → Deep dive into performance and caching
- If "third-party" mentioned → Focus on security and rate limiting
- If "mobile app" mentioned → Consider offline sync and retry logic
- If "microservices" mentioned → Investigate service mesh requirements