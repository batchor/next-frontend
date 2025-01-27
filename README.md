# NextJS Frontend

This project involves the refactoring of [ScienHub](https://scienhub.com)'s frontend utilizing NextJS and Shadcn.

The migration from Vue and NaiveUI to NextJS and Shadcn is driven by the requirements for enhanced SEO and improved internationalization capabilities.

## Development Guidelines

### Introduce Dependencies Only When Necessary

Prioritize in-house implementations and introduce external dependencies only when absolutely essential.

### Maintain Updated Dependencies

Ensure that all dependencies are kept up-to-date to guarantee optimal functionality and minimize security vulnerabilities. If the latest version of a dependency is incompatible, refactor the codebase accordingly. Regularly update dependencies and adjust the code as necessary.

### Select Libraries with Mature Ecosystems

Opt for libraries that possess a **large, international user base** and a **mature ecosystem** to ensure robust resources for troubleshooting and support.

## Page Rendering 

### Client-Side rendering (CSR) Pages

1. The editor page`/username/projectname/editor`is CSR.

2. `/username` and `/username/projectname` pages are currently CSR but will eventually transition to SSR to enhance SEO.

### Statically Generated Pages

All other pages, including but not limited to the landing page, terms of use, and pricing, should be statically generated.
