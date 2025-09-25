# iOS Mobile App Questions Database

## Context
Domain-specific questions for iOS mobile application development using Swift and Apple platforms.

## Project Type Detection Patterns
- Keywords: "ios", "iphone", "ipad", "swift", "xcode", "app store", "apple"
- File patterns: "*.swift", "*.storyboard", "*.xcodeproj", "*.xcworkspace"
- Platform indicators: "UIKit", "SwiftUI", "Core Data", "CloudKit"

## Question Categories

### App Store & Distribution
1. What is your target App Store release timeline?
2. Will this be a paid app, freemium, or subscription model?
3. Do you need TestFlight beta testing distribution?
4. Are you planning staged rollouts by region?
5. Do you need App Store Connect integration for analytics?
6. Will you support family sharing for purchases?
7. Do you need app review expedite considerations?
8. Are there any App Store guidelines concerns (content, functionality)?

### Device & Platform Support
9. What is your minimum iOS version target (iOS 15+, 16+, 17+)?
10. Will you support iPhone only, iPad only, or universal?
11. Do you need Apple Watch companion app support?
12. Will you support landscape and portrait orientations?
13. Do you need Dynamic Island integration (iPhone 14 Pro+)?
14. Are you planning iPad-specific features (Stage Manager, external displays)?
15. Do you need CarPlay integration?
16. Will you support Apple TV app extension?

### Development Framework
17. Are you using UIKit, SwiftUI, or hybrid approach?
18. Do you need backwards compatibility with older UI frameworks?
19. Will you use Storyboards, programmatic UI, or SwiftUI previews?
20. Do you need custom UI components or system components?
21. Are you planning to use Combine for reactive programming?
22. Do you need Core Data, SwiftData, or external database?
23. Will you use CocoaPods, SPM, or Carthage for dependencies?

### Apple Services Integration
24. Do you need Sign in with Apple authentication?
25. Will you integrate with iCloud for data sync?
26. Do you need CloudKit database functionality?
27. Are you planning Apple Pay integration?
28. Do you need Push Notifications (local, remote, or both)?
29. Will you use Core Location for GPS/mapping features?
30. Do you need Core ML or CreateML for machine learning?
31. Are you planning ARKit augmented reality features?
32. Do you need HealthKit integration for health data?
33. Will you integrate with Apple Music or other media frameworks?

### Performance & Technical Requirements
34. What are your app launch time requirements (< 2s, < 5s)?
35. Do you need offline functionality and data caching?
36. Are there memory usage constraints for your target devices?
37. Do you need background processing capabilities?
38. Will you handle large file downloads or media streaming?
39. Do you need Core Graphics or Metal for custom rendering?
40. Are there specific threading requirements (Main, Background, Concurrent)?

### Security & Privacy
41. Do you need Keychain services for secure data storage?
42. Will you implement biometric authentication (Face ID, Touch ID)?
43. Do you need certificate pinning for network security?
44. Are there data encryption requirements at rest?
45. Do you need App Transport Security (ATS) customization?
46. Will you implement app attestation or jailbreak detection?
47. Do you need privacy-focused analytics implementation?

### Testing & Quality Assurance
48. Do you need unit testing with XCTest framework?
49. Will you implement UI testing automation?
50. Do you need crash reporting and analytics integration?
51. Are you planning A/B testing for features?
52. Do you need performance profiling and optimization?
53. Will you implement custom logging and debugging tools?

### Accessibility & Localization
54. Do you need VoiceOver accessibility support?
55. Will you support Dynamic Type for font scaling?
56. Do you need internationalization for multiple languages?
57. Are there right-to-left language support requirements?
58. Do you need assistive touch compatibility?
59. Will you support Switch Control for accessibility?

### Advanced Features
60. Do you need Shortcuts app integration for Siri?
61. Will you implement widgets for home screen/lock screen?
62. Do you need live activities for dynamic island?
63. Are you planning focus modes integration?
64. Do you need handoff continuity with other Apple devices?
65. Will you implement document-based app architecture?

## Follow-up Question Logic

### If Enterprise App
- Do you need MDM (Mobile Device Management) integration?
- Are there corporate network/VPN requirements?
- Do you need custom provisioning profiles?

### If Gaming App
- Do you need Game Center integration?
- Will you use Metal for graphics rendering?
- Do you need haptic feedback patterns?

### If Social/Communication App
- Do you need CallKit for VoIP integration?
- Will you implement Messages app extensions?
- Do you need social framework integrations?

### If Camera/Media App
- Do you need AVFoundation for custom camera controls?
- Will you implement photo/video editing capabilities?
- Do you need Photos framework integration?

## Risk Assessment Questions
1. Are you using any deprecated APIs that need migration?
2. Do you have third-party dependencies with iOS compatibility issues?
3. Are there any App Store review risks in your feature set?
4. Do you need to handle iOS version fragmentation in your user base?
5. Are there performance bottlenecks on older device models?

## Technical Depth Questions
- **Beginner**: Focus on Xcode setup, basic UI, App Store process
- **Intermediate**: SwiftUI vs UIKit decisions, data persistence, networking
- **Advanced**: Custom frameworks, performance optimization, advanced Apple services

## Estimation Factors
- **Simple**: Basic CRUD app with standard UI (4-8 weeks)
- **Moderate**: Custom UI, API integration, local storage (8-16 weeks)
- **Complex**: Advanced Apple services, custom frameworks, enterprise features (16+ weeks)