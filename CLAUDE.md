# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Agent OS is a comprehensive framework for AI-assisted software development workflows. It provides structured instructions, standardized practices, and agent-based automation for building products with consistent quality and efficiency.

## Core Architecture

### Directory Structure
- `instructions/` - Core workflow instructions for product planning, task creation, and execution
  - `core/` - Primary workflows (analyze-product.md, plan-product.md, create-spec.md, etc.)
  - `meta/` - Pre-flight and post-flight checks
- `standards/` - Development guidelines and tech stack definitions
  - `best-practices.md` - Global development guidelines with conditional sections
  - `tech-stack.md` - Default technology choices
  - `code-style/` - Language-specific styling rules
- `claude-code/` - Claude Code specific agent configurations
  - `agents/` - Specialized agent definitions (context-fetcher, file-creator, etc.)
- `commands/` - Command reference documentation
- `setup/` - Installation and configuration files

### Agent-Based Workflow System

Agent OS uses a specialized agent system where different agents handle specific responsibilities:

- **context-fetcher**: Retrieves information from documentation while avoiding duplication
- **file-creator**: Creates files and directory structures with validation
- **project-manager**: Handles high-level project coordination
- **test-runner**: Manages testing workflows
- **git-workflow**: Handles version control operations

## Key Workflows

### Product Planning (`plan-product.md`)
Creates comprehensive product documentation including mission, tech stack, and roadmap files in `.agent-os/product/` directory. Uses a 6-step process with specialized agents.

### Product Analysis (`analyze-product.md`)
Analyzes existing codebases and installs Agent OS documentation, marking completed features in Phase 0 of roadmap.

### Specification Creation (`create-spec.md`)
Generates detailed technical specifications for features before implementation.

### Task Management (`create-tasks.md`, `execute-tasks.md`)
Breaks down specifications into actionable tasks and manages execution workflows.

## Configuration System

### Global Configuration (`config.yml`)
- Defines enabled agents (claude_code, cursor)
- Sets project type mappings to instruction/standards directories
- Configures default project type behavior

### Conditional Documentation
Best practices and standards use conditional blocks that load content based on:
- Current context (to avoid duplication)
- Task conditions (e.g., `typescript-development`, `firebase-development`)
- Technology requirements

## Common Operations

### Starting New Projects
```
@.agent-os/instructions/core/plan-product.md
```

### Analyzing Existing Projects
```
@.agent-os/instructions/core/analyze-product.md
```

### Creating Feature Specifications
```
@.agent-os/instructions/core/create-spec.md
```

### Task Creation and Execution
```
@.agent-os/instructions/core/create-tasks.md
@.agent-os/instructions/core/execute-tasks.md
```

## Tech Stack Defaults

- **Backend**: TypeScript, Node.js 22 LTS, Firebase Functions/Express.js
- **Frontend**: TypeScript, React/Next.js, Vite, TailwindCSS 4.0+, shadcn/ui
- **Database**: Firebase Firestore, PostgreSQL when needed
- **Mobile**: Swift/Kotlin native, React Native for cross-platform
- **Infrastructure**: Firebase primary, AWS/Cloudflare secondary
- **CI/CD**: GitHub Actions with main/staging branch triggers

## Development Principles

### Core Values
- Keep It Simple: Fewest lines possible, avoid over-engineering
- Optimize for Readability: Clear code over micro-optimizations
- DRY: Extract repeated logic to reusable components
- Single Responsibility: Focused files and functions

### Conditional Best Practices
The standards system loads relevant practices based on development context:
- TypeScript practices for TS development
- Firebase practices for Firebase projects
- Security practices for sensitive operations
- Mobile practices for mobile development
- Testing practices when writing tests

## File Template System

Agent OS uses structured templates for generating:
- Product mission documents with pitch, users, problems, differentiators
- Technical specifications with implementation details
- Roadmaps with phased feature development
- Task lists with effort estimates (XS: 1 day, S: 2-3 days, M: 1 week, L: 2 weeks, XL: 3+ weeks)

## Integration Points

### Claude Code Agents
The repository includes specialized agent definitions in `claude-code/agents/` that integrate with Claude Code's agent system for:
- Context retrieval without duplication
- File creation with validation
- Project management coordination
- Testing and git workflow automation

### Extensibility
- Project types can be customized in `config.yml`
- Standards can be extended with new conditional blocks
- Instructions can be modified for specific project needs
- Agent definitions can be customized for different workflows