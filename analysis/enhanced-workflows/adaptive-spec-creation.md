---
description: Adaptive Specification Creation with Intelligent Questioning
globs:
alwaysApply: false
version: 2.0
encoding: UTF-8
---

# Adaptive Specification Creation Rules

## Overview

Enhanced specification creation with domain-aware templates, progressive refinement, and feedback loops.

<pre_flight_check>
  EXECUTE: @.agent-os/instructions/meta/pre-flight.md
</pre_flight_check>

<process_flow>

<step number="1" subagent="context-fetcher" name="context_initialization">

### Step 1: Context Initialization

Load discovery context or gather initial requirements.

<context_sources>
  <primary_source>
    CHECK IF EXISTS: .agent-os/discovery/*/requirements-discovery.md
    IF found:
      LOAD discovery document
      EXTRACT key requirements
      SKIP to step 3
  </primary_source>

  <fallback_source>
    CHECK roadmap.md for next item
    OR accept user specification
  </fallback_source>
</context_sources>

</step>

<step number="2" name="intelligent_scoping">

### Step 2: Intelligent Scoping Session

If no discovery document exists, conduct focused scoping.

<scoping_strategy>
  Based on what you want to build, I'll ask targeted questions to create a clear specification.

  <initial_assessment>
    QUICK QUESTIONS to determine:
    - Complexity level (simple|medium|complex)
    - Risk factors (low|medium|high)
    - Clarity of requirements (clear|fuzzy|unknown)
  </initial_assessment>

  <adaptive_depth>
    IF complexity == "simple" AND clarity == "clear":
      ASK 3-5 essential questions
    ELIF complexity == "complex" OR clarity == "fuzzy":
      ASK 8-12 detailed questions with follow-ups
    ELSE:
      ASK 5-8 moderate questions
  </adaptive_depth>
</scoping_strategy>

<smart_questions>
  <essential_always_ask>
    1. "What triggers this feature/flow to start?"
    2. "What's the successful outcome look like?"
    3. "What could go wrong and how should we handle it?"
    4. "Who can access this feature?"
    5. "Any existing features this affects?"
  </essential_always_ask>

  <conditional_questions>
    IF involves_data_modification:
      - "What validations are needed?"
      - "How to handle concurrent updates?"
      - "Audit trail requirements?"

    IF involves_user_interaction:
      - "Mobile responsive needed?"
      - "Accessibility requirements?"
      - "Error message strategy?"

    IF involves_third_party:
      - "API rate limits?"
      - "Fallback if service down?"
      - "Data synchronization approach?"

    IF involves_payments:
      - "Payment methods to support?"
      - "Refund handling?"
      - "Currency requirements?"
      - "Tax calculations?"
  </conditional_questions>
</smart_questions>

</step>

<step number="3" name="specification_template_selection">

### Step 3: Select and Customize Specification Template

Choose appropriate template based on feature type.

<template_types>
  <crud_feature>
    FOR: Basic create, read, update, delete operations
    INCLUDES: Data model, validations, permissions
  </crud_feature>

  <workflow_feature>
    FOR: Multi-step processes with state transitions
    INCLUDES: State diagram, transitions, notifications
  </workflow_feature>

  <integration_feature>
    FOR: Third-party service integrations
    INCLUDES: API mappings, error handling, sync strategy
  </integration_feature>

  <analytics_feature>
    FOR: Reporting and dashboard features
    INCLUDES: Metrics, calculations, visualization
  </analytics_feature>

  <user_facing_feature>
    FOR: UI-heavy features
    INCLUDES: Wireframes, interactions, responsive behavior
  </user_facing_feature>
</template_types>

<template_customization>
  BASED ON domain AND project_type:
    ADD domain-specific sections
    INCLUDE compliance requirements
    ADD performance benchmarks
</template_customization>

</step>

<step number="4" subagent="file-creator" name="create_adaptive_spec">

### Step 4: Create Adaptive Specification

Generate specification with embedded intelligence and variability markers.

<adaptive_spec_structure>
  # Feature Specification: [FEATURE_NAME]

  > Specification Type: [TEMPLATE_TYPE]
  > Complexity: [LOW|MEDIUM|HIGH]
  > Risk Level: [LOW|MEDIUM|HIGH]
  > Confidence: [0-100%]

  ## Quick Summary
  [1-2 sentences that could be used for commit messages]

  ## Context & Background
  ### Problem Context
  [Why this feature is needed, what problem it solves]

  ### Dependencies
  - Depends on: [List existing features/systems]
  - Blocks: [List features waiting for this]
  - Related to: [List related features]

  ## Functional Specification

  ### Core Requirements
  [ADAPTIVE: Based on template type]

  ### Edge Cases & Error Handling
  [DISCOVERED: From intelligent questioning]
  - Edge case 1: [Description] → [Handling]
  - Edge case 2: [Description] → [Handling]

  ### Variations & Options
  [MARKED for future decisions]
  - Option A: [Description] ← DEFAULT
  - Option B: [Description] (if [CONDITION])
  - Decision needed by: [DATE/PHASE]

  ## User Experience

  ### User Flows
  [VISUAL: Include ASCII diagrams where helpful]
  ```
  Start → [Action] → {Decision} → [Outcome]
           ↓            ↓
        [Alt Path]  [Error Path]
  ```

  ### UI/UX Requirements
  [CONDITIONAL: Only if user-facing]
  - Responsive breakpoints: [mobile|tablet|desktop]
  - Accessibility: [WCAG 2.1 Level AA]
  - Interaction patterns: [Defined based on platform]

  ## Technical Specification

  ### Architecture Impact
  - New components: [List]
  - Modified components: [List]
  - Database changes: [YES|NO] → See database-spec.md
  - API changes: [YES|NO] → See api-spec.md

  ### Implementation Approach
  [SUGGESTED: Based on codebase analysis]
  1. Phase 1: [Foundation work]
  2. Phase 2: [Core implementation]
  3. Phase 3: [Polish and edge cases]

  ### Performance Targets
  [SMART: Specific, Measurable, Achievable, Relevant, Time-bound]
  - Response time: < [X]ms for 95th percentile
  - Throughput: [X] requests per second
  - Resource usage: < [X]MB memory

  ## Testing Strategy

  ### Test Scenarios
  [GENERATED: Based on requirements]
  1. Happy path: [Scenario]
  2. Error path: [Scenario]
  3. Edge case: [Scenario]
  4. Performance: [Scenario]

  ### Acceptance Criteria
  [MEASURABLE: Clear pass/fail conditions]
  - [ ] Criterion 1 with specific metric
  - [ ] Criterion 2 with specific metric

  ## Risk Assessment

  ### Technical Risks
  - Risk: [Description]
    - Likelihood: [LOW|MEDIUM|HIGH]
    - Impact: [LOW|MEDIUM|HIGH]
    - Mitigation: [Strategy]

  ### Business Risks
  [Identified from questioning]

  ## Implementation Notes

  ### Decisions Made
  - Decision 1: [What] because [Why]
  - Decision 2: [What] because [Why]

  ### Open Questions
  [TRACKING: For iterative refinement]
  - [ ] Question 1 (Owner: [WHO], Due: [WHEN])
  - [ ] Question 2 (Owner: [WHO], Due: [WHEN])

  ### Future Considerations
  [FORWARD-LOOKING: For v2 and beyond]
  - Enhancement opportunity 1
  - Potential optimization 1

  ## Metadata
  - Created: [DATE]
  - Last Updated: [DATE]
  - Version: [X.Y]
  - Review Status: [DRAFT|REVIEW|APPROVED]
  - Iteration Count: [N]
</adaptive_spec_structure>

</step>

<step number="5" name="iterative_refinement">

### Step 5: Enable Iterative Refinement

Set up feedback mechanisms and refinement triggers.

<refinement_triggers>
  <during_review>
    IF user identifies gap:
      ASK clarifying questions
      UPDATE specification
      INCREMENT iteration_count
  </during_review>

  <during_implementation>
    IF developer discovers issue:
      CAPTURE feedback in spec
      PROPOSE solution options
      UPDATE after decision
  </during_implementation>

  <during_testing>
    IF test reveals ambiguity:
      CLARIFY requirement
      UPDATE acceptance criteria
      ADD test scenario
  </during_testing>
</refinement_triggers>

<feedback_capture>
  ## Feedback Log

  ### Iteration [N] - [DATE]
  **Trigger**: [Review|Implementation|Testing|Other]
  **Issue**: [Description]
  **Resolution**: [Decision made]
  **Updated Sections**: [List]
</feedback_capture>

</step>

<step number="6" name="living_document_features">

### Step 6: Living Document Features

Enable the specification to evolve intelligently.

<living_features>
  <auto_updates>
    WHEN code is committed:
      CHECK if spec assumptions validated
      MARK confirmed decisions
      FLAG deviations for review
  </auto_updates>

  <smart_suggestions>
    BASED ON similar features:
      SUGGEST missing requirements
      RECOMMEND test scenarios
      PROPOSE optimizations
  </smart_suggestions>

  <progress_tracking>
    - Requirements covered: [X/Y]
    - Tests written: [X/Y]
    - Edge cases handled: [X/Y]
    - Performance targets met: [YES|NO|PARTIAL]
  </progress_tracking>
</living_features>

</step>

<step number="7" name="specification_validation">

### Step 7: Intelligent Validation

Validate specification completeness and consistency.

<validation_checks>
  <completeness_check>
    VERIFY all required sections populated
    CHECK for TODO markers
    ENSURE acceptance criteria measurable
    VALIDATE test scenarios cover requirements
  </completeness_check>

  <consistency_check>
    CROSS-REFERENCE with:
      - Mission document
      - Tech stack
      - Existing features
      - API conventions
    FLAG inconsistencies
  </consistency_check>

  <feasibility_check>
    ASSESS technical feasibility
    ESTIMATE effort vs. complexity
    IDENTIFY resource gaps
    CHECK timeline realism
  </feasibility_check>
</validation_checks>

<validation_report>
  ## Specification Validation Report

  ### Completeness: [SCORE]%
  - ✓ All sections complete
  - ⚠ Missing: [List]

  ### Consistency: [PASS|FAIL]
  - ✓ Aligns with architecture
  - ⚠ Conflicts: [List]

  ### Feasibility: [HIGH|MEDIUM|LOW]
  - Estimated effort: [DAYS]
  - Required skills: [List]
  - Risk level: [Assessment]

  ### Recommendations
  1. [Suggestion to improve spec]
  2. [Risk to address]
  3. [Optimization opportunity]
</validation_report>

</step>

<step number="8" name="handoff_package">

### Step 8: Create Handoff Package

Prepare specification for implementation phase.

<handoff_contents>
  <for_developers>
    - Technical spec with implementation notes
    - Architecture diagrams
    - API contracts
    - Performance benchmarks
  </for_developers>

  <for_testers>
    - Test scenarios
    - Acceptance criteria
    - Edge cases
    - Test data requirements
  </for_testers>

  <for_designers>
    - UI/UX requirements
    - User flows
    - Responsive requirements
    - Accessibility standards
  </for_designers>

  <for_project_manager>
    - Timeline estimates
    - Risk assessment
    - Dependency map
    - Progress tracking setup
  </for_project_manager>
</handoff_contents>

<transition_message>
  ## ✅ Specification Complete

  The adaptive specification has been created with:
  - **Confidence Level**: [X]%
  - **Completeness**: [X]%
  - **Iterations**: [N] refinement cycles

  ### Key Decisions Made:
  [List major decisions from spec]

  ### Open Items Remaining:
  [List unresolved questions]

  ### Next Steps:
  1. Review the specification
  2. Create implementation tasks (`/create-tasks`)
  3. Begin development (`/execute-tasks`)

  The specification will continue to evolve during implementation.
  All feedback will be captured and incorporated.

  Ready to proceed with task creation?
</transition_message>

</step>

</process_flow>

## Intelligence Patterns

<pattern_library>
  <authentication_pattern>
    WHEN feature involves authentication:
      INCLUDE session management approach
      SPECIFY token lifetime
      DEFINE password requirements
      PLAN account recovery
  </authentication_pattern>

  <data_modification_pattern>
    WHEN feature modifies data:
      INCLUDE validation rules
      SPECIFY conflict resolution
      DEFINE rollback strategy
      PLAN audit logging
  </data_modification_pattern>

  <third_party_pattern>
    WHEN feature uses external service:
      INCLUDE retry strategy
      SPECIFY timeout values
      DEFINE fallback behavior
      PLAN error mapping
  </third_party_pattern>
</pattern_library>

<domain_intelligence>
  <e_commerce>
    AUTO_CONSIDER:
      - Cart persistence strategy
      - Inventory checking
      - Price calculation rules
      - Tax handling
  </e_commerce>

  <saas>
    AUTO_CONSIDER:
      - Multi-tenancy approach
      - Usage tracking
      - Billing integration
      - Feature flags
  </saas>

  <healthcare>
    AUTO_CONSIDER:
      - PHI handling
      - Audit requirements
      - Consent management
      - Data retention
  </healthcare>
</domain_intelligence>

<post_flight_check>
  EXECUTE: @.agent-os/instructions/meta/post-flight.md
</post_flight_check>