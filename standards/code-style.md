# Code Style Guide

## Context

Global code style rules for Agent OS projects.

<conditional-block context-check="general-formatting">
IF this General Formatting section already read in current context:
  SKIP: Re-reading this section
  NOTE: "Using General Formatting rules already in context"
ELSE:
  READ: The following formatting rules

## General Formatting

### Indentation
- Use 2 spaces for indentation (never tabs)
- Maintain consistent indentation throughout files
- Align nested structures for readability

### Naming Conventions
Naming conventions depend on the project type and platform. Follow the standard conventions for each technology:

- **iOS Development (Swift)**: Use camelCase for variables and methods (e.g., `userProfile`, `calculateTotal`)
- **Android Development (Kotlin)**: Use camelCase for variables and methods (e.g., `userProfile`, `calculateTotal`)
- **Web Development (TypeScript/JavaScript)**: Use camelCase for variables and methods (e.g., `userProfile`, `calculateTotal`)
- **Classes and Modules**: Use PascalCase across all platforms (e.g., `UserProfile`, `PaymentProcessor`)
- **Constants**: Use UPPER_SNAKE_CASE across all platforms (e.g., `MAX_RETRY_COUNT`)
- **Database/API**: Use snake_case for database fields and API endpoints (e.g., `user_profile`, `calculate_total`)

**Note**: Always follow the established conventions for the specific technology stack being used in each project.

### String Formatting
- Use single quotes for strings: `'Hello World'`
- Use double quotes only when interpolation is needed
- Use template literals for multi-line strings or complex interpolation

### Code Comments
- Add brief comments above non-obvious business logic
- Document complex algorithms or calculations
- Explain the "why" behind implementation choices
- Never remove existing comments unless removing the associated code
- Update comments when modifying code to maintain accuracy
- Keep comments concise and relevant
</conditional-block>

<conditional-block task-condition="html-css-tailwind" context-check="html-css-style">
IF current task involves writing or updating HTML, CSS, or TailwindCSS:
  IF html-style.md AND css-style.md already in context:
    SKIP: Re-reading these files
    NOTE: "Using HTML/CSS style guides already in context"
  ELSE:
    <context_fetcher_strategy>
      IF current agent is Claude Code AND context-fetcher agent exists:
        USE: @agent:context-fetcher
        REQUEST: "Get HTML formatting rules from code-style/html-style.md"
        REQUEST: "Get CSS and TailwindCSS rules from code-style/css-style.md"
        PROCESS: Returned style rules
      ELSE:
        READ the following style guides (only if not already in context):
        - @.agent-os/standards/code-style/html-style.md (if not in context)
        - @.agent-os/standards/code-style/css-style.md (if not in context)
    </context_fetcher_strategy>
ELSE:
  SKIP: HTML/CSS style guides not relevant to current task
</conditional-block>

<conditional-block task-condition="javascript" context-check="javascript-style">
IF current task involves writing or updating JavaScript:
  IF javascript-style.md already in context:
    SKIP: Re-reading this file
    NOTE: "Using JavaScript style guide already in context"
  ELSE:
    <context_fetcher_strategy>
      IF current agent is Claude Code AND context-fetcher agent exists:
        USE: @agent:context-fetcher
        REQUEST: "Get JavaScript style rules from code-style/javascript-style.md"
        PROCESS: Returned style rules
      ELSE:
        READ: @.agent-os/standards/code-style/javascript-style.md
    </context_fetcher_strategy>
ELSE:
  SKIP: JavaScript style guide not relevant to current task
</conditional-block>

<conditional-block task-condition="ios-development" context-check="ios-style">
IF current task involves writing or updating iOS/Swift code:
  READ: The following iOS development style guidelines

## iOS Development (Swift)

### Swift Code Style
- **Indentation**: Use 4 spaces for indentation (Xcode default)
- **Line Length**: Maximum 120 characters per line
- **Spacing**: Use single space around operators and after commas
- **Braces**: Opening brace on same line, closing brace on new line

### Swift Naming Conventions
- **Variables and Functions**: camelCase (e.g., `userProfile`, `calculateTotal`)
- **Classes, Structs, Enums**: PascalCase (e.g., `UserProfile`, `PaymentProcessor`)
- **Constants**: camelCase for local, PascalCase for global (e.g., `maxRetryCount`, `AppConstants`)
- **Private Properties**: Prefix with underscore (e.g., `_privateProperty`)
- **Protocols**: PascalCase ending with "able" or "ing" (e.g., `Drawable`, `Loading`)

### Swift Best Practices
- Use `let` instead of `var` when possible
- Prefer computed properties over methods when appropriate
- Use guard statements for early returns
- Implement proper error handling with Result types
- Use extensions to organize code logically
- Follow SOLID principles and clean architecture

### SwiftUI Specific
- Use descriptive view names ending with "View"
- Organize view modifiers in logical order
- Use `@State`, `@Binding`, `@ObservedObject` appropriately
- Prefer composition over inheritance
- Use preview providers for development

### File Organization
- One class/struct per file
- Use extensions to separate protocol implementations
- Group related functionality in folders
- Use meaningful file names that match the main type
</conditional-block>

<conditional-block task-condition="android-development" context-check="android-style">
IF current task involves writing or updating Android/Kotlin code:
  READ: The following Android development style guidelines

## Android Development (Kotlin)

### Kotlin Code Style
- **Indentation**: Use 4 spaces for indentation
- **Line Length**: Maximum 120 characters per line
- **Spacing**: Use single space around operators and after commas
- **Braces**: Opening brace on same line, closing brace on new line

### Kotlin Naming Conventions
- **Variables and Functions**: camelCase (e.g., `userProfile`, `calculateTotal`)
- **Classes, Objects, Interfaces**: PascalCase (e.g., `UserProfile`, `PaymentProcessor`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`)
- **Private Properties**: camelCase with underscore prefix (e.g., `_privateProperty`)
- **Companion Objects**: Use descriptive names (e.g., `UserProfile.Companion`)

### Android Specific Conventions
- **Resources**: Use snake_case (e.g., `user_profile_layout`, `button_primary`)
- **Layout IDs**: Use snake_case with descriptive prefixes (e.g., `btn_submit`, `tv_username`)
- **Package Names**: Use reverse domain notation (e.g., `com.company.app.feature`)
- **Activity Names**: End with "Activity" (e.g., `MainActivity`, `LoginActivity`)
- **Fragment Names**: End with "Fragment" (e.g., `UserProfileFragment`)

### Kotlin Best Practices
- Use `val` instead of `var` when possible
- Prefer data classes for simple data containers
- Use extension functions for utility methods
- Implement proper null safety with nullable types
- Use coroutines for asynchronous operations
- Follow MVVM or MVI architecture patterns

### Android Architecture
- Separate UI, business logic, and data layers
- Use ViewModels for UI state management
- Implement Repository pattern for data access
- Use Dependency Injection (Hilt/Dagger)
- Follow Material Design guidelines
- Implement proper lifecycle management

### File Organization
- Group by feature, not by type
- Use packages to separate concerns
- Keep activities and fragments in separate packages
- Organize resources by type in res/ folder
- Use meaningful package names that reflect functionality
</conditional-block>

<conditional-block task-condition="react-native" context-check="react-native-style">
IF current task involves writing or updating React Native code:
  READ: The following React Native development style guidelines

## React Native Development

### React Native Code Style
- **Indentation**: Use 2 spaces for indentation
- **Line Length**: Maximum 100 characters per line
- **Spacing**: Use single space around operators and after commas
- **Braces**: Opening brace on same line, closing brace on new line

### React Native Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile`, `PaymentForm`)
- **Files**: PascalCase for components, camelCase for utilities (e.g., `UserProfile.tsx`, `apiUtils.ts`)
- **Variables and Functions**: camelCase (e.g., `userProfile`, `calculateTotal`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Hooks**: Start with "use" (e.g., `useUserProfile`, `useApiCall`)

### React Native Best Practices
- Use functional components with hooks
- Implement proper TypeScript types
- Use proper state management (Context, Redux, Zustand)
- Handle platform differences with Platform.OS
- Implement proper error boundaries
- Use proper navigation patterns (React Navigation)
- Optimize performance with useMemo and useCallback

### Mobile-Specific Considerations
- Design for different screen sizes and orientations
- Handle keyboard interactions properly
- Implement proper touch feedback
- Use appropriate loading states
- Handle network connectivity issues
- Implement proper deep linking
- Follow platform-specific design guidelines

### File Organization
- Group by feature/screen
- Separate components, hooks, and utilities
- Use index files for clean imports
- Organize assets in appropriate folders
- Keep platform-specific code in separate files when needed
</conditional-block>
