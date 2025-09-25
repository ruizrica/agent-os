# Data Pipeline Question Database

## Discovery Phase Questions

### Data Source & Destination
1. What is the primary data source? (database, API, files, streaming, multiple)
2. What is the destination? (data warehouse, database, API, files, multiple)
3. What is the data format? (JSON, CSV, Parquet, Avro, XML, binary)
4. What is the expected data volume? (MB/GB/TB per day)
5. How frequently does new data arrive?

### Pipeline Scheduling
6. How often should the pipeline run? (real-time, near real-time, hourly, daily)
7. Are there specific time windows for processing?
8. Should the pipeline support backfilling historical data?
9. Are there dependencies on other pipelines?
10. Should it support manual triggers?

### Data Quality & Validation
11. What data quality checks are required?
12. How should invalid data be handled? (reject, quarantine, fix)
13. Are there completeness requirements?
14. Should duplicate data be detected and handled?
15. Are there specific business rules to validate?

## Technical Deep Dive Questions

### Transformation Requirements
16. What transformations are needed? (cleaning, aggregation, enrichment)
17. Should data be normalized or denormalized?
18. Are there join operations with other datasets?
19. Should historical data be preserved? (SCD Type 1/2/3)
20. Are there complex calculations or derived metrics?

### Performance & Scalability
21. What is the expected processing latency?
22. Should the pipeline scale automatically?
23. Are there memory constraints for processing?
24. Can processing be parallelized?
25. What is the maximum acceptable processing time?

### Error Handling & Recovery
26. How should failures be handled? (retry, alert, skip)
27. What is the retry strategy? (exponential backoff, fixed delay)
28. Should there be partial failure recovery?
29. How to handle source system downtime?
30. Should there be data reconciliation?

## Advanced Considerations

### Monitoring & Observability
31. What metrics should be tracked? (records processed, errors, latency)
32. How should data lineage be tracked?
33. Are there SLA requirements?
34. Should there be data profiling statistics?
35. How to detect data drift or anomalies?

### Data Governance
36. Are there data retention policies?
37. Should PII be masked or encrypted?
38. Are there data access controls?
39. Should there be audit logging?
40. Are there compliance requirements? (GDPR, CCPA)

### Integration Patterns
41. Should the pipeline trigger downstream processes?
42. Are there notification requirements? (email, Slack, webhooks)
43. Should it integrate with workflow orchestrators? (Airflow, Prefect)
44. Are there metadata management requirements?
45. Should it support schema evolution?

### Cost Optimization
46. What are the cost constraints?
47. Should data be compressed for storage?
48. Are there data archival requirements?
49. Should compute resources be optimized?
50. Can processing be scheduled during off-peak hours?

## Specialized Pipeline Types

### Streaming Pipeline
- What is the message broker? (Kafka, Kinesis, Pub/Sub)
- What is the processing framework? (Spark Streaming, Flink, Beam)
- How should late data be handled?
- What windowing strategy? (tumbling, sliding, session)
- Should there be exactly-once processing guarantees?

### ETL/ELT Pipeline
- Should it be ETL or ELT approach?
- What ETL tool? (Informatica, Talend, custom)
- How complex are the transformations?
- Should there be staging areas?
- How to handle incremental loads?

### ML Pipeline
- Is this for training or inference?
- How should feature engineering be handled?
- Are there model versioning requirements?
- Should there be A/B testing support?
- How to monitor model performance?

### CDC Pipeline
- What CDC mechanism? (log-based, trigger-based, timestamp)
- How to handle schema changes?
- Should there be initial snapshot loads?
- How to ensure data consistency?
- What is the acceptable replication lag?

## Conditional Questions

### Real-time Requirements
- What is the maximum acceptable latency?
- How to handle out-of-order events?
- Should there be event deduplication?
- Are there event ordering guarantees?
- How to handle backpressure?

### Batch Processing
- What is the optimal batch size?
- How to handle partial batch failures?
- Should there be batch dependency management?
- How to optimize for cost vs speed?
- Should batches be idempotent?

### Data Lake/Warehouse Specific
- What table format? (Delta, Iceberg, Hudi)
- Should there be partition strategies?
- How to handle schema evolution?
- Are there compaction requirements?
- Should there be data cataloging?

### Multi-Cloud/Hybrid
- Which cloud providers are involved?
- How to handle data transfer costs?
- Are there data residency requirements?
- Should there be cross-region replication?
- How to handle network reliability?

## Question Selection Algorithm

```
IF pipeline_type == "streaming":
  ASK streaming-specific + questions 1-30
ELIF pipeline_type == "batch_etl":
  ASK ETL-specific + questions 1-35
ELIF pipeline_type == "ml_pipeline":
  ASK ML-specific + questions 1-40
ELIF data_volume > "1TB/day":
  FOCUS on scalability and cost questions
ELIF compliance_required:
  FOCUS on governance and security questions
ELSE:
  START with questions 1-20, expand based on complexity
```

## Response Analysis Patterns

- If "real-time" mentioned → Explore streaming architectures
- If "large volume" mentioned → Focus on scalability and partitioning
- If "multiple sources" mentioned → Investigate data integration patterns
- If "data quality" emphasized → Deep dive into validation rules
- If "cost-sensitive" mentioned → Explore optimization strategies