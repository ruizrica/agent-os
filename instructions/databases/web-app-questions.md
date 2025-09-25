# Web Application Question Database

## Discovery Phase Questions

### User & Authentication
1. Who are the primary users of this application? (admin/customer/internal/public)
2. Will users need to create accounts and log in?
3. What authentication methods are required? (username/password, SSO, OAuth, 2FA)
4. Are there different user roles with varying permissions?
5. Should the system support user invitation/onboarding flows?

### UI/UX Requirements
6. Is this a responsive web application that needs to work on mobile devices?
7. Are there specific browser requirements? (Chrome, Firefox, Safari, Edge versions)
8. Do you have existing design mockups or wireframes?
9. Should this follow an existing design system or brand guidelines?
10. Are there specific accessibility requirements? (WCAG 2.1 Level A/AA/AAA)

### Data & State Management
11. Will this application handle real-time data updates?
12. Is offline functionality required?
13. What kind of data will users be working with? (text, images, files, structured data)
14. Are there data export/import requirements?
15. Should the application maintain user preferences/settings?

## Technical Deep Dive Questions

### Performance & Scale
16. What is the expected number of concurrent users?
17. Are there specific page load time requirements? (under 3s, under 1s)
18. What is the expected data volume per user?
19. Are there specific performance benchmarks to meet?
20. Should the application support progressive web app (PWA) features?

### Integration & APIs
21. Will this integrate with existing backend services?
22. Are there third-party services to integrate? (payment, email, analytics)
23. Should this expose APIs for other applications?
24. Are there webhook requirements for external notifications?
25. Will this need to sync with mobile applications?

### Security & Compliance
26. Will this handle sensitive personal information (PII)?
27. Are there specific compliance requirements? (GDPR, CCPA, HIPAA)
28. Should data be encrypted at rest and in transit?
29. Are there audit logging requirements?
30. Should the application support data retention policies?

## Advanced Considerations

### Content & Media
31. Will users upload files? What types and sizes?
32. Is content moderation required?
33. Should the application support multiple languages (i18n)?
34. Are there SEO requirements for public-facing pages?
35. Will this include rich text editing capabilities?

### Collaboration Features
36. Will multiple users need to collaborate on the same data?
37. Are real-time collaboration features needed? (like Google Docs)
38. Should there be commenting or annotation features?
39. Are activity feeds or notifications required?
40. Should there be version history or change tracking?

### Analytics & Monitoring
41. What user analytics should be tracked?
42. Are there specific KPIs to monitor?
43. Should there be admin dashboards for monitoring?
44. What error tracking is needed?
45. Are there uptime/SLA requirements?

## Deployment & Operations

### Infrastructure
46. Where will this be hosted? (AWS, Azure, GCP, on-premise)
47. Are there specific deployment requirements? (containers, serverless)
48. Should this support multi-region deployment?
49. What are the backup and disaster recovery requirements?
50. Are there specific DevOps tools already in use?

## Conditional Questions

### E-commerce Specific
- What payment providers need to be supported?
- Are there inventory management requirements?
- Should this support multiple currencies?
- Are there tax calculation requirements?
- Should there be order tracking capabilities?

### SaaS Specific
- What subscription tiers will be offered?
- How will billing and invoicing work?
- Should there be usage-based pricing?
- Are there trial period requirements?
- Should tenants have isolated data?

### Content Platform Specific
- What content types will be supported?
- Are there content workflow requirements? (draft, review, publish)
- Should there be content scheduling capabilities?
- Are there content recommendation features needed?
- Should there be content analytics?

## Question Selection Algorithm

```
IF project_complexity == "simple":
  ASK questions 1-15 (basic discovery)
ELIF project_complexity == "medium":
  ASK questions 1-30 (discovery + technical)
ELIF project_complexity == "complex":
  ASK questions 1-45 (all except deployment)
ELIF project_complexity == "enterprise":
  ASK all questions including conditional sets
```

## Response Analysis Patterns

- If user mentions "real-time" → Deep dive into WebSocket/SSE requirements
- If user mentions "mobile" → Explore responsive vs native app needs
- If user mentions "team" → Focus on collaboration features
- If user mentions "scale" → Investigate performance and infrastructure
- If user mentions "compliance" → Detailed security and audit requirements