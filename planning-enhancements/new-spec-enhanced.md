---
description: Enhanced Specification Creation Rules for Agent OS
globs:
alwaysApply: false
version: 2.0
encoding: UTF-8
---

# Enhanced Specification Creation Rules

## Overview

Generate intelligent, adaptive specifications that evolve based on project context, domain requirements, and organizational patterns. This enhanced version integrates intelligent questioning, multi-stage planning, and adaptive generation.

<pre_flight_check>
  EXECUTE: @.agent-os/instructions/meta/pre-flight.md
</pre_flight_check>

<process_flow>

<step number="1" subagent="context-fetcher" name="context_analysis">

### Step 1: Context Analysis

Use the context-fetcher subagent to analyze project context and determine specification depth.

<context_assessment>
  <analyze>
    - project_description
    - mentioned_technologies
    - user_expertise_level
    - project_timeline
  </analyze>

  <determine>
    - project_domain
    - complexity_level
    - planning_depth
    - specification_mode
  </determine>
</context_assessment>

<complexity_classification>
  simple:
    - single_feature
    - well_defined_scope
    - standard_patterns
    - timeline: "< 1 week"

  medium:
    - multiple_features
    - some_unknowns
    - custom_logic
    - timeline: "1-4 weeks"

  complex:
    - system_wide_changes
    - many_unknowns
    - novel_solutions
    - timeline: "> 4 weeks"
</complexity_classification>

</step>

<step number="2" subagent="intelligent-questioner" name="adaptive_questioning">

### Step 2: Adaptive Questioning

Use the intelligent questioning system to gather requirements based on detected context.

<question_generation>
  LOAD: @.agent-os/planning-enhancements/intelligent-questioning-system.md

  <execute>
    1. CLASSIFY domain from context
    2. GENERATE initial question set
    3. PRESENT questions in priority order
    4. ADAPT questions based on answers
    5. CONTINUE until sufficient_information
  </execute>
</question_generation>

<question_flow>
  <initial_questions count="3-5">
    - core_problem
    - target_users
    - success_metrics
    - constraints
  </initial_questions>

  <adaptive_questions>
    IF mentions_payment:
      ASK payment_specific_questions
    IF mentions_realtime:
      ASK realtime_specific_questions
    IF mentions_integration:
      ASK integration_specific_questions
  </adaptive_questions>

  <domain_questions>
    USE domain-specific question sets from intelligent-questioning-system.md
  </domain_questions>
</question_flow>

</step>

<step number="3" subagent="context-fetcher" name="organizational_context">

### Step 3: Gather Organizational Context

Use the context-fetcher to retrieve organizational standards and patterns.

<data_retrieval>
  <mandatory>
    - @.agent-os/product/mission-lite.md
    - @.agent-os/product/tech-stack.md
  </mandatory>

  <conditional>
    IF similar_specs_exist:
      - @.agent-os/specs/*/spec-lite.md
    IF standards_defined:
      - @.agent-os/standards/*.md
    IF decisions_documented:
      - @.agent-os/decisions/*.md
  </conditional>
</data_retrieval>

<pattern_extraction>
  - identify_common_patterns
  - extract_best_practices
  - note_organizational_preferences
</pattern_extraction>

</step>

<step number="4" subagent="planning-orchestrator" name="multi_stage_planning">

### Step 4: Execute Multi-Stage Planning

Use the multi-stage planning process to develop comprehensive specifications.

<stage_execution>
  LOAD: @.agent-os/planning-enhancements/multi-stage-planning-process.md

  <select_mode>
    IF complexity == "simple":
      USE quick_mode
    ELIF complexity == "medium":
      USE standard_mode
    ELIF complexity == "complex":
      USE comprehensive_mode
    ELSE:
      USE agile_mode
  </select_mode>

  <execute_stages>
    FOR each stage in selected_mode:
      EXECUTE stage
      VALIDATE stage_outputs
      COLLECT stage_deliverables
  </execute_stages>
</stage_execution>

</step>

<step number="5" subagent="date-checker" name="date_determination">

### Step 5: Date Determination

Use the date-checker subagent to determine current date for folder naming.

<date_format>
  format: YYYY-MM-DD
  usage: folder_naming
</date_format>

</step>

<step number="6" subagent="spec-generator" name="adaptive_specification">

### Step 6: Generate Adaptive Specification

Use the adaptive specification generator to create intelligent specs.

<generation_process>
  LOAD: @.agent-os/planning-enhancements/adaptive-specification-generation.md

  <context_preparation>
    domain: from_step_1
    complexity: from_step_1
    userAnswers: from_step_2
    organizationalContext: from_step_3
    planningOutputs: from_step_4
  </context_preparation>

  <adaptive_generation>
    1. SELECT appropriate template
    2. GENERATE base sections
    3. ENRICH with domain content
    4. ADD inferred requirements
    5. ENHANCE with patterns
    6. VALIDATE completeness
  </adaptive_generation>
</generation_process>

<intelligent_features>
  <requirement_inference>
    - analyze_user_answers
    - detect_implicit_needs
    - suggest_missing_requirements
  </requirement_inference>

  <pattern_application>
    - apply_domain_patterns
    - use_organizational_standards
    - leverage_similar_projects
  </pattern_application>

  <completeness_checking>
    - score_each_section
    - identify_gaps
    - suggest_improvements
  </completeness_checking>
</intelligent_features>

</step>

<step number="7" subagent="file-creator" name="create_spec_structure">

### Step 7: Create Enhanced Specification Structure

Use the file-creator subagent to create comprehensive spec folder structure.

<folder_structure>
  .agent-os/
  └── specs/
      └── YYYY-MM-DD-spec-name/
          ├── spec.md                 # Main specification
          ├── spec-lite.md            # Condensed version
          ├── planning/
          │   ├── questions-log.json  # Questions asked and answers
          │   ├── context.md          # Captured context
          │   └── decisions.md        # Decision rationale
          └── sub-specs/
              ├── technical-spec.md   # Technical details
              ├── database-schema.md  # If applicable
              ├── api-spec.md        # If applicable
              ├── ui-spec.md         # If applicable
              └── test-spec.md       # Test strategy
</folder_structure>

</step>

<step number="8" subagent="file-creator" name="create_main_spec">

### Step 8: Create Enhanced spec.md

Use the file-creator to create the main specification with intelligent content.

<enhanced_template>
  # Specification Requirements Document

  > Spec: [SPEC_NAME]
  > Created: [DATE]
  > Domain: [DETECTED_DOMAIN]
  > Complexity: [COMPLEXITY_LEVEL]
  > Planning Mode: [MODE_USED]

  ## Executive Summary
  [INTELLIGENT_SUMMARY_BASED_ON_CONTEXT]

  ## Context and Background
  ### Business Context
  [EXTRACTED_BUSINESS_CONTEXT]

  ### Technical Context
  [RELEVANT_TECHNICAL_BACKGROUND]

  ### Organizational Context
  [PATTERNS_FROM_ORGANIZATION]

  ## User Stories
  [INTELLIGENTLY_GENERATED_USER_STORIES]

  ## Functional Requirements
  ### Explicit Requirements
  [USER_DEFINED_REQUIREMENTS]

  ### Inferred Requirements
  [SYSTEM_INFERRED_REQUIREMENTS_WITH_CONFIDENCE]

  ### Domain-Specific Requirements
  [DOMAIN_BASED_REQUIREMENTS]

  ## Non-Functional Requirements
  [INTELLIGENTLY_DERIVED_NFRS]

  ## Technical Architecture
  [ADAPTIVE_ARCHITECTURE_BASED_ON_COMPLEXITY]

  ## Data Management
  [IF_APPLICABLE_DATA_REQUIREMENTS]

  ## Integration Points
  [IDENTIFIED_INTEGRATIONS]

  ## Security Considerations
  [DOMAIN_APPROPRIATE_SECURITY]

  ## Testing Strategy
  [COMPLEXITY_BASED_TEST_STRATEGY]

  ## Acceptance Criteria
  [COMPREHENSIVE_TESTABLE_CRITERIA]

  ## Risk Assessment
  [IDENTIFIED_RISKS_AND_MITIGATIONS]

  ## Dependencies
  [TECHNICAL_AND_BUSINESS_DEPENDENCIES]

  ## Delivery Plan
  [PHASED_DELIVERY_APPROACH]

  ## Success Metrics
  [MEASURABLE_SUCCESS_CRITERIA]
</enhanced_template>

</step>

<step number="9" subagent="file-creator" name="create_planning_artifacts">

### Step 9: Create Planning Artifacts

Document the planning process and decisions made.

<planning_documentation>
  <questions_log>
    {
      "timestamp": "[TIMESTAMP]",
      "domain": "[DOMAIN]",
      "questions": [
        {
          "id": "[ID]",
          "question": "[QUESTION]",
          "answer": "[ANSWER]",
          "category": "[CATEGORY]",
          "follow_ups": []
        }
      ],
      "context": {},
      "patterns_detected": []
    }
  </questions_log>

  <decisions_document>
    # Planning Decisions

    ## Domain Classification
    - Detected: [DOMAIN]
    - Confidence: [SCORE]
    - Rationale: [REASONING]

    ## Complexity Assessment
    - Level: [COMPLEXITY]
    - Factors: [FACTORS]
    - Mode Selected: [MODE]

    ## Key Decisions
    [NUMBERED_LIST_OF_DECISIONS_WITH_RATIONALE]

    ## Assumptions
    [LIST_OF_ASSUMPTIONS_MADE]

    ## Trade-offs
    [IDENTIFIED_TRADEOFFS]
  </decisions_document>
</planning_documentation>

</step>

<step number="10" subagent="file-creator" name="create_sub_specs">

### Step 10: Create Intelligent Sub-Specifications

Generate context-aware sub-specifications based on requirements.

<conditional_sub_specs>
  <technical_spec>
    ALWAYS_CREATE: true
    ENHANCE_WITH:
      - domain_best_practices
      - organizational_standards
      - complexity_appropriate_design
  </technical_spec>

  <database_schema>
    CREATE_IF: data_persistence_required
    INCLUDE:
      - entity_relationships
      - indexing_strategy
      - migration_plan
  </database_schema>

  <api_spec>
    CREATE_IF: api_endpoints_required
    FORMAT: OpenAPI_or_similar
    INCLUDE:
      - endpoint_definitions
      - request_response_schemas
      - authentication_flow
  </api_spec>

  <ui_spec>
    CREATE_IF: user_interface_required
    INCLUDE:
      - wireframes_description
      - component_hierarchy
      - interaction_patterns
      - responsive_requirements
  </ui_spec>

  <test_spec>
    ALWAYS_CREATE: true
    ADAPT_TO: complexity_level
    INCLUDE:
      - test_strategy
      - coverage_requirements
      - test_scenarios
      - automation_approach
  </test_spec>
</conditional_sub_specs>

</step>

<step number="11" subagent="validator" name="specification_validation">

### Step 11: Validate and Enhance Specification

Validate completeness and enhance with intelligent suggestions.

<validation_process>
  <completeness_check>
    - all_required_sections_present
    - sufficient_detail_level
    - no_ambiguous_requirements
    - testable_criteria_defined
  </completeness_check>

  <consistency_check>
    - requirements_alignment
    - no_contradictions
    - feasibility_verified
  </consistency_check>

  <enhancement_suggestions>
    IF gaps_identified:
      SUGGEST missing_elements
    IF patterns_available:
      SUGGEST pattern_applications
    IF risks_detected:
      SUGGEST mitigations
  </enhancement_suggestions>
</validation_process>

<quality_scoring>
  completeness_score: [0-100]
  clarity_score: [0-100]
  feasibility_score: [0-100]
  testability_score: [0-100]
  overall_score: [WEIGHTED_AVERAGE]
</quality_scoring>

</step>

<step number="12" subagent="ml-enhancer" name="machine_learning_enhancement">

### Step 12: Apply Machine Learning Enhancements (Optional)

If ML models are available, enhance the specification.

<ml_enhancement>
  <similarity_search>
    - find_similar_projects
    - extract_successful_patterns
    - apply_learned_optimizations
  </similarity_search>

  <quality_prediction>
    - predict_specification_quality
    - identify_improvement_areas
    - suggest_enhancements
  </quality_prediction>

  <requirement_suggestion>
    - suggest_missing_requirements
    - recommend_best_practices
    - propose_optimizations
  </requirement_suggestion>
</ml_enhancement>

</step>

<step number="13" name="user_review_interaction">

### Step 13: Interactive User Review

Present the specification with intelligent guidance for review.

<review_presentation>
  # Specification Review

  I've created an enhanced specification using:
  - Domain: [DOMAIN]
  - Complexity: [COMPLEXITY]
  - Planning Mode: [MODE]

  ## Generated Documents:
  - Main Spec: @.agent-os/specs/YYYY-MM-DD-spec-name/spec.md
  - Summary: @.agent-os/specs/YYYY-MM-DD-spec-name/spec-lite.md
  - Planning Artifacts: @.agent-os/specs/YYYY-MM-DD-spec-name/planning/
  - Sub-specifications: @.agent-os/specs/YYYY-MM-DD-spec-name/sub-specs/

  ## Quality Assessment:
  - Completeness: [SCORE]%
  - Clarity: [SCORE]%
  - Overall Quality: [SCORE]%

  ## Intelligent Insights:
  - [NUMBERED_LIST_OF_KEY_INSIGHTS]

  ## Suggested Enhancements:
  - [OPTIONAL_IMPROVEMENTS]

  ## Review Options:
  1. Accept specification as-is
  2. Request specific changes
  3. Add missing requirements
  4. Adjust complexity level
  5. Re-run with different mode

  Please review and let me know how to proceed.

  When ready, run `/create-tasks` to generate the implementation plan.
</review_presentation>

<iterative_refinement>
  WHILE user_requests_changes:
    COLLECT feedback
    UPDATE specification
    RE-VALIDATE
    PRESENT updates
</iterative_refinement>

</step>

</process_flow>

<continuous_learning>
  <capture>
    - user_feedback
    - accepted_suggestions
    - rejected_suggestions
    - final_specification
  </capture>

  <analyze>
    - success_patterns
    - failure_patterns
    - domain_trends
  </analyze>

  <improve>
    - update_question_sets
    - refine_templates
    - adjust_algorithms
    - retrain_models
  </improve>
</continuous_learning>

<post_flight_check>
  EXECUTE: @.agent-os/instructions/meta/post-flight.md
</post_flight_check>