# AWS Infrastructure Questions Database

## Context
Domain-specific questions for Amazon Web Services infrastructure deployment, architecture, and cloud services.

## Project Type Detection Patterns
- Keywords: "aws", "amazon web services", "ec2", "s3", "lambda", "cloudformation", "terraform"
- File patterns: "*.tf", "cloudformation.yml", "serverless.yml", "aws-cli", "boto3"
- Infrastructure indicators: "VPC", "IAM", "RDS", "ECS", "EKS", "CDN", "load balancer"

## Question Categories

### AWS Account & Billing
1. Do you have an existing AWS account or need a new one?
2. What is your estimated monthly AWS budget?
3. Do you need multi-account setup with AWS Organizations?
4. Will you use AWS Cost Explorer and budgeting alerts?
5. Do you need Reserved Instances or Savings Plans for cost optimization?
6. Are you planning AWS Credits or Free Tier usage?
7. Do you need consolidated billing across multiple accounts?
8. Will you implement cost allocation tags for resource tracking?

### Compute Services
9. Do you need EC2 instances (virtual machines)?
10. What instance types and sizes do you require (t3.micro, m5.large, etc.)?
11. Will you use Auto Scaling Groups for dynamic scaling?
12. Do you need AWS Lambda for serverless computing?
13. Are you planning container deployment with ECS or EKS?
14. Do you need AWS Batch for batch computing jobs?
15. Will you use Elastic Beanstalk for application deployment?
16. Do you need AWS Fargate for serverless containers?

### Storage Services
17. Do you need S3 buckets for object storage?
18. What S3 storage classes do you require (Standard, IA, Glacier)?
19. Do you need EBS volumes for persistent block storage?
20. Will you use EFS for shared file systems?
21. Do you need AWS Storage Gateway for hybrid cloud?
22. Are you planning S3 Transfer Acceleration for global uploads?
23. Do you need cross-region replication for S3 buckets?
24. Will you implement S3 lifecycle policies for cost optimization?

### Database Services
25. Do you need RDS for relational databases (MySQL, PostgreSQL, etc.)?
26. Will you use DynamoDB for NoSQL database needs?
27. Do you need database backups and point-in-time recovery?
28. Are you planning read replicas for database scaling?
29. Do you need Amazon ElastiCache for caching (Redis/Memcached)?
30. Will you use Amazon Redshift for data warehousing?
31. Do you need database migration services (DMS)?
32. Are you planning Aurora for high-performance databases?

### Networking & Content Delivery
33. Do you need a custom VPC (Virtual Private Cloud)?
34. Will you use multiple Availability Zones for high availability?
35. Do you need Application Load Balancer or Network Load Balancer?
36. Are you planning CloudFront CDN for content delivery?
37. Do you need VPN connections or Direct Connect?
38. Will you use Route 53 for DNS management?
39. Do you need NAT Gateway or NAT Instance for private subnets?
40. Are you planning API Gateway for RESTful APIs?

### Security & Identity
41. Do you need IAM roles and policies for access control?
42. Will you use AWS Secrets Manager for credential storage?
43. Do you need AWS WAF for web application firewall?
44. Are you planning AWS Shield for DDoS protection?
45. Do you need AWS Certificate Manager for SSL/TLS certificates?
46. Will you use AWS KMS for encryption key management?
47. Do you need AWS Config for compliance monitoring?
48. Are you planning AWS CloudTrail for audit logging?

### Monitoring & Logging
49. Do you need CloudWatch for monitoring and alerting?
50. Will you use CloudWatch Logs for centralized logging?
51. Do you need X-Ray for application performance monitoring?
52. Are you planning AWS Systems Manager for operational tasks?
53. Do you need SNS for notifications and alerts?
54. Will you use SQS for message queuing?
55. Do you need AWS EventBridge for event-driven architecture?

### Development & Deployment
56. Do you need CodeCommit, CodeBuild, CodeDeploy, or CodePipeline?
57. Will you use AWS CLI or AWS SDK for automation?
58. Do you need CloudFormation or AWS CDK for infrastructure as code?
59. Are you planning AWS Amplify for web/mobile app deployment?
60. Do you need Elastic Container Registry (ECR) for Docker images?
61. Will you use AWS SAM for serverless application development?

### Data Analytics & Machine Learning
62. Do you need AWS Glue for ETL data processing?
63. Will you use Amazon Kinesis for real-time data streaming?
64. Do you need Amazon EMR for big data processing?
65. Are you planning SageMaker for machine learning?
66. Do you need Amazon Athena for serverless query analysis?
67. Will you use AWS Data Pipeline for data workflow orchestration?

## Follow-up Question Logic

### If High Traffic Application
- Do you need CloudFront CDN with multiple edge locations?
- Will you implement Auto Scaling with predictive scaling?
- Do you need database read replicas across regions?

### If Enterprise Application
- Do you need AWS Single Sign-On integration?
- Will you use AWS Control Tower for multi-account governance?
- Do you need compliance with SOC, PCI, or HIPAA?

### If Startup/Small Business
- Are you planning to start with AWS Free Tier?
- Do you need simplified managed services vs. self-managed?
- Will you use AWS Amplify for rapid development?

### If Global Application
- Do you need multi-region deployment for low latency?
- Will you use Route 53 latency-based routing?
- Do you need cross-region backup and disaster recovery?

## Architecture Patterns
70. Will you use microservices or monolithic architecture?
71. Do you need serverless-first or server-based approach?
72. Are you planning event-driven architecture with Lambda?
73. Do you need synchronous or asynchronous communication patterns?
74. Will you implement CQRS or traditional CRUD patterns?

## Disaster Recovery & Backup
75. What is your RTO (Recovery Time Objective) requirement?
76. What is your RPO (Recovery Point Objective) requirement?
77. Do you need cross-region backup and replication?
78. Will you use AWS Backup for centralized backup management?
79. Do you need automated disaster recovery testing?

## Compliance & Governance
80. Do you need AWS Config for compliance monitoring?
81. Will you use AWS Organizations for account governance?
82. Do you need AWS Service Catalog for approved resources?
83. Are there data residency requirements for specific regions?
84. Do you need encryption at rest and in transit?

## Risk Assessment Questions
1. Do you have experience with AWS or need training/consulting?
2. Are there vendor lock-in concerns with AWS-specific services?
3. Do you have proper monitoring and alerting for cost overruns?
4. Are there security vulnerabilities in your planned architecture?
5. Do you have backup and disaster recovery plans in place?

## Technical Depth Questions
- **Beginner**: Focus on managed services, AWS Console, basic VPC setup
- **Intermediate**: Infrastructure as Code, Auto Scaling, monitoring setup
- **Advanced**: Custom networking, advanced security, multi-region architecture

## Estimation Factors
- **Simple**: Single-region, managed services, basic monitoring (2-4 weeks)
- **Moderate**: Multi-AZ, custom networking, CI/CD pipeline (4-8 weeks)
- **Complex**: Multi-region, enterprise security, advanced analytics (8+ weeks)

## Cost Optimization Considerations
- Reserved Instances vs On-Demand vs Spot Instances
- S3 Intelligent Tiering vs manual lifecycle policies
- CloudWatch cost optimization with custom metrics
- Data transfer costs for multi-region architecture
- Third-party tools vs native AWS services cost comparison