---
description: Enhanced Spec Creation with Intelligent Questioning for Agent OS
globs:
alwaysApply: false
version: 2.0
encoding: UTF-8
---

# Enhanced Spec Creation with Intelligent Questioning

## Overview

Generate comprehensive feature specifications through adaptive multi-stage planning with intelligent contextual questioning and progressive requirement discovery.

<pre_flight_check>
  EXECUTE: @.agent-os/instructions/meta/pre-flight.md
</pre_flight_check>

<intelligent_questioning_system>

## Intelligent Questioning Framework

<project_type_detection>
  <detection_strategy>
    Analyze initial user input to determine project category:
    - Web Application (frontend/backend/fullstack)
    - API Service (REST/GraphQL/gRPC)
    - Mobile Application (iOS/Android/Cross-platform)
    - Data Pipeline (ETL/Streaming/Batch)
    - Machine Learning System (Training/Inference/MLOps)
    - Infrastructure (DevOps/Cloud/Monitoring)
    - Integration (Third-party/Webhook/Middleware)
    - iOS Application (Swift/UIKit/SwiftUI)
    - Android Application (Kotlin/Java/Jetpack)
    - AWS Infrastructure (EC2/Lambda/RDS/S3)
    - Firebase Backend (Auth/Firestore/Functions)
    - Cloudflare Services (CDN/Workers/Security)
  </detection_strategy>
</project_type_detection>

<question_databases>
  <web_application_questions>
    LOAD from: @.agent-os/instructions/databases/web-app-questions.md
  </web_application_questions>

  <api_service_questions>
    LOAD from: @.agent-os/instructions/databases/api-service-questions.md
  </api_service_questions>

  <data_pipeline_questions>
    LOAD from: @.agent-os/instructions/databases/data-pipeline-questions.md
  </data_pipeline_questions>

  <ml_system_questions>
    LOAD from: @.agent-os/instructions/databases/ml-system-questions.md
  </ml_system_questions>

  <ios_application_questions>
    LOAD from: @.agent-os/instructions/databases/ios-app-questions.md
  </ios_application_questions>

  <android_application_questions>
    LOAD from: @.agent-os/instructions/databases/android-app-questions.md
  </android_application_questions>

  <aws_infrastructure_questions>
    LOAD from: @.agent-os/instructions/databases/aws-infrastructure-questions.md
  </aws_infrastructure_questions>

  <firebase_questions>
    LOAD from: @.agent-os/instructions/databases/firebase-questions.md
  </firebase_questions>

  <cloudflare_questions>
    LOAD from: @.agent-os/instructions/databases/cloudflare-questions.md
  </cloudflare_questions>
</question_databases>

</intelligent_questioning_system>

<process_flow>

<step number="1" subagent="context-fetcher" name="spec_initiation_enhanced">

### Step 1: Enhanced Spec Initiation

Use the context-fetcher subagent to identify spec initiation method and determine project type for intelligent questioning.

<initiation_flow>
  <trigger_analysis>
    IF user_says "what's next?":
      CHECK @.agent-os/product/roadmap.md
      FIND next uncompleted item
      ANALYZE item for project_type
    ELSE:
      ACCEPT user spec idea
      ANALYZE description for project_type
  </trigger_analysis>

  <project_type_determination>
    SCAN for keywords:
      - "API", "endpoint", "REST" → API Service
      - "UI", "dashboard", "page" → Web Application
      - "pipeline", "ETL", "data" → Data Pipeline
      - "model", "ML", "training" → ML System
      - "mobile", "app" → Mobile Application
      - "iOS", "iPhone", "iPad", "Swift" → iOS Application
      - "Android", "Kotlin", "Java" → Android Application
      - "AWS", "EC2", "Lambda", "S3" → AWS Infrastructure
      - "Firebase", "Firestore", "Cloud Functions" → Firebase Backend
      - "Cloudflare", "Workers", "CDN" → Cloudflare Services

    IF type_unclear:
      ASK: "What type of system is this primarily? (web app/API/data pipeline/ML/mobile/iOS/Android/AWS/Firebase/Cloudflare/other)"
  </project_type_determination>
</initiation_flow>

</step>

<step number="2" subagent="context-fetcher" name="intelligent_context_gathering">

### Step 2: Intelligent Context Gathering

Gather context with awareness of existing knowledge and project type.

<smart_context_loading>
  CHECK current_context for:
    - mission-lite.md
    - tech-stack.md
    - Similar past specs in @.agent-os/specs/
    - Related documentation

  IF similar_spec_exists:
    REFERENCE patterns and decisions
    ASK if this builds upon existing spec

  LOAD only missing context
</smart_context_loading>

</step>

<step number="3" subagent="context-fetcher" name="multi_stage_questioning">

### Step 3: Multi-Stage Intelligent Questioning

Use adaptive questioning based on project type and previous answers.

<questioning_strategy>
  <stage_1_discovery>
    DETERMINE project type
    LOAD appropriate question database
    ASK Level 1 questions from question database
    ANALYZE responses for:
      - Complexity indicators
      - Risk factors
      - Integration points

    IF high_complexity OR high_risk:
      PROCEED to stage_2
    ELSE:
      SKIP to stage_3_summary
  </stage_1_discovery>

  <stage_2_deep_dive>
    ASK Level 2 questions from question database based on stage_1 responses

    ADAPTIVE_RULES:
      IF user mentions "integration":
        ADD questions about APIs and data formats
      IF user mentions "performance":
        ADD questions about metrics and benchmarks
      IF user mentions "security":
        ADD questions about authentication and encryption
      IF user mentions "iOS":
        SWITCH to ios_application_questions database
      IF user mentions "Android":
        SWITCH to android_application_questions database
      IF user mentions "AWS":
        SWITCH to aws_infrastructure_questions database
      IF user mentions "Firebase":
        SWITCH to firebase_questions database
      IF user mentions "Cloudflare":
        SWITCH to cloudflare_questions database

    ANALYZE for need for stage_3
  </stage_2_deep_dive>

  <stage_3_advanced>
    ASK Level 3 questions only if:
      - High complexity detected
      - Compliance mentioned
      - Critical system identified
      - User explicitly requests comprehensive spec
  </stage_3_advanced>

  <stage_3_summary>
    SUMMARIZE understanding:
      "Based on your responses, I understand this is a [TYPE] that will [SUMMARY].
       Key requirements include [LIST].
       Is this understanding correct?"

    WAIT for confirmation or corrections
  </stage_3_summary>
</questioning_strategy>

</step>

<step number="4" subagent="ai-analyzer" name="requirement_discovery">

### Step 4: AI-Driven Requirement Discovery

Use AI analysis to discover implicit requirements and potential issues.

<requirement_analysis>
  <implicit_requirements>
    ANALYZE user responses for unstated needs:
      - If "user data" mentioned → suggest GDPR compliance
      - If "payment" mentioned → suggest PCI compliance
      - If "real-time" mentioned → suggest caching strategy
      - If "scale" mentioned → suggest load testing
  </implicit_requirements>

  <risk_identification>
    IDENTIFY potential risks:
      - Technical debt implications
      - Scalability bottlenecks
      - Security vulnerabilities
      - Integration challenges

    IF risks_found:
      PRESENT to user with mitigation suggestions
  </risk_identification>

  <stakeholder_analysis>
    IDENTIFY affected parties:
      - End users
      - Administrators
      - Developers
      - Operations team
      - Business stakeholders

    FOR each stakeholder:
      CONSIDER their needs and impacts
  </stakeholder_analysis>
</requirement_analysis>

</step>

<step number="5" subagent="date-checker" name="date_determination">

### Step 5: Date Determination

Use the date-checker subagent to determine current date for folder naming.

<subagent_output>
  Store date in YYYY-MM-DD format for subsequent steps
</subagent_output>

</step>

<step number="6" subagent="file-creator" name="enhanced_folder_structure">

### Step 6: Enhanced Folder Structure Creation

Create comprehensive folder structure for enhanced spec documentation.

<folder_creation>
  CREATE: .agent-os/specs/YYYY-MM-DD-spec-name/
  CREATE: .agent-os/specs/YYYY-MM-DD-spec-name/sub-specs/
  CREATE: .agent-os/specs/YYYY-MM-DD-spec-name/analysis/
  CREATE: .agent-os/specs/YYYY-MM-DD-spec-name/planning/
</folder_creation>

</step>

<step number="7" subagent="file-creator" name="create_enhanced_spec">

### Step 7: Create Enhanced spec.md

Create comprehensive spec document with all discovered requirements.

<enhanced_spec_template>
  # Spec Requirements Document

  > Spec: [SPEC_NAME]
  > Created: [CURRENT_DATE]
  > Type: [PROJECT_TYPE]
  > Complexity: [LOW/MEDIUM/HIGH]
  > Risk Level: [LOW/MEDIUM/HIGH]

  ## Executive Summary
  [2-3 sentence high-level overview for stakeholders]

  ## Overview
  [Detailed goal and objective based on questioning]

  ## User Stories
  [Generated from questioning responses]

  ## Spec Scope

  ### Core Requirements
  [From Level 1 questions]

  ### Technical Requirements
  [From Level 2 questions]

  ### Advanced Requirements
  [From Level 3 questions if applicable]

  ## Discovered Requirements
  [AI-discovered implicit requirements]

  ## Stakeholder Impact Analysis
  [Impact on each stakeholder group]

  ## Risk Assessment

  ### Identified Risks
  [List of risks with severity]

  ### Mitigation Strategies
  [Proposed mitigation for each risk]

  ## Integration Points
  [Systems this will integrate with]

  ## Performance Criteria
  [Specific measurable performance requirements]

  ## Security Considerations
  [Security requirements and considerations]

  ## Out of Scope
  [Explicitly excluded functionality]

  ## Expected Deliverables
  [Testable outcomes with acceptance criteria]

  ## Implementation Phases
  [Suggested phased approach if applicable]

  ## Success Metrics
  [How success will be measured]
</enhanced_spec_template>

</step>

<step number="8" subagent="file-creator" name="create_question_response_log">

### Step 8: Create Question-Response Analysis

Document the questioning process and responses for reference.

<analysis_file>
  CREATE: analysis/question-responses.md

  # Question-Response Analysis

  ## Project Type Detection
  - Detected Type: [TYPE]
  - Confidence: [PERCENTAGE]
  - Keywords Identified: [LIST]

  ## Questions Asked

  ### Level 1 - Discovery
  [Questions and responses]

  ### Level 2 - Deep Dive
  [Questions and responses if asked]

  ### Level 3 - Advanced
  [Questions and responses if asked]

  ## Response Analysis

  ### Complexity Indicators
  [List of complexity factors identified]

  ### Integration Requirements
  [Identified from responses]

  ### Implicit Requirements Discovered
  [List of requirements not explicitly stated]

  ## Recommendations
  [Additional considerations based on analysis]
</analysis_file>

</step>

<step number="9" subagent="file-creator" name="create_implementation_plan">

### Step 9: Create Implementation Planning Document

Generate detailed implementation plan based on requirements.

<planning_file>
  CREATE: planning/implementation-plan.md

  # Implementation Plan

  ## Phase 1: Foundation
  [Initial setup and prerequisites]

  ## Phase 2: Core Implementation
  [Main feature development]

  ## Phase 3: Integration
  [System integration tasks]

  ## Phase 4: Testing & Validation
  [Testing strategy and validation]

  ## Phase 5: Deployment
  [Deployment and rollout plan]

  ## Timeline Estimation
  [Rough estimates based on complexity]

  ## Resource Requirements
  [Team members, tools, infrastructure needed]

  ## Dependencies
  [External dependencies and blockers]

  ## Monitoring Plan
  [How to monitor success post-deployment]
</planning_file>

</step>

<step number="10" subagent="file-creator" name="create_technical_specs">

### Step 10: Create Technical Specifications

Generate all technical sub-specifications based on project type.

<conditional_specs>
  IF web_application:
    CREATE: sub-specs/frontend-spec.md
    CREATE: sub-specs/backend-spec.md
    CREATE: sub-specs/ui-ux-spec.md

  IF api_service:
    CREATE: sub-specs/api-spec.md
    CREATE: sub-specs/authentication-spec.md
    CREATE: sub-specs/rate-limiting-spec.md

  IF data_pipeline:
    CREATE: sub-specs/pipeline-spec.md
    CREATE: sub-specs/data-transformation-spec.md
    CREATE: sub-specs/monitoring-spec.md

  IF ml_system:
    CREATE: sub-specs/model-spec.md
    CREATE: sub-specs/training-pipeline-spec.md
    CREATE: sub-specs/inference-spec.md

  IF ios_application:
    CREATE: sub-specs/ios-app-spec.md
    CREATE: sub-specs/ios-ui-spec.md
    CREATE: sub-specs/app-store-spec.md

  IF android_application:
    CREATE: sub-specs/android-app-spec.md
    CREATE: sub-specs/android-ui-spec.md
    CREATE: sub-specs/play-store-spec.md

  IF aws_infrastructure:
    CREATE: sub-specs/aws-architecture-spec.md
    CREATE: sub-specs/aws-security-spec.md
    CREATE: sub-specs/aws-monitoring-spec.md

  IF firebase_backend:
    CREATE: sub-specs/firebase-services-spec.md
    CREATE: sub-specs/firestore-schema-spec.md
    CREATE: sub-specs/firebase-security-rules.md

  IF cloudflare_services:
    CREATE: sub-specs/cloudflare-config-spec.md
    CREATE: sub-specs/cloudflare-workers-spec.md
    CREATE: sub-specs/cloudflare-security-spec.md

  ALWAYS:
    CREATE: sub-specs/technical-spec.md
    IF database_changes: CREATE: sub-specs/database-schema.md
    IF external_deps: CREATE: sub-specs/dependencies-spec.md
</conditional_specs>

</step>

<step number="11" subagent="ai-reviewer" name="spec_review_and_validation">

### Step 11: AI-Driven Spec Review

Perform automated review of generated specifications.

<review_process>
  <completeness_check>
    VERIFY all required sections present
    CHECK for consistency across documents
    IDENTIFY any gaps or contradictions
  </completeness_check>

  <feasibility_analysis>
    ASSESS technical feasibility
    EVALUATE resource requirements
    CHECK timeline realism
  </feasibility_analysis>

  <quality_metrics>
    - Clarity Score: [1-10]
    - Completeness Score: [1-10]
    - Feasibility Score: [1-10]
    - Risk Coverage: [1-10]
  </quality_metrics>

  IF any_score < 7:
    SUGGEST improvements
    OFFER to regenerate sections
</review_process>

</step>

<step number="12" name="user_review_enhanced">

### Step 12: Enhanced User Review

Present comprehensive spec package for review.

<review_presentation>
  ## Specification Package Complete

  I've created a comprehensive specification package based on our discussion:

  ### Core Documents
  - Main Spec: @.agent-os/specs/YYYY-MM-DD-spec-name/spec.md
  - Summary: @.agent-os/specs/YYYY-MM-DD-spec-name/spec-lite.md

  ### Analysis Documents
  - Question Analysis: analysis/question-responses.md
  - Risk Assessment included in main spec

  ### Planning Documents
  - Implementation Plan: planning/implementation-plan.md
  - Phase Breakdown with timeline estimates

  ### Technical Specifications
  [LIST created technical specs based on project type]

  ### Quality Scores
  - Clarity: [SCORE]/10
  - Completeness: [SCORE]/10
  - Feasibility: [SCORE]/10
  - Risk Coverage: [SCORE]/10

  ### Next Steps
  1. Review the specifications
  2. Request any clarifications or changes
  3. When ready, run `/create-tasks` to generate the implementation checklist

  Would you like me to explain any section in more detail or make any adjustments?
</review_presentation>

</step>

</process_flow>

<adaptive_intelligence>

## Adaptive Learning System

<pattern_recognition>
  TRACK successful spec patterns
  IDENTIFY common requirement clusters
  LEARN from user corrections
  ADAPT questioning based on history
</pattern_recognition>

<continuous_improvement>
  STORE feedback in @.agent-os/learning/spec-patterns.md
  UPDATE question databases based on gaps found
  REFINE project type detection accuracy
  IMPROVE requirement discovery algorithms
</continuous_improvement>

</adaptive_intelligence>

<post_flight_check>
  EXECUTE: @.agent-os/instructions/meta/post-flight.md
</post_flight_check>

## Configuration

<settings>
  max_question_rounds: 3
  min_questions_per_round: 3
  max_questions_per_round: 12
  auto_discover_requirements: true
  perform_risk_analysis: true
  generate_implementation_plan: true
  ai_review_enabled: true
</settings>