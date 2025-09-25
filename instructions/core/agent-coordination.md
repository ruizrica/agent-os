---
description: Enhanced Agent Coordination System for Agent OS
globs:
alwaysApply: false
version: 1.0
encoding: UTF-8
---

# Enhanced Agent Coordination System

## Overview

Orchestrates multiple specialized agents to work collaboratively on complex tasks with intelligent handoffs and parallel execution capabilities.

<coordination_principles>
  Agents should work like a well-coordinated team, with clear roles, efficient communication, and adaptive collaboration patterns.
</coordination_principles>

<agent_registry>

## Available Specialized Agents

### Core Execution Agents
1. **context-fetcher** - Retrieves and analyzes context
2. **file-creator** - Creates and manages files
3. **date-checker** - Handles date/time operations
4. **project-manager** - Oversees project coordination
5. **test-runner** - Executes and validates tests
6. **git-workflow** - Manages version control

### Analysis Agents
7. **requirement-analyzer** - Analyzes and refines requirements
8. **risk-assessor** - Identifies and evaluates risks
9. **performance-optimizer** - Optimizes code and system performance
10. **security-scanner** - Identifies security vulnerabilities

### Planning Agents
11. **architecture-designer** - Creates system architectures
12. **task-planner** - Breaks down work into tasks
13. **resource-estimator** - Estimates time and resources
14. **dependency-mapper** - Maps task dependencies

</agent_registry>

<coordination_patterns>

## Coordination Patterns

### Sequential Handoff Pattern
<sequential_pattern>
  <use_case>Tasks with clear dependencies</use_case>

  <flow>
    Agent_A completes task →
    Passes context to Agent_B →
    Agent_B continues work →
    Passes to Agent_C
  </flow>

  <example>
    context-fetcher → requirement-analyzer → architecture-designer → file-creator
  </example>

  <handoff_protocol>
    AGENT completing:
      1. SUMMARIZE work completed
      2. PACKAGE relevant context
      3. IDENTIFY next agent
      4. TRANSFER with clear instructions

    AGENT receiving:
      1. ACKNOWLEDGE receipt
      2. VALIDATE context completeness
      3. REQUEST clarification if needed
      4. PROCEED with task
  </handoff_protocol>
</sequential_pattern>

### Parallel Execution Pattern
<parallel_pattern>
  <use_case>Independent tasks that can run simultaneously</use_case>

  <flow>
    Coordinator splits work →
    Multiple agents work in parallel →
    Results aggregated →
    Unified output produced
  </flow>

  <example>
    project-manager coordinates:
      - file-creator (creates structure)
      - requirement-analyzer (analyzes specs)
      - test-runner (sets up test framework)
    All work simultaneously, then merge results
  </example>

  <synchronization>
    PARALLEL_START:
      1. DEFINE clear boundaries
      2. ASSIGN independent tasks
      3. SET synchronization points

    PARALLEL_EXECUTE:
      - Agents work independently
      - Progress tracked centrally
      - No blocking dependencies

    PARALLEL_MERGE:
      1. COLLECT all outputs
      2. RESOLVE any conflicts
      3. INTEGRATE results
      4. VALIDATE completeness
  </synchronization>
</parallel_pattern>

### Collaborative Pattern
<collaborative_pattern>
  <use_case>Complex tasks requiring multiple perspectives</use_case>

  <flow>
    Multiple agents analyze same input →
    Share insights →
    Reach consensus →
    Produce unified output
  </flow>

  <example>
    For architecture design:
      - architecture-designer proposes structure
      - security-scanner reviews for vulnerabilities
      - performance-optimizer suggests improvements
      - All collaborate on final design
  </example>

  <collaboration_protocol>
    1. SHARE initial analysis
    2. PROVIDE feedback on others' work
    3. ITERATE on solutions
    4. REACH consensus
    5. DOCUMENT decisions
  </collaboration_protocol>
</collaborative_pattern>

### Hierarchical Pattern
<hierarchical_pattern>
  <use_case>Complex projects with sub-tasks</use_case>

  <flow>
    Lead agent breaks down work →
    Delegates to specialist agents →
    Monitors progress →
    Aggregates results
  </flow>

  <example>
    project-manager leads:
      └── task-planner (creates plan)
          ├── file-creator (implements)
          ├── test-runner (validates)
          └── git-workflow (commits)
  </example>

  <delegation_rules>
    LEAD agent:
      - BREAK down complex work
      - ASSIGN to specialists
      - MONITOR progress
      - HANDLE exceptions
      - AGGREGATE results

    SPECIALIST agents:
      - EXECUTE assigned tasks
      - REPORT progress
      - ESCALATE issues
      - DELIVER outputs
  </delegation_rules>
</hierarchical_pattern>

</coordination_patterns>

<communication_protocols>

## Inter-Agent Communication

### Message Format
<message_structure>
  {
    "from_agent": "agent_name",
    "to_agent": "agent_name",
    "message_type": "request|response|status|error",
    "priority": "low|medium|high|critical",
    "payload": {
      "task": "description",
      "context": {},
      "requirements": [],
      "constraints": []
    },
    "timestamp": "ISO-8601",
    "correlation_id": "unique_id"
  }
</message_structure>

### Communication Rules
1. **Clear Task Definition** - Every request must have clear success criteria
2. **Context Preservation** - Pass all relevant context between agents
3. **Error Escalation** - Failed tasks escalate to coordinator
4. **Progress Updates** - Long tasks send periodic status updates
5. **Result Validation** - Outputs validated before handoff

</communication_protocols>

<intelligent_routing>

## Intelligent Task Routing

### Routing Decision Tree
<routing_logic>
  RECEIVE task_request

  ANALYZE task_type:
    IF requires_context:
      ROUTE to context-fetcher

    IF requires_planning:
      IF complex_architecture:
        ROUTE to architecture-designer
      ELIF task_breakdown:
        ROUTE to task-planner
      ELIF risk_analysis:
        ROUTE to risk-assessor

    IF requires_implementation:
      IF file_operations:
        ROUTE to file-creator
      ELIF testing:
        ROUTE to test-runner
      ELIF version_control:
        ROUTE to git-workflow

    IF requires_analysis:
      IF security:
        ROUTE to security-scanner
      ELIF performance:
        ROUTE to performance-optimizer
      ELIF requirements:
        ROUTE to requirement-analyzer
</routing_logic>

### Dynamic Agent Selection
<dynamic_selection>
  FACTORS to consider:
    - Agent availability
    - Agent expertise level
    - Task complexity
    - Time constraints
    - Resource limitations

  SELECTION algorithm:
    1. IDENTIFY capable agents
    2. SCORE based on factors
    3. SELECT highest score
    4. FALLBACK if unavailable
</dynamic_selection>

</intelligent_routing>

<conflict_resolution>

## Conflict Resolution

### Conflict Types
1. **Resource Conflicts** - Multiple agents need same resource
2. **Decision Conflicts** - Agents disagree on approach
3. **Priority Conflicts** - Competing urgent tasks
4. **Output Conflicts** - Inconsistent results

### Resolution Strategies
<resolution_protocol>
  FOR resource_conflicts:
    - Implement queuing system
    - Priority-based allocation
    - Time-sliced sharing

  FOR decision_conflicts:
    - Escalate to lead agent
    - Use voting mechanism
    - Apply predefined rules

  FOR priority_conflicts:
    - Use priority matrix
    - Consider dependencies
    - Optimize for critical path

  FOR output_conflicts:
    - Validate against requirements
    - Merge compatible outputs
    - Choose based on quality metrics
</resolution_protocol>

</conflict_resolution>

<monitoring_and_optimization>

## Coordination Monitoring

### Performance Metrics
- Agent utilization rate
- Task completion time
- Handoff efficiency
- Error/retry rates
- Parallel execution gains

### Optimization Strategies
1. **Load Balancing** - Distribute work evenly
2. **Caching** - Reuse previous analyses
3. **Predictive Routing** - Anticipate next steps
4. **Batch Processing** - Group similar tasks
5. **Adaptive Patterns** - Learn from past coordinations

### Coordination Dashboard
<dashboard_elements>
  - Active agents and their tasks
  - Task queue and priorities
  - Dependency graph visualization
  - Performance metrics
  - Error/warning alerts
</dashboard_elements>

</monitoring_and_optimization>

<failure_handling>

## Failure Recovery

### Failure Detection
- Timeout monitoring
- Health checks
- Output validation
- Error reporting

### Recovery Strategies
<recovery_protocol>
  IF agent_fails:
    1. CAPTURE failure context
    2. ATTEMPT retry with same agent
    3. IF retry_fails:
       - ROUTE to backup agent
       - OR decompose task
       - OR escalate to human
    4. LOG failure for analysis
    5. UPDATE coordination strategy
</recovery_protocol>

### Circuit Breaker Pattern
<circuit_breaker>
  IF agent_failure_rate > threshold:
    OPEN circuit (stop routing to agent)
    WAIT recovery_period
    TEST with single request
    IF success:
      CLOSE circuit (resume routing)
    ELSE:
      REMAIN open
</circuit_breaker>

</failure_handling>

<best_practices>

## Agent Coordination Best Practices

1. **Clear Ownership** - Each task has one responsible agent
2. **Minimal Handoffs** - Reduce context switches
3. **Early Validation** - Catch issues before propagation
4. **Progressive Enhancement** - Build incrementally
5. **Feedback Loops** - Learn and improve continuously
6. **Documentation** - Track decisions and rationale
7. **Graceful Degradation** - Handle partial failures
8. **Observability** - Monitor all interactions

</best_practices>