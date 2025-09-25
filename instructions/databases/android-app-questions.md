# Android Mobile App Questions Database

## Context
Domain-specific questions for Android mobile application development using Kotlin/Java and Google Play ecosystem.

## Project Type Detection Patterns
- Keywords: "android", "kotlin", "java", "play store", "google play", "mobile"
- File patterns: "*.kt", "*.java", "*.xml", "build.gradle", "AndroidManifest.xml"
- Platform indicators: "Android SDK", "Jetpack Compose", "Room", "Retrofit"

## Question Categories

### Google Play Store & Distribution
1. What is your target Google Play Store release timeline?
2. Will this be a paid app, freemium, in-app purchases, or subscription model?
3. Do you need internal testing, closed testing, or open testing tracks?
4. Are you planning staged rollouts by percentage or region?
5. Do you need Google Play Console integration for analytics?
6. Will you support Google Play Pass subscription service?
7. Do you need Play Asset Delivery for large app resources?
8. Are there any Google Play policy concerns (content, permissions)?

### Device & Platform Support
9. What is your minimum Android API level (21+, 23+, 26+, 30+)?
10. Will you support phones only, tablets only, or both?
11. Do you need Android TV or Android Auto support?
12. Will you support foldable devices and different screen sizes?
13. Do you need Wear OS companion app support?
14. Are you planning Android 12+ material you theming?
15. Do you need Chrome OS compatibility considerations?
16. Will you support external displays or desktop mode?

### Development Framework
17. Are you using Kotlin, Java, or both?
18. Will you use Jetpack Compose, XML layouts, or hybrid approach?
19. Do you need backwards compatibility with older Android versions?
20. Are you planning custom UI components or material design?
21. Will you use Android Architecture Components (ViewModel, LiveData)?
22. Do you need Room database, SQLite, or external database?
23. Are you using Gradle with Kotlin DSL or Groovy?

### Google Services Integration
24. Do you need Google Sign-In authentication?
25. Will you integrate with Google Drive for cloud storage?
26. Do you need Firebase Cloud Messaging for push notifications?
27. Are you planning Google Pay integration?
28. Do you need Google Maps or location services?
29. Will you use Google ML Kit for machine learning features?
30. Do you need Google AdMob for advertising?
31. Are you planning Google Play Games services integration?
32. Do you need Google Assistant or Actions on Google integration?
33. Will you integrate with Google Fit for health data?

### Performance & Technical Requirements
34. What are your app startup time requirements (cold start < 3s)?
35. Do you need offline functionality and data synchronization?
36. Are there memory usage constraints for low-end devices?
37. Do you need background services or WorkManager jobs?
38. Will you handle large file downloads or media streaming?
39. Do you need custom views or graphics rendering?
40. Are there specific threading requirements (Main, IO, Background)?

### Security & Privacy
41. Do you need Android Keystore for secure key management?
42. Will you implement biometric authentication (fingerprint, face unlock)?
43. Do you need certificate pinning for network security?
44. Are there data encryption requirements for local storage?
45. Do you need network security config customization?
46. Will you implement SafetyNet attestation or root detection?
47. Do you need privacy-compliant analytics implementation?

### Testing & Quality Assurance
48. Do you need unit testing with JUnit or Mockito?
49. Will you implement UI testing with Espresso?
50. Do you need crash reporting with Firebase Crashlytics?
51. Are you planning A/B testing with Firebase Remote Config?
52. Do you need performance monitoring and profiling?
53. Will you implement custom logging and debugging tools?

### Accessibility & Localization
54. Do you need TalkBack accessibility support?
55. Will you support dynamic font scaling?
56. Do you need internationalization for multiple languages?
57. Are there right-to-left language support requirements?
58. Do you need high contrast mode compatibility?
59. Will you support switch access for accessibility?

### Hardware & Sensors
60. Do you need camera functionality (front/back camera)?
61. Will you use device sensors (accelerometer, gyroscope, proximity)?
62. Do you need GPS and location tracking features?
63. Are you planning NFC or Bluetooth integration?
64. Do you need microphone or audio recording capabilities?
65. Will you implement barcode/QR code scanning?

### Advanced Features
66. Do you need app widgets for home screen?
67. Will you implement shortcuts and dynamic shortcuts?
68. Do you need notification channels and custom notifications?
69. Are you planning picture-in-picture mode support?
70. Do you need adaptive brightness or dark theme support?
71. Will you implement file provider for sharing content?

## Follow-up Question Logic

### If Enterprise App
- Do you need Android Enterprise (formerly Android for Work)?
- Are there MDM (Mobile Device Management) requirements?
- Do you need corporate network/VPN integration?

### If Gaming App
- Do you need Google Play Games integration for leaderboards?
- Will you use OpenGL ES or Vulkan for graphics?
- Do you need haptic feedback and vibration patterns?

### If E-commerce App
- Do you need Google Pay integration for payments?
- Will you implement shopping actions for Google Assistant?
- Do you need inventory management integration?

### If Social/Communication App
- Do you need contact integration and permissions?
- Will you implement messaging with RCS support?
- Do you need video calling with WebRTC?

## Risk Assessment Questions
1. Are you using any deprecated APIs that need migration?
2. Do you have third-party libraries with Android compatibility issues?
3. Are there Google Play policy risks in your feature set?
4. Do you need to handle Android version fragmentation?
5. Are there performance issues on low-end or older devices?
6. Do you have proper permission handling for Android 11+ scoped storage?

## Technical Depth Questions
- **Beginner**: Focus on Android Studio setup, basic layouts, Play Store process
- **Intermediate**: Jetpack Compose vs XML, Room database, networking with Retrofit
- **Advanced**: Custom components, performance optimization, advanced Google services

## Estimation Factors
- **Simple**: Basic CRUD app with material design (4-8 weeks)
- **Moderate**: Custom UI, API integration, local database (8-16 weeks)
- **Complex**: Advanced Google services, custom hardware features, enterprise (16+ weeks)

## Platform-Specific Considerations
- **Tablets**: Do you need tablet-optimized layouts and navigation?
- **Foldables**: Will you support different screen configurations?
- **Android TV**: Do you need leanback launcher and D-pad navigation?
- **Wear OS**: Are you planning complications and tile support?
- **Android Auto**: Do you need voice commands and car-optimized UI?