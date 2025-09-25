# Machine Learning System Question Database

## Discovery Phase Questions

### ML Problem Definition
1. What type of ML problem is this? (classification, regression, clustering, recommendation)
2. What is the business problem being solved?
3. What will the predictions/outputs be used for?
4. What is the current baseline solution (if any)?
5. What improvement over baseline is expected?

### Data Requirements
6. What data sources are available for training?
7. What is the size of the training dataset?
8. Is the data labeled? How was it labeled?
9. Are there data quality issues to address?
10. Will new data be continuously available?

### Model Deployment
11. Where will the model be deployed? (cloud, edge, mobile)
12. What are the latency requirements for inference?
13. How many predictions per second are expected?
14. Should the model be retrained periodically?
15. Will there be A/B testing of models?

## Technical Deep Dive Questions

### Feature Engineering
16. What features are currently available?
17. Are feature transformations needed?
18. Should features be automatically selected?
19. How to handle missing values?
20. Are there temporal features to consider?

### Model Requirements
21. Are there interpretability requirements?
22. What is the acceptable model size?
23. Should the model be deterministic?
24. Are there specific algorithms to use/avoid?
25. Should ensemble methods be considered?

### Training Pipeline
26. What compute resources are available? (CPU, GPU, TPU)
27. How long can training take?
28. Should hyperparameter tuning be automated?
29. What validation strategy? (cross-validation, time-based split)
30. How to handle class imbalance?

## Advanced Considerations

### Model Evaluation
31. What metrics matter most? (accuracy, precision, recall, F1, AUC)
32. Are there segment-specific performance requirements?
33. How to evaluate fairness and bias?
34. Should there be custom business metrics?
35. What is the minimum acceptable performance?

### Production Considerations
36. How to monitor model drift?
37. When should the model be retrained?
38. How to handle prediction failures?
39. Should predictions be cached?
40. Are there fallback strategies needed?

### MLOps Requirements
41. How should models be versioned?
42. What metadata needs to be tracked?
43. Should there be experiment tracking?
44. How to reproduce model results?
45. What CI/CD pipeline is needed?

### Data Privacy & Security
46. Does data contain PII that needs protection?
47. Should differential privacy be applied?
48. Are there data retention policies?
49. Can the model be reverse-engineered?
50. Should model predictions be auditable?

## Specialized ML Systems

### Computer Vision
- What image formats and resolutions?
- Are there real-time processing requirements?
- Should there be data augmentation?
- Are pre-trained models acceptable?
- How to handle varying lighting/conditions?

### Natural Language Processing
- What languages need to be supported?
- Should it handle multiple domains/topics?
- Are there context length limitations?
- Should it support streaming text?
- How to handle informal language/typos?

### Recommendation Systems
- What type of recommendations? (collaborative, content-based, hybrid)
- How to handle cold start problems?
- Should explanations be provided?
- How to measure recommendation quality?
- Should there be diversity in recommendations?

### Time Series Forecasting
- What is the forecast horizon?
- Are there seasonal patterns?
- Should external variables be included?
- How to handle missing time periods?
- What uncertainty quantification is needed?

### Reinforcement Learning
- What is the action space?
- How is reward defined?
- Is there a simulator available?
- What safety constraints exist?
- How to handle exploration vs exploitation?

## Conditional Questions

### Real-time Inference
- What is the maximum acceptable latency?
- Should the model be optimized? (quantization, pruning)
- Can predictions be batched?
- Should there be model caching?
- How to handle traffic spikes?

### Batch Inference
- What is the batch size and frequency?
- Where should results be stored?
- How to handle failed batches?
- Should there be incremental processing?
- What parallelization is possible?

### Edge Deployment
- What are the device constraints? (memory, compute)
- Should the model work offline?
- How to update models on devices?
- What telemetry is needed?
- How to handle device heterogeneity?

### Federated Learning
- How many clients/devices?
- What privacy guarantees are needed?
- How to handle client dropouts?
- Should there be client selection?
- How to aggregate updates?

### AutoML Requirements
- Should feature engineering be automated?
- What algorithms to include in search?
- What is the time/resource budget?
- Should neural architecture search be used?
- How to handle multi-objective optimization?

## Question Selection Algorithm

```
IF ml_type == "proof_of_concept":
  ASK questions 1-20 (focus on problem definition)
ELIF ml_type == "production_system":
  ASK questions 1-45 (comprehensive requirements)
ELIF ml_type == "real_time":
  FOCUS on latency, optimization, monitoring
ELIF ml_type == "high_stakes":
  FOCUS on interpretability, fairness, auditing
ELIF ml_type == "edge_deployment":
  FOCUS on constraints, optimization, updates
ELSE:
  START with questions 1-25, expand based on responses
```

## Response Analysis Patterns

- If "real-time" mentioned → Explore model optimization techniques
- If "accuracy critical" → Deep dive into evaluation metrics
- If "large scale" mentioned → Focus on distributed training
- If "regulated industry" → Investigate compliance requirements
- If "limited data" mentioned → Explore data augmentation/transfer learning