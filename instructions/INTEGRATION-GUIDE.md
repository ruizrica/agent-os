# Enhanced Agent OS Workflow Integration Guide

## Overview

This guide explains how to use the enhanced Agent OS workflow system with intelligent planning, adaptive questioning, and multi-agent coordination.

## New Components

### 1. Enhanced Spec Creation (`new-spec.md`)
- **Location**: `/instructions/core/new-spec.md`
- **Purpose**: Intelligent spec creation with adaptive questioning
- **Features**:
  - Multi-stage questioning based on project type
  - AI-driven requirement discovery
  - Risk assessment and stakeholder analysis
  - Progressive refinement of requirements

### 2. Question Databases
- **Location**: `/instructions/databases/`
- **Available Databases**:
  - `web-app-questions.md` - Web application development
  - `api-service-questions.md` - API and service development
  - `data-pipeline-questions.md` - Data pipeline and ETL
  - `ml-system-questions.md` - Machine learning systems

### 3. Multi-Stage Planning Framework
- **Location**: `/instructions/core/multi-stage-planning.md`
- **Purpose**: Iterative planning with progressive refinement
- **Stages**:
  1. Discovery Planning (0-20%)
  2. Conceptual Planning (20-40%)
  3. Detailed Planning (40-70%)
  4. Implementation Planning (70-90%)
  5. Adaptive Execution (90-100%)

### 4. Agent Coordination System
- **Location**: `/instructions/core/agent-coordination.md`
- **Purpose**: Orchestrate multiple agents for complex tasks
- **Patterns**:
  - Sequential handoff
  - Parallel execution
  - Collaborative work
  - Hierarchical delegation

## Workflow Integration

### Starting a New Project

1. **Use Enhanced Spec Creation**
   ```
   Execute: @.agent-os/instructions/core/new-spec.md
   ```
   - System detects project type automatically
   - Asks intelligent, contextual questions
   - Generates comprehensive specifications

2. **Multi-Stage Planning**
   ```
   Execute: @.agent-os/instructions/core/multi-stage-planning.md
   ```
   - Progresses through planning stages
   - Validates at each gate
   - Refines details progressively

3. **Task Creation**
   ```
   Execute: @.agent-os/instructions/core/create-tasks.md
   ```
   - Generates tasks from specifications
   - Applies dependencies and priorities
   - Integrates with planning stages

4. **Agent Coordination**
   ```
   Execute: @.agent-os/instructions/core/agent-coordination.md
   ```
   - Assigns tasks to specialized agents
   - Coordinates parallel execution
   - Manages handoffs and dependencies

## Usage Examples

### Example 1: Web Application Feature

```bash
User: "I need to add a user dashboard to our application"

System:
1. Detects "Web Application" project type
2. Asks Level 1 questions from web-app-questions.md
3. Based on complexity, asks Level 2 questions
4. Generates comprehensive spec with UI/UX requirements
5. Creates implementation plan with phases
6. Coordinates agents for parallel development
```

### Example 2: API Service Development

```bash
User: "Build a REST API for customer data"

System:
1. Detects "API Service" project type
2. Asks API-specific questions (authentication, rate limiting, etc.)
3. Discovers implicit requirements (GDPR compliance, caching)
4. Creates API specification with endpoints
5. Plans implementation in stages
6. Assigns specialized agents for different components
```

### Example 3: Machine Learning Pipeline

```bash
User: "Implement a recommendation system"

System:
1. Detects "ML System" project type
2. Asks ML-specific questions (model type, training data, latency)
3. Identifies risks and requirements
4. Creates ML pipeline specification
5. Plans phased implementation (data prep, training, deployment)
6. Coordinates ML-specialized agents
```

## Configuration Options

### Customizing Question Depth

In `new-spec.md`, adjust the questioning strategy:

```xml
<settings>
  max_question_rounds: 3  <!-- Adjust depth -->
  min_questions_per_round: 3
  max_questions_per_round: 12
  auto_discover_requirements: true
  perform_risk_analysis: true
</settings>
```

### Agent Priority Configuration

In `agent-coordination.md`, set agent priorities:

```json
{
  "agent_priorities": {
    "critical_path": ["architecture-designer", "file-creator"],
    "parallel_safe": ["test-runner", "documentation"],
    "sequential_required": ["context-fetcher", "requirement-analyzer"]
  }
}
```

### Planning Stage Gates

In `multi-stage-planning.md`, customize gate criteria:

```yaml
decision_gates:
  discovery_gate:
    min_completion: 80%
    required_approvals: ["stakeholder", "technical_lead"]

  implementation_gate:
    risk_threshold: "medium"
    test_coverage_required: 80%
```

## Best Practices

### 1. Start with Discovery
- Always begin with `new-spec.md` for proper requirement gathering
- Let the system guide questioning based on project type
- Don't skip stages even if you think you know requirements

### 2. Use Appropriate Question Databases
- Reference domain-specific questions for comprehensive coverage
- Customize questions based on project specifics
- Add new questions as you discover patterns

### 3. Embrace Iterative Planning
- Don't try to plan everything upfront
- Use stage gates to validate before proceeding
- Adjust plans based on discoveries

### 4. Leverage Agent Specialization
- Use the right agent for each task
- Allow parallel execution where possible
- Monitor agent coordination for bottlenecks

### 5. Maintain Context
- Document decisions and rationale
- Keep specifications updated
- Use version control for all artifacts

## Troubleshooting

### Issue: Questions Too Generic
**Solution**: System will auto-detect project type, but you can explicitly specify:
```
User: "This is a REST API project for financial services"
```

### Issue: Too Many Questions
**Solution**: Adjust complexity level:
```
User: "This is a simple feature, skip advanced questions"
```

### Issue: Agents Working Sequentially
**Solution**: Check dependency configuration and enable parallel execution:
```
Enable parallel_execution in agent-coordination.md
```

### Issue: Planning Takes Too Long
**Solution**: Set planning timeboxes:
```
Set max_planning_time per stage in multi-stage-planning.md
```

## Migration from Old System

### For Existing Projects
1. Run `new-spec.md` on existing features to generate enhanced specs
2. Import existing tasks into new planning framework
3. Map existing agents to enhanced coordination system

### Backward Compatibility
- Old `create-spec.md` remains available
- Can use traditional workflow alongside enhanced system
- Gradual migration recommended

## Performance Optimization

### Using OpenCode CLI Models

The system is designed to use cost-effective models intelligently:

1. **Discovery Phase**: Use fast models like `mistralai/mistral-7b`
2. **Analysis Phase**: Use `mixtral-8x7b` for balanced performance
3. **Critical Decisions**: Use `anthropic/claude-3.5-sonnet` for accuracy
4. **Bulk Generation**: Use free models like `qwen/qwen-2.5-coder-32b`

### Model Selection Examples

```bash
# For requirement analysis (budget-conscious)
opencode run --model "mistralai/mixtral-8x7b" "Analyze requirements"

# For architecture design (quality-critical)
opencode run --model "anthropic/claude-3.5-sonnet" "Design architecture"

# For bulk documentation (free tier)
opencode run --model "qwen/qwen-2.5-coder-32b" "Generate docs"
```

## Monitoring and Metrics

### Key Performance Indicators
- Specification completeness score
- Question effectiveness rate
- Agent utilization percentage
- Planning accuracy (estimated vs actual)
- Requirement discovery rate

### Dashboard Integration
Connect to monitoring tools:
- Planning stage progression
- Agent coordination efficiency
- Question response analysis
- Risk mitigation tracking

## Future Enhancements

### Planned Features
1. Machine learning for question optimization
2. Automated agent performance tuning
3. Cross-project pattern recognition
4. Natural language planning interfaces
5. Real-time collaboration features

### Community Contributions
- Submit new question templates
- Share agent coordination patterns
- Contribute domain-specific databases
- Provide feedback on effectiveness

## Support and Resources

### Documentation
- Full API reference: `/docs/api/`
- Agent specifications: `/docs/agents/`
- Pattern library: `/docs/patterns/`

### Getting Help
- Check troubleshooting section above
- Review example workflows
- Consult question databases
- Contact support team

## Conclusion

The enhanced Agent OS workflow system provides intelligent, adaptive planning with sophisticated multi-agent coordination. By leveraging specialized question databases, multi-stage planning, and intelligent agent orchestration, you can handle complex projects more effectively while maintaining flexibility and control.

Start with `new-spec.md` for any new project and let the system guide you through comprehensive requirement gathering and planning.