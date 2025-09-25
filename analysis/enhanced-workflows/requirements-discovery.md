---
description: Intelligent Requirements Discovery for Agent OS
globs:
alwaysApply: false
version: 2.0
encoding: UTF-8
---

# Requirements Discovery Rules

## Overview

Intelligent, context-aware requirements gathering through progressive questioning and domain-specific inquiry patterns.

<pre_flight_check>
  EXECUTE: @.agent-os/instructions/meta/pre-flight.md
</pre_flight_check>

<process_flow>

<step number="1" name="project_classification">

### Step 1: Project Classification

Determine the project type and domain to load appropriate question frameworks.

<classification_prompt>
  Let me help you gather requirements for your project. First, I need to understand what type of project this is.

  Please tell me:
  1. What are you building? (brief description)
  2. Who will use it? (target audience)
  3. What's the main problem it solves?
</classification_prompt>

<project_types>
  <type id="web_app">Web Application</type>
  <type id="mobile_app">Mobile Application</type>
  <type id="api_service">API Service</type>
  <type id="data_pipeline">Data Pipeline</type>
  <type id="cli_tool">Command Line Tool</type>
  <type id="desktop_app">Desktop Application</type>
  <type id="ml_model">Machine Learning Model</type>
  <type id="hybrid">Hybrid/Multiple Components</type>
</project_types>

<domain_categories>
  <domain id="e_commerce">E-commerce/Marketplace</domain>
  <domain id="saas">Software as a Service</domain>
  <domain id="enterprise">Enterprise/Internal Tool</domain>
  <domain id="consumer">Consumer Application</domain>
  <domain id="healthcare">Healthcare/Medical</domain>
  <domain id="fintech">Financial Technology</domain>
  <domain id="education">Education/Learning</domain>
  <domain id="social">Social/Communication</domain>
  <domain id="gaming">Gaming/Entertainment</domain>
  <domain id="iot">IoT/Hardware Integration</domain>
</domain_categories>

<analysis_logic>
  ANALYZE user_response
  IDENTIFY project_type FROM keywords AND patterns
  DETERMINE domain FROM business_context
  IF unclear:
    ASK clarifying questions:
      - "Is this primarily web-based, mobile, or desktop?"
      - "Is this for businesses (B2B) or consumers (B2C)?"
      - "Will this handle data processing or user interactions?"
</analysis_logic>

</step>

<step number="2" name="load_question_framework">

### Step 2: Load Contextual Question Framework

Based on classification, load and customize the appropriate question set.

<framework_selection>
  LOAD base_questions FOR project_type
  LOAD domain_questions FOR domain
  LOAD compliance_questions IF regulated_industry
  MERGE AND PRIORITIZE questions
</framework_selection>

<question_customization>
  IF project_type == "web_app" AND domain == "e_commerce":
    PRIORITIZE payment, inventory, user_accounts questions
    ADD marketplace-specific questions IF mentioned

  IF project_type == "api_service" AND domain == "fintech":
    PRIORITIZE security, compliance, transaction questions
    ADD regulatory questions

  IF domain IN ["healthcare", "fintech", "education"]:
    MANDATORY compliance and privacy questions
</question_customization>

</step>

<step number="3" name="discovery_conversation">

### Step 3: Progressive Discovery Conversation

Conduct intelligent, adaptive questioning based on user responses.

<conversation_phases>

  <phase name="core_discovery">
    ### Understanding Your Vision

    Let me ask you some key questions to understand your project better:

    **Problem & Solution**
    1. What specific problem does this solve that existing solutions don't?
    2. What's the "aha moment" for users - when do they realize the value?
    3. What would success look like 6 months after launch?

    **Users & Usage**
    4. Describe your primary user persona in detail.
    5. How frequently will they use this? (daily, weekly, occasionally)
    6. What's their technical sophistication level?

    **Scope & Priorities**
    7. What are the 3 must-have features for launch?
    8. What can we explicitly leave out of v1?
    9. What's your target launch date or timeline?
  </phase>

  <phase name="technical_discovery">
    ### Technical Requirements

    Based on what you've told me about [PROJECT_SUMMARY], let's discuss technical needs:

    [DYNAMIC QUESTIONS BASED ON PROJECT TYPE]
  </phase>

  <phase name="constraints_discovery">
    ### Constraints & Considerations

    Now let's identify any constraints or special considerations:

    **Technical Constraints**
    - Are there existing systems this needs to integrate with?
    - Any specific technology preferences or restrictions?
    - Performance requirements? (load time, concurrent users, data volume)

    **Business Constraints**
    - Budget considerations?
    - Team size and expertise?
    - Regulatory or compliance requirements?

    **Risk Factors**
    - What could cause this project to fail?
    - What are the critical dependencies?
    - What's your Plan B if the main approach doesn't work?
  </phase>

</conversation_phases>

<adaptive_questioning>
  FOR each user_response:
    ANALYZE for keywords and patterns
    IF mentions("real-time"):
      ADD questions about latency, websockets, update frequency
    IF mentions("payment"):
      ADD questions about processors, currencies, PCI compliance
    IF mentions("scale"):
      ADD questions about growth projections, peak loads, geographic distribution
    IF mentions("mobile"):
      ADD questions about offline support, app stores, device features
    IF mentions("integration"):
      ADD questions about APIs, data formats, authentication methods
</adaptive_questioning>

<response_analysis>
  <pattern_detection>
    IDENTIFY technical_complexity FROM response_patterns
    DETECT implicit_requirements FROM domain_context
    RECOGNIZE risk_factors FROM uncertainty_indicators
  </pattern_detection>

  <follow_up_generation>
    IF answer_vague:
      GENERATE clarifying_question WITH example
    IF answer_reveals_complexity:
      DRILL_DOWN with specific technical questions
    IF answer_shows_assumption:
      VALIDATE assumption WITH confirmation question
  </follow_up_generation>
</response_analysis>

</step>

<step number="4" name="requirement_synthesis">

### Step 4: Synthesize Requirements

Organize discovered requirements into structured format.

<synthesis_structure>
  <functional_requirements>
    - Core features identified
    - User workflows mapped
    - Integration points defined
  </functional_requirements>

  <non_functional_requirements>
    - Performance targets
    - Security requirements
    - Scalability needs
    - Compliance requirements
  </non_functional_requirements>

  <technical_decisions>
    - Architecture style
    - Technology choices
    - Infrastructure needs
  </technical_decisions>

  <constraints_and_risks>
    - Identified constraints
    - Risk factors
    - Mitigation strategies
  </constraints_and_risks>

  <assumptions>
    - Business assumptions
    - Technical assumptions
    - User behavior assumptions
  </assumptions>
</synthesis_structure>

<validation_check>
  PRESENT synthesized requirements TO user
  ASK: "Have I understood your requirements correctly?"
  ITERATE if corrections needed
</validation_check>

</step>

<step number="5" name="create_discovery_document">

### Step 5: Create Discovery Document

Document all gathered requirements and insights.

<document_creation>
  CREATE .agent-os/discovery/YYYY-MM-DD-project-name/requirements-discovery.md

  # Requirements Discovery Report

  ## Project Classification
  - **Type**: [IDENTIFIED_TYPE]
  - **Domain**: [IDENTIFIED_DOMAIN]
  - **Complexity**: [LOW|MEDIUM|HIGH]

  ## Executive Summary
  [2-3 sentence summary of project vision and goals]

  ## Problem Statement
  ### The Problem
  [Detailed problem description from user responses]

  ### The Solution
  [How this project solves the problem]

  ### Success Metrics
  [How success will be measured]

  ## User Profiles
  ### Primary User
  [Detailed persona from responses]

  ### Use Cases
  [Key workflows and scenarios]

  ## Functional Requirements
  ### Must Have (MVP)
  [List of essential features]

  ### Should Have
  [Important but not critical features]

  ### Nice to Have
  [Future enhancements]

  ## Non-Functional Requirements
  ### Performance
  [Specific metrics and targets]

  ### Security
  [Security requirements and compliance]

  ### Scalability
  [Growth projections and needs]

  ## Technical Architecture
  ### Proposed Stack
  [Technology choices with rationale]

  ### Integration Points
  [External systems and APIs]

  ### Infrastructure
  [Deployment and hosting needs]

  ## Constraints & Risks
  ### Constraints
  [Budget, timeline, technical limitations]

  ### Risks
  [Identified risks with mitigation strategies]

  ## Assumptions
  [List of assumptions to validate]

  ## Next Steps
  1. Review and validate this discovery document
  2. Create detailed technical specification
  3. Build project roadmap
  4. Begin implementation planning

  ## Discovery Session Details
  - **Date**: [SESSION_DATE]
  - **Method**: Progressive questioning with [X] rounds of clarification
  - **Confidence Level**: [HIGH|MEDIUM|LOW]
</document_creation>

</step>

<step number="6" name="handoff_to_planning">

### Step 6: Handoff to Planning Phase

Prepare discovered requirements for the planning workflow.

<handoff_package>
  <for_plan_product>
    - main_idea: [EXTRACTED_FROM_DISCOVERY]
    - key_features: [PRIORITIZED_FEATURE_LIST]
    - target_users: [USER_PERSONAS]
    - tech_stack: [PROPOSED_STACK]
  </for_plan_product>

  <for_create_spec>
    - functional_requirements: [DETAILED_LIST]
    - non_functional_requirements: [PERFORMANCE_SECURITY_ETC]
    - technical_constraints: [IDENTIFIED_CONSTRAINTS]
    - risk_factors: [RISK_MITIGATION_NEEDED]
  </for_create_spec>

  <confidence_indicators>
    - Requirement completeness: [0-100%]
    - Technical clarity: [0-100%]
    - Risk understanding: [0-100%]
  </confidence_indicators>
</handoff_package>

<transition_prompt>
  I've completed the requirements discovery phase. We now have a clear understanding of:
  ✓ Project goals and problem to solve
  ✓ Target users and their needs
  ✓ Technical requirements and constraints
  ✓ Risks and mitigation strategies

  The discovery document has been saved to: [DOCUMENT_PATH]

  Would you like to:
  1. Review and refine the requirements
  2. Proceed to create the product plan (`/plan-product`)
  3. Jump directly to specification (`/create-spec`)

  What would you like to do next?
</transition_prompt>

</step>

</process_flow>

## Question Framework Library

<web_app_framework>
  <discovery_questions>
    - "Will users need to create accounts and log in?"
    - "Is this for desktop, mobile, or both?"
    - "Do you need search functionality?"
    - "Will there be user-generated content?"
    - "Do you need an admin panel?"
  </discovery_questions>

  <technical_questions>
    - "SEO important for discoverability?"
    - "Need to work offline?"
    - "Real-time updates required?"
    - "File upload capabilities?"
    - "Email notifications?"
  </technical_questions>

  <scale_questions>
    - "Expected number of users at launch?"
    - "Growth projections for year 1?"
    - "Peak concurrent users?"
    - "Data storage growth rate?"
  </scale_questions>
</web_app_framework>

<mobile_app_framework>
  <platform_questions>
    - "iOS, Android, or both?"
    - "Native or cross-platform?"
    - "Tablet support needed?"
    - "Minimum OS versions?"
  </platform_questions>

  <feature_questions>
    - "Push notifications?"
    - "Location services?"
    - "Camera/photo access?"
    - "Offline functionality?"
    - "Background processing?"
  </feature_questions>

  <distribution_questions>
    - "App store or enterprise distribution?"
    - "Beta testing approach?"
    - "Update strategy?"
  </distribution_questions>
</mobile_app_framework>

<api_service_framework>
  <architecture_questions>
    - "REST, GraphQL, or gRPC?"
    - "Public or internal API?"
    - "Versioning strategy?"
    - "Rate limiting needs?"
  </architecture_questions>

  <integration_questions>
    - "Who will consume this API?"
    - "Authentication method?"
    - "Expected request volume?"
    - "Response time requirements?"
  </integration_questions>

  <data_questions>
    - "Data formats needed?"
    - "Pagination approach?"
    - "Caching requirements?"
    - "Webhook support?"
  </data_questions>
</api_service_framework>

## Intelligence Rules

<smart_defaults>
  IF e_commerce THEN assume_needs:
    - Payment processing
    - Inventory management
    - Order tracking
    - Customer accounts
    - Admin dashboard

  IF b2b THEN assume_needs:
    - Role-based access
    - Team management
    - Audit logging
    - SSO integration
    - API access

  IF healthcare THEN assume_needs:
    - HIPAA compliance
    - Audit trails
    - Data encryption
    - Access controls
    - Patient privacy
</smart_defaults>

<risk_detection>
  WATCH_FOR:
    - Vague success metrics → Request specific KPIs
    - No budget mentioned → Ask about constraints
    - Ambitious timeline → Discuss phasing
    - Many integrations → Assess complexity
    - Regulated industry → Ensure compliance understanding
</risk_detection>

<post_flight_check>
  EXECUTE: @.agent-os/instructions/meta/post-flight.md
</post_flight_check>