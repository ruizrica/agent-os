# Tech Stack

## Context

Global tech stack defaults for Agent OS projects, overridable in project-specific `.agent-os/product/tech-stack.md`.

### Backend Development
- Primary Language: TypeScript
- Runtime: Node.js 22 LTS
- Framework: Firebase Functions / Express.js / Next.js API Routes
- Database: Firebase Firestore / PostgreSQL (when needed)
- Authentication: Firebase Auth
- Real-time Features: Firebase Realtime Database
- File Storage: Firebase Storage / AWS S3
- Hosting: Firebase Hosting / AWS / Cloudflare

### Frontend Development
- Primary Language: TypeScript
- Framework: React latest stable / Next.js
- Build Tool: Vite
- Package Manager: npm / pnpm
- CSS Framework: TailwindCSS 4.0+
- UI Components: shadcn/ui components
- Icons: Lucide React components
- Font Provider: Google Fonts
- Font Loading: Self-hosted for performance
- State Management: Zustand / Redux Toolkit

### Mobile Development
- iOS: Swift with Xcode
- Android: Kotlin with Android Studio
- Cross-platform: React Native (when appropriate)
- Backend Integration: Firebase / REST APIs

### Infrastructure & Deployment
- Primary Platform: Firebase
- Secondary Platforms: AWS, Cloudflare (as needed)
- CDN: Cloudflare / CloudFront
- CI/CD Platform: GitHub Actions
- CI/CD Trigger: Push to main/staging branches
- Tests: Run before deployment
- Production Environment: main branch
- Staging Environment: staging branch
