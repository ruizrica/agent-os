# CSS Style Guide

## Context

Simple and elegant CSS styling guidelines for Agent OS projects using TailwindCSS.

## Core Principles

### TailwindCSS First
- Always use TailwindCSS for styling
- Use the latest version of TailwindCSS
- Prefer utility classes over custom CSS
- Only write custom CSS when absolutely necessary

### Responsive Design
- Mobile-first approach
- Use consistent breakpoints: `xs` (400px), `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)
- Design for all screen sizes
- Test on multiple devices

### Multi-line Class Formatting
- Write classes on separate lines for readability
- Group related classes together
- Align classes vertically for consistency
- Place responsive classes in ascending order
- Put hover/focus states on dedicated lines

## Class Organization

### Order of Classes
1. Custom classes (if any)
2. Base styles (no prefix)
3. Hover states
4. Focus states
5. Responsive breakpoints (xs → sm → md → lg → xl → 2xl)

### Example Structure
```html
<div class="custom-cta bg-gray-50 dark:bg-gray-900 p-4 rounded cursor-pointer w-full
            hover:bg-gray-100 dark:hover:bg-gray-800
            focus:ring-2 focus:ring-blue-500
            xs:p-6
            sm:p-8 sm:font-medium
            md:p-10 md:text-lg
            lg:p-12 lg:text-xl lg:font-semibold
            xl:p-14 xl:text-2xl
            2xl:p-16 2xl:text-3xl 2xl:font-bold">
  Content here
</div>
```

## Best Practices

### Color Usage
- Use semantic color names (primary, secondary, success, warning, error)
- Implement proper dark mode support
- Use consistent color scales
- Test color contrast ratios

### Spacing
- Use consistent spacing scale
- Prefer padding over margins when possible
- Use space utilities for consistent gaps
- Consider responsive spacing needs

### Typography
- Use consistent font sizes and weights
- Implement proper line heights
- Consider readability across devices
- Use appropriate text colors for contrast

### Components
- Create reusable component classes
- Use consistent naming conventions
- Document component variations
- Test components across breakpoints
