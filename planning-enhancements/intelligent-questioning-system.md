# Intelligent Questioning System Framework

## Overview

The Intelligent Questioning System (IQS) generates contextual, domain-specific questions that adapt to project type, complexity, and current specification completeness.

## Core Components

### 1. Domain Classifier

```yaml
domains:
  fintech:
    keywords: ["payment", "banking", "transaction", "finance", "trading", "crypto"]
    priority_areas: ["security", "compliance", "data_integrity", "performance"]

  ecommerce:
    keywords: ["shop", "cart", "product", "catalog", "checkout", "inventory"]
    priority_areas: ["user_experience", "payment_flow", "inventory_management", "search"]

  saas:
    keywords: ["subscription", "tenant", "dashboard", "analytics", "integration"]
    priority_areas: ["scalability", "multi_tenancy", "billing", "api_design"]

  social:
    keywords: ["user", "profile", "feed", "share", "follow", "message"]
    priority_areas: ["real_time", "content_moderation", "privacy", "engagement"]

  enterprise:
    keywords: ["workflow", "approval", "reporting", "audit", "compliance"]
    priority_areas: ["security", "integration", "compliance", "workflow_automation"]
```

### 2. Question Generation Algorithm

```typescript
interface QuestionContext {
  domain: string
  projectComplexity: 'simple' | 'medium' | 'complex'
  currentSpecState: SpecState
  userExpertiseLevel: 'beginner' | 'intermediate' | 'expert'
}

interface Question {
  id: string
  text: string
  type: 'open' | 'choice' | 'scale' | 'boolean'
  category: string
  priority: number
  dependsOn?: string[]
  options?: string[]
  validation?: ValidationRule
}

class QuestionGenerator {
  generateQuestions(context: QuestionContext): Question[] {
    const baseQuestions = this.getBaseQuestions()
    const domainQuestions = this.getDomainSpecificQuestions(context.domain)
    const complexityQuestions = this.getComplexityQuestions(context.projectComplexity)
    const gapQuestions = this.identifySpecGaps(context.currentSpecState)

    return this.prioritizeAndFilter([
      ...baseQuestions,
      ...domainQuestions,
      ...complexityQuestions,
      ...gapQuestions
    ], context)
  }
}
```

## Question Categories

### 1. Base Questions (Always Asked)

```yaml
business_context:
  - "What is the primary business problem this solves?"
  - "Who are the primary and secondary users?"
  - "What is the expected timeline for MVP?"
  - "What are the success metrics?"

technical_foundation:
  - "Are there existing systems to integrate with?"
  - "What are the expected user load and scale?"
  - "Are there specific compliance requirements?"
```

### 2. Domain-Specific Questions

#### Fintech Domain
```yaml
security:
  - "What level of PCI compliance is required?"
  - "Will you handle sensitive financial data?"
  - "What fraud prevention measures are needed?"

transactions:
  - "What payment methods will be supported?"
  - "Is real-time transaction processing required?"
  - "How should failed transactions be handled?"

compliance:
  - "Which regulatory frameworks apply (SOX, GDPR, PSD2)?"
  - "What audit trail requirements exist?"
  - "Are there specific KYC/AML requirements?"
```

#### E-commerce Domain
```yaml
catalog:
  - "How many products/SKUs are expected?"
  - "Will there be product variants (size, color)?"
  - "Is inventory tracking real-time?"

checkout:
  - "What checkout flow is preferred (single/multi-page)?"
  - "Will guest checkout be supported?"
  - "What shipping calculation methods are needed?"

marketing:
  - "Will there be discount/coupon functionality?"
  - "Is recommendation engine needed?"
  - "What analytics integration is required?"
```

#### SaaS Domain
```yaml
tenancy:
  - "Single or multi-tenant architecture?"
  - "How will tenant isolation work?"
  - "Custom domains per tenant?"

billing:
  - "What billing models (subscription, usage-based)?"
  - "Trial period requirements?"
  - "How to handle plan upgrades/downgrades?"

integration:
  - "Which third-party services to integrate?"
  - "API rate limiting requirements?"
  - "Webhook event system needed?"
```

### 3. Complexity-Based Questions

#### Simple Projects
- Focus on core functionality
- Basic user flows
- Standard patterns

#### Medium Projects
- Integration requirements
- Performance considerations
- Advanced features

#### Complex Projects
- Architecture decisions
- Scalability planning
- Security architecture
- Disaster recovery

## Adaptive Questioning Logic

```typescript
class AdaptiveQuestionFlow {
  private askedQuestions: Set<string> = new Set()
  private answers: Map<string, any> = new Map()

  getNextQuestion(currentAnswers: Map<string, any>): Question | null {
    // Analyze current answers to determine next most relevant question
    const context = this.analyzeContext(currentAnswers)
    const candidateQuestions = this.generateCandidates(context)

    // Filter out already asked questions
    const availableQuestions = candidateQuestions.filter(
      q => !this.askedQuestions.has(q.id)
    )

    // Prioritize based on information gain
    return this.selectOptimalQuestion(availableQuestions, context)
  }

  private calculateInformationGain(question: Question): number {
    // Calculate how much this question reduces uncertainty
    const currentUncertainty = this.getCurrentUncertainty()
    const expectedUncertainty = this.getExpectedUncertainty(question)
    return currentUncertainty - expectedUncertainty
  }
}
```

## Question Templates by Project Stage

### Stage 1: Discovery
- High-level business goals
- User segments
- Core value proposition

### Stage 2: Definition
- Feature requirements
- Technical constraints
- Integration needs

### Stage 3: Design
- UI/UX preferences
- Workflow details
- Edge cases

### Stage 4: Technical
- Architecture decisions
- Technology choices
- Performance requirements

## Smart Follow-ups

```yaml
trigger_patterns:
  mentions_integration:
    follow_ups:
      - "Which specific systems/APIs?"
      - "What data needs to be synchronized?"
      - "Real-time or batch integration?"

  mentions_users:
    follow_ups:
      - "Expected number of concurrent users?"
      - "Geographic distribution?"
      - "User expertise level?"

  mentions_security:
    follow_ups:
      - "What data classification levels?"
      - "Authentication requirements?"
      - "Audit requirements?"
```

## Question Prioritization Algorithm

```typescript
interface PriorityFactors {
  criticalityScore: number      // How critical to project success
  informationGain: number        // How much it clarifies requirements
  dependencyCount: number        // How many other decisions depend on this
  userConfidence: number         // How well can user answer this
}

function prioritizeQuestion(question: Question, factors: PriorityFactors): number {
  const weights = {
    criticality: 0.35,
    information: 0.30,
    dependency: 0.25,
    confidence: 0.10
  }

  return (
    factors.criticalityScore * weights.criticality +
    factors.informationGain * weights.information +
    factors.dependencyCount * weights.dependency +
    factors.userConfidence * weights.confidence
  )
}
```

## Integration with Agent OS

### 1. Context Fetcher Integration
```yaml
context_sources:
  - existing_specs: Check for similar projects
  - tech_stack: Inherit organizational standards
  - past_decisions: Learn from previous choices
```

### 2. File Creator Integration
```yaml
output_structure:
  questions_log: .agent-os/planning/questions-asked.json
  answers: .agent-os/planning/requirements-answers.json
  derived_specs: .agent-os/planning/derived-requirements.md
```

### 3. Planning Agent Integration
```yaml
handoff_points:
  - after_discovery: Pass to spec creation
  - after_technical: Pass to task generation
  - after_validation: Pass to execution planning
```

## Question Validation Rules

```typescript
interface ValidationRule {
  type: 'required' | 'format' | 'range' | 'dependency'
  validator: (value: any) => boolean
  errorMessage: string
}

const validationRules = {
  email: {
    type: 'format',
    validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    errorMessage: 'Please provide a valid email address'
  },

  userCount: {
    type: 'range',
    validator: (value) => value > 0 && value < 1000000000,
    errorMessage: 'Please provide a realistic user count'
  },

  timeline: {
    type: 'required',
    validator: (value) => value && value.length > 0,
    errorMessage: 'Timeline is required for planning'
  }
}
```

## Machine Learning Enhancement

```python
# Future enhancement: ML-based question relevance scoring
class QuestionRelevanceModel:
    def __init__(self):
        self.model = self.load_trained_model()

    def score_question_relevance(self, question, project_context):
        features = self.extract_features(question, project_context)
        relevance_score = self.model.predict(features)
        return relevance_score

    def learn_from_feedback(self, question, was_helpful):
        # Update model based on user feedback
        self.model.update(question, was_helpful)
```

## Usage Example

```typescript
// Initialize the questioning system
const iqs = new IntelligentQuestioningSystem()

// Set project context
const context = {
  domain: detectDomain(userInput),
  complexity: estimateComplexity(userInput),
  expertise: assessUserExpertise(previousInteractions)
}

// Generate initial questions
const questions = iqs.generateQuestions(context)

// Adaptive flow
while (!iqs.isSpecificationComplete()) {
  const nextQuestion = iqs.getNextQuestion()
  const answer = await getUserAnswer(nextQuestion)
  iqs.processAnswer(nextQuestion, answer)
}

// Generate specification from answers
const specification = iqs.generateSpecification()
```