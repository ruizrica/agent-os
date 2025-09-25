---
description: Multi-Stage Planning Framework for Agent OS
globs:
alwaysApply: false
version: 1.0
encoding: UTF-8
---

# Multi-Stage Planning Framework

## Overview

Implements iterative, multi-stage planning with progressive refinement and continuous validation for complex projects.

<planning_philosophy>
  Plans should evolve through multiple stages of refinement, with each stage adding detail and validation while maintaining flexibility for change.
</planning_philosophy>

<planning_stages>

## Stage 1: Discovery Planning (0-20% Definition)

<discovery_phase>
  <objectives>
    - Understand the problem space
    - Identify stakeholders
    - Gather initial requirements
    - Assess complexity and risks
  </objectives>

  <activities>
    - Use intelligent questioning from new-spec.md
    - Conduct stakeholder interviews
    - Review existing documentation
    - Identify constraints and dependencies
  </activities>

  <outputs>
    - Problem statement
    - Stakeholder map
    - Initial requirements list
    - Complexity assessment
  </outputs>

  <decision_gate>
    QUESTION: Is there enough clarity to proceed?
    IF yes: PROCEED to Stage 2
    IF no: CONTINUE discovery with targeted questions
  </decision_gate>
</discovery_phase>

## Stage 2: Conceptual Planning (20-40% Definition)

<conceptual_phase>
  <objectives>
    - Define solution approach
    - Create high-level architecture
    - Identify major components
    - Estimate effort and timeline
  </objectives>

  <activities>
    - Design solution architecture
    - Define component boundaries
    - Map integration points
    - Create rough estimates
  </activities>

  <outputs>
    - Solution architecture diagram
    - Component specification
    - Integration map
    - ROM estimates (±50%)
  </outputs>

  <validation>
    - Technical feasibility review
    - Stakeholder alignment check
    - Risk assessment
  </validation>

  <decision_gate>
    QUESTION: Is the approach validated?
    IF yes: PROCEED to Stage 3
    IF no: REFINE approach or RETURN to Stage 1
  </decision_gate>
</conceptual_phase>

## Stage 3: Detailed Planning (40-70% Definition)

<detailed_phase>
  <objectives>
    - Create detailed specifications
    - Define implementation tasks
    - Establish success criteria
    - Plan testing strategy
  </objectives>

  <activities>
    - Write detailed technical specs
    - Create task breakdown structure
    - Define acceptance criteria
    - Design test cases
  </activities>

  <outputs>
    - Detailed technical specifications
    - Task list with dependencies
    - Test plan
    - Refined estimates (±25%)
  </outputs>

  <risk_mitigation>
    FOR each identified_risk:
      DEFINE mitigation_strategy
      ASSIGN risk_owner
      CREATE contingency_plan
  </risk_mitigation>

  <decision_gate>
    QUESTION: Are specifications complete?
    IF yes: PROCEED to Stage 4
    IF no: CONTINUE refinement
  </decision_gate>
</detailed_phase>

## Stage 4: Implementation Planning (70-90% Definition)

<implementation_phase>
  <objectives>
    - Create execution roadmap
    - Assign resources
    - Define milestones
    - Establish monitoring
  </objectives>

  <activities>
    - Sequence tasks and dependencies
    - Create sprint plans
    - Define rollout strategy
    - Setup monitoring framework
  </activities>

  <outputs>
    - Implementation roadmap
    - Sprint backlogs
    - Deployment plan
    - Monitoring dashboard design
  </outputs>

  <pre_implementation_checklist>
    □ All dependencies identified
    □ Resources allocated
    □ Risks mitigated
    □ Success metrics defined
    □ Rollback plan created
  </pre_implementation_checklist>

  <decision_gate>
    QUESTION: Ready to begin implementation?
    IF yes: PROCEED to Stage 5
    IF no: ADDRESS gaps
  </decision_gate>
</implementation_phase>

## Stage 5: Adaptive Execution (90-100% Definition)

<execution_phase>
  <objectives>
    - Execute implementation
    - Monitor progress
    - Adapt to changes
    - Ensure quality
  </objectives>

  <continuous_activities>
    - Daily progress tracking
    - Risk monitoring
    - Quality assurance
    - Stakeholder communication
  </activities>

  <adaptation_triggers>
    IF new_requirement_discovered:
      ASSESS impact
      UPDATE plan if needed
      COMMUNICATE changes

    IF blocker_encountered:
      ACTIVATE contingency plan
      ESCALATE if needed
      DOCUMENT lessons learned

    IF ahead_of_schedule:
      CONSIDER additional improvements
      VALIDATE with stakeholders
  </adaptation_triggers>

  <completion_criteria>
    - All acceptance criteria met
    - Testing complete and passed
    - Documentation updated
    - Stakeholders sign-off received
  </completion_criteria>
</execution_phase>

</planning_stages>

<progressive_refinement>

## Refinement Principles

1. **Iterative Detail Addition**
   - Start with broad strokes
   - Add detail in each iteration
   - Maintain traceability

2. **Continuous Validation**
   - Validate assumptions early
   - Test approaches with prototypes
   - Gather feedback regularly

3. **Flexible Adaptation**
   - Plans are guides, not contracts
   - Embrace change when beneficial
   - Learn and adjust continuously

4. **Risk-Based Focus**
   - Address high-risk items first
   - Build confidence progressively
   - Have contingencies ready

</progressive_refinement>

<planning_tools>

## Supporting Tools and Techniques

### Estimation Techniques
- Three-point estimation
- Planning poker
- Analogous estimation
- Parametric modeling

### Visualization Tools
- Mind maps for discovery
- Architecture diagrams
- Gantt charts for timeline
- Kanban boards for execution

### Communication Formats
- Executive summaries
- Technical deep dives
- Progress dashboards
- Risk registers

</planning_tools>

<integration_points>

## Integration with Agent OS Workflow

1. **Links to new-spec.md**
   - Use for Stage 1 discovery
   - Leverage question databases
   - Apply intelligent questioning

2. **Links to create-tasks.md**
   - Generate from Stage 3 outputs
   - Maintain task traceability
   - Update based on execution

3. **Links to execution workflows**
   - Feed into execute-tasks.md
   - Support parallel execution
   - Enable progress tracking

</integration_points>

<metrics_and_monitoring>

## Planning Effectiveness Metrics

### Planning Quality
- Requirements stability (changes after Stage 3)
- Estimate accuracy (actual vs planned)
- Risk prediction rate

### Execution Efficiency
- On-time delivery rate
- Budget adherence
- Scope creep percentage

### Continuous Improvement
- Lessons learned captured
- Process improvements implemented
- Team satisfaction scores

</metrics_and_monitoring>

<anti_patterns>

## Planning Anti-Patterns to Avoid

1. **Big Bang Planning**
   - Trying to plan everything upfront
   - Not allowing for iteration

2. **Analysis Paralysis**
   - Over-analyzing without deciding
   - Seeking perfect information

3. **Rigid Adherence**
   - Following plan despite new information
   - Ignoring beneficial changes

4. **Under-Planning**
   - Jumping to implementation
   - Skipping validation steps

</anti_patterns>