# HTML Style Guide

## Context

Simple and elegant HTML structure guidelines for Agent OS projects.

## Core Principles

### Semantic HTML
- Use semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Choose the most appropriate element for content
- Maintain proper document outline
- Ensure accessibility with proper ARIA labels

### Clean Structure
- Use 2 spaces for indentation
- Place nested elements on new lines
- Maintain consistent indentation levels
- Keep content readable and organized

## Formatting Rules

### Element Structure
- Place each HTML attribute on its own line
- Align attributes vertically for consistency
- Keep the closing `>` on the same line as the last attribute
- Use proper spacing around content

### Content Organization
- Place content between tags on its own line when multi-line
- Use consistent spacing for readability
- Group related elements together
- Maintain logical flow

## Best Practices

### Accessibility
- Use proper heading hierarchy (h1 → h2 → h3)
- Include alt text for images
- Use descriptive link text
- Implement proper form labels
- Ensure keyboard navigation works

### Performance
- Minimize HTML structure
- Use appropriate element types
- Avoid unnecessary nesting
- Optimize for mobile devices

### SEO
- Use proper meta tags
- Implement structured data when appropriate
- Use descriptive titles and descriptions
- Ensure proper URL structure

## Example Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <meta name="description" content="Page description">
  </head>
  <body>
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-6
                  flex flex-col space-y-4
                  md:flex-row md:space-y-0 md:space-x-8">
        <h1 class="text-2xl font-bold text-gray-900">
          <a href="/" class="hover:text-blue-600">
            Logo
          </a>
        </h1>
        <ul class="flex flex-col space-y-2
                   md:flex-row md:space-y-0 md:space-x-6">
          <li>
            <a href="/"
               class="text-gray-600 hover:text-blue-600
                      transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about"
               class="text-gray-600 hover:text-blue-600
                      transition-colors duration-200">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
    
    <main class="container mx-auto px-4 py-8">
      <section class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          Main Content
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          Content goes here...
        </p>
      </section>
    </main>
    
    <footer class="bg-gray-100 mt-16">
      <div class="container mx-auto px-4 py-8">
        <p class="text-center text-gray-600">
          © 2024 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  </body>
</html>
```
