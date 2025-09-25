# Development Best Practices

## Context

Global development guidelines for Agent OS projects.

<conditional-block context-check="core-principles">
IF this Core Principles section already read in current context:
  SKIP: Re-reading this section
  NOTE: "Using Core Principles already in context"
ELSE:
  READ: The following principles

## Core Principles

### Keep It Simple
- Implement code in the fewest lines possible
- Avoid over-engineering solutions
- Choose straightforward approaches over clever ones

### Optimize for Readability
- Prioritize code clarity over micro-optimizations
- Write self-documenting code with clear variable names
- Add comments for "why" not "what"

### DRY (Don't Repeat Yourself)
- Extract repeated business logic to private methods
- Extract repeated UI markup to reusable components
- Create utility functions for common operations

### File Structure
- Keep files focused on a single responsibility
- Group related functionality together
- Use consistent naming conventions
</conditional-block>

<conditional-block context-check="dependencies" task-condition="choosing-external-library">
IF current task involves choosing an external library:
  IF Dependencies section already read in current context:
    SKIP: Re-reading this section
    NOTE: "Using Dependencies guidelines already in context"
  ELSE:
    READ: The following guidelines
ELSE:
  SKIP: Dependencies section not relevant to current task

## Dependencies

### Choose Libraries Wisely
When adding third-party dependencies:
- Select the most popular and actively maintained option
- Check the library's GitHub repository for:
  - Recent commits (within last 6 months)
  - Active issue resolution
  - Number of stars/downloads
  - Clear documentation

### Package Management
- Use exact versions for critical dependencies (`package-lock.json`, `yarn.lock`)
- Regularly update dependencies to latest stable versions
- Audit dependencies for security vulnerabilities
- Prefer smaller, focused libraries over large frameworks when possible
- Document why each dependency is needed
</conditional-block>

<conditional-block context-check="typescript-practices" task-condition="typescript-development">
IF current task involves TypeScript development:
  READ: The following TypeScript best practices

## TypeScript Best Practices

### Type Safety
- Enable strict mode in `tsconfig.json`
- Use explicit types for function parameters and return values
- Avoid `any` type - use `unknown` or specific types instead
- Use type guards for runtime type checking
- Leverage union types and discriminated unions

### Code Organization
- Use interfaces for object shapes and contracts
- Prefer type aliases for complex types
- Use enums for fixed sets of values
- Implement proper module exports/imports
- Use generics for reusable type-safe code

### Error Handling
- Use Result types for operations that can fail
- Implement proper error boundaries
- Use custom error classes with meaningful messages
- Handle async operations with proper error catching
- Log errors with context for debugging
</conditional-block>

<conditional-block context-check="firebase-practices" task-condition="firebase-development">
IF current task involves Firebase development:
  READ: The following Firebase best practices

## Firebase Best Practices

### Security Rules
- Write comprehensive Firestore security rules
- Test security rules with the Firebase emulator
- Use least privilege principle for data access
- Implement proper authentication checks
- Validate data structure in security rules

### Data Modeling
- Design collections for efficient queries
- Use subcollections for hierarchical data
- Implement proper indexing strategies
- Consider data denormalization for performance
- Plan for data migration and versioning

### Performance Optimization
- Use pagination for large datasets
- Implement proper caching strategies
- Optimize bundle size by importing only needed functions
- Use Firebase Performance Monitoring
- Implement offline support with Firestore persistence

### Authentication
- Implement proper user session management
- Use Firebase Auth with custom claims for roles
- Handle authentication state changes properly
- Implement proper sign-out and token refresh
- Secure sensitive operations with server-side validation
</conditional-block>

<conditional-block context-check="mobile-practices" task-condition="mobile-development">
IF current task involves mobile development:
  READ: The following mobile development best practices

## Mobile Development Best Practices

### Performance
- Optimize app startup time
- Implement proper memory management
- Use lazy loading for images and content
- Minimize network requests and data usage
- Implement proper caching strategies

### User Experience
- Design for different screen sizes and orientations
- Implement proper loading states and error handling
- Use platform-specific design patterns
- Handle keyboard interactions properly
- Implement proper touch feedback and gestures

### Platform Considerations
- Follow iOS Human Interface Guidelines
- Follow Android Material Design principles
- Handle platform-specific permissions
- Implement proper deep linking
- Test on multiple device sizes and OS versions

### State Management
- Use appropriate state management patterns (MVVM, MVI)
- Implement proper data flow
- Handle offline scenarios gracefully
- Use proper dependency injection
- Implement proper lifecycle management
</conditional-block>

<conditional-block context-check="security-practices" task-condition="security-sensitive">
IF current task involves security-sensitive development:
  READ: The following security best practices

## Security Best Practices

### Data Protection
- Never store sensitive data in client-side storage
- Use HTTPS for all API communications
- Implement proper input validation and sanitization
- Use environment variables for sensitive configuration
- Encrypt sensitive data at rest and in transit

### Authentication & Authorization
- Implement proper user authentication
- Use strong password policies
- Implement proper session management
- Use multi-factor authentication when appropriate
- Implement proper role-based access control

### API Security
- Validate all input data
- Implement rate limiting
- Use proper CORS policies
- Implement request/response logging
- Use API keys and tokens securely

### Mobile Security
- Implement proper certificate pinning
- Use secure storage for sensitive data
- Implement proper biometric authentication
- Handle app state transitions securely
- Implement proper data encryption
</conditional-block>

<conditional-block context-check="testing-practices" task-condition="testing-development">
IF current task involves testing:
  READ: The following testing best practices

## Testing Best Practices

### Test Strategy
- Write tests for critical business logic
- Implement unit tests for utility functions
- Write integration tests for API endpoints
- Use end-to-end tests for user workflows
- Maintain high test coverage for core functionality

### Test Organization
- Group tests by functionality
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Keep tests independent and isolated

### Mobile Testing
- Test on multiple devices and OS versions
- Implement automated UI testing
- Test offline scenarios
- Test different network conditions
- Use proper test data and fixtures

### Continuous Integration
- Run tests on every commit
- Implement proper test reporting
- Use parallel test execution
- Implement proper test environment setup
- Monitor test performance and reliability
</conditional-block>

<conditional-block context-check="deployment-practices" task-condition="deployment">
IF current task involves deployment:
  READ: The following deployment best practices

## Deployment Best Practices

### Environment Management
- Use separate environments for development, staging, and production
- Implement proper environment variable management
- Use feature flags for gradual rollouts
- Implement proper database migrations
- Use blue-green deployments when possible

### Monitoring & Logging
- Implement comprehensive logging
- Use proper log levels and structured logging
- Monitor application performance and errors
- Set up proper alerting for critical issues
- Implement proper error tracking and reporting

### Mobile Deployment
- Use proper app store review guidelines
- Implement proper versioning and release notes
- Use staged rollouts for major updates
- Implement proper crash reporting
- Monitor app performance and user feedback

### CI/CD Pipeline
- Automate build and deployment processes
- Implement proper code quality checks
- Use proper branching strategies
- Implement proper rollback procedures
- Monitor deployment success and performance
</conditional-block>
