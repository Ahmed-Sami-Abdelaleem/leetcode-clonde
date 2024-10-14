# Competitive Coding Platform introduction

Welcome to the documentation for our **Competitive Coding Platform**. This platform is designed to provide a rich, feature-packed environment for coders to solve algorithmic challenges, participate in coding contests, and enhance their problem-solving skills. It caters to both **coders** and **problem setters**, offering a seamless interface for creating, solving, and managing coding problems.

## Key Features:

- **Challenges**: A variety of coding challenges with different difficulty levels, detailed problem descriptions, and test cases.
- **User Management**: Separate profiles for coders and problem setters, with support for ratings, reviews, and performance tracking.
- **Contests**: A competitive environment where users can participate in time-bound coding contests and see their rankings in real-time.
- **Submissions**: Comprehensive submission tracking, including execution time, memory usage, and test case pass rates.
- **Wishlists & Bookmarks**: Coders can bookmark challenges or create wishlists to organize problems for later.
- **Messaging & Comments**: Interactive messaging between users and problem setters, as well as detailed problem discussions via comments.
- **Leaderboards**: Global rankings that showcase the top-performing coders based on their submissions and contest results.

This documentation will guide you through the platform’s features, user interactions, and system architecture. Whether you are a developer looking to understand the inner workings of the platform or a user seeking to get the most out of it, this guide will serve as your comprehensive resource.

# Platform Requirements for Competitive Coding System

## Challenges

- Each challenge has:
  - A **Unique ID**.
  - A **Title**.
  - A **Description** of the problem.
  - A **Difficulty level** (Easy, Medium, Hard).
  - **Number of test cases**.
  - **Total number of submissions**.
  - **Total number of successful submissions**.
  - **Tags** (e.g., "arrays," "greedy").
  - **Solution** (optional, locked or available after solving).
  - **Maximum score** that can be achieved.
  - **Time and memory limits** for the problem.
  - **Creation date** and **modification date** (if modified).
- Each challenge belongs to one or more categories (e.g., Dynamic Programming, Sorting, Graphs).

## Users

- There are two types of users: **coders** and **problem setters**.
- Each user has:
  - A **Unique user ID**.
  - **First name** and **last name**.
  - **Email address**.
  - **Username**.
  - **Password**.
  - **Profile picture** (optional).
  - **Bio/description** (optional).
  - **Date of birth**.
  - **Number of problems solved** (for coders).
  - **Number of problems created** (for problem setters).
  - **Rating** and **number of ratings** (for both problem setters and coders).

## Submissions

- Each submission has:
  - A **Submission ID**.
  - **Submission date** (when the submission was made).
  - **Challenge ID** (associated with the submission).
  - **Code** (the solution submitted by the coder).
  - **Language** (the programming language used).
  - **Status** (Accepted, Wrong Answer, Runtime Error, etc.).
  - **Score** obtained for the submission.
  - **Execution time** and **memory usage**.
  - **Date of modification** (if modified).
  - **Number of test cases passed** out of the total.
  - **Comments** (optional, feedback for the submission).

## Contests

- Each contest has:
  - A **Unique contest ID**.
  - A **Name**.
  - A **Description**.
  - **Start and end times**.
  - **List of challenges** involved in the contest.
  - **Prize pool** (if applicable).
  - **Number of participants**.
  - **Contest rankings**, including participant positions and scores.

## Wishlists/Bookmarks

- Each user can create **wishlists/bookmarks** for challenges they wish to solve later:
  - A **Unique wishlist/bookmark ID**.
  - **Name** (e.g., "Graph Problems," "DP Challenges").
  - **List of challenges**.
  - **Privacy settings** (public or private).

## Messages and Comments

- Users can send **messages** to each other regarding a challenge:

  - **Sender ID** (who sent the message).
  - **Receiver ID** (who received the message).
  - **Message body**.
  - **Creation date**.
  - **Reply thread** (if any).

- Users can also **comment** on challenges:
  - A **Comment ID**.
  - **Challenge ID** (associated with the comment).
  - **User ID** (who made the comment).
  - **Comment text**.
  - **Comment creation date**.
  - **Comment modification date** (if edited).

## Ratings and Reviews

- Coders and problem setters can receive **ratings and reviews**:
  - For **coders**: Based on problem-solving performance.
  - For **problem setters**: Based on the quality of the problems they create.
  - Each review has:
    - A **Rating score**.
    - **Comment** (optional).
    - **Review creation date**.
    - **Review modification date** (if modified).

## Payments

- Users may pay for **premium features**:
  - **Transaction ID**.
  - **User ID**.
  - **Amount paid**.
  - **Payment method** (e.g., credit card).
  - **Date of payment**.

## Leaderboard

- A global **leaderboard** ranks coders based on performance:
  - **User ID**.
  - **Username**.
  - **Total score**.
  - **Rank**.
  - **Number of problems solved**.
  - **Number of contests participated in**.

## Notifications

- Users receive **notifications** for important events:
  - New **problems** released.
  - **Contest registrations**.
  - **Leaderboard updates**.
  - **Review or message received**.

# Business Analysis for Competitive Coding Platform

## Overview

The **Competitive Coding Platform** is designed to serve two primary user groups: **coders** and **problem setters**. The platform focuses on providing an interactive and engaging environment where coders can solve algorithmic challenges, participate in contests, and enhance their problem-solving skills, while problem setters create and manage the coding challenges. The business objective is to facilitate competitive programming and learning, attracting users who are looking to improve their skills or contribute by creating new challenges.

## Target Audience

1. **Coders**:

   - Individuals looking to enhance their coding skills by solving algorithmic problems.
   - Participants in coding contests, often preparing for interviews or competitions.
   - Users who want to track their performance through leaderboards and ratings.

2. **Problem Setters**:
   - Experienced programmers who create, design, and manage challenges.
   - Users seeking recognition through ratings and reviews on the quality of their problem designs.
   - Technical mentors and educators contributing to the learning of others.

## Key Functional Components

### 1. **Challenges**:

- A core feature that provides coders with various problems categorized by difficulty.
- Supports detailed problem descriptions, test cases, and solution evaluation.
- Helps problem setters to create high-quality content and contribute to the community.

### 2. **User Management**:

- **Coders**: Need profiles that track their submissions, ratings, and performance across various challenges and contests.
- **Problem Setters**: Require profiles to manage the challenges they create, alongside their ratings based on problem quality.
- Rating systems promote healthy competition and provide recognition for both coders and problem setters.

### 3. **Contests**:

- Timed coding contests with challenges to foster a competitive environment.
- Tracks user rankings in real-time to motivate coders to perform better.
- Creates opportunities for coders to compete in a high-pressure environment, similar to coding interviews or competitive events.

### 4. **Submissions**:

- Tracks code submissions, execution time, memory usage, and test case results.
- Allows coders to see real-time feedback on their performance and debug accordingly.
- Comprehensive performance tracking helps identify strengths and areas for improvement.

### 5. **Wishlists & Bookmarks**:

- Enables coders to bookmark or create wishlists for challenges they plan to solve later.
- Improves user retention by encouraging users to return to bookmarked challenges.
- Helps coders organize their learning path, making the platform more user-friendly.

### 6. **Messaging & Comments**:

- Facilitates communication between coders and problem setters to clarify challenge requirements or provide feedback.
- Problem discussion via comments builds a collaborative community around learning and problem-solving.
- Helps in fostering user engagement and building a sense of community.

### 7. **Leaderboards**:

- Global leaderboards showcasing the top-performing coders based on challenge and contest results.
- Promotes healthy competition and drives continuous improvement.
- Provides recognition for high-performing users, improving user retention.

### 8. **Payments**:

- Supports transactions for premium features such as access to advanced challenges or exclusive contests.
- Monetizes the platform by offering premium services to users who want to unlock additional features.

## Business Value

1. **User Growth and Retention**:

   - By providing a rich experience with challenges, contests, and leaderboards, the platform is likely to attract both beginners and experienced coders.
   - Features like wishlists, messaging, and real-time feedback help retain users by offering a personalized experience.

2. **Monetization**:

   - Through premium features like exclusive contests, advanced problems, and extra content for coders, the platform can generate revenue.
   - Additionally, offering recognition and rewards for problem setters can encourage high-quality content creation, further enhancing the platform’s value.

3. **Community Building**:

   - The interactive nature of messaging, comments, and collaborative problem-solving helps build a strong community around coding.
   - Ratings, reviews, and recognition systems incentivize continuous user engagement.

4. **Educational Value**:
   - The platform doubles as a learning tool for coders looking to improve their skills, prepare for interviews, and compete in coding competitions.
   - Problem setters can also gain recognition by contributing to this educational ecosystem.

## Conclusion

The **Competitive Coding Platform** is a comprehensive tool for fostering coding skills, providing a well-rounded experience for both coders and problem setters. By emphasizing competitive contests, detailed challenges, leaderboards, and real-time feedback, the platform stands to grow its user base, retain engagement, and monetize through premium features. Its focus on community building and continuous skill development makes it an attractive platform for competitive programmers, educators, and coding enthusiasts alike.

### System Design & Architecture for Competitive Coding Platform

### Use Case Diagram for Competitive Coding Platform

### Class Diagram for Competitive Coding Platform

### Sequence Diagram for Competitive Coding Platform

### Activity Diagram for Competitive Coding Platform

### State Diagram for Competitive Coding Platform

### Communication Diagram for Competitive Coding Platform

### Deployment Diagram for Competitive Coding Platform

### Component Diagram for Competitive Coding Platform


### Database Design for Competitive Coding Platform
## users (collection)
 - └── {userId} (document)
   -  ├── firstName: string
   -  ├── lastName: string
   -  ├── email: string
   -  ├── username: string
   -  ├── passwordHash: string
   -  ├── profilePicture: string (URL in Firebase Storage)
   -  ├── bio: string (optional)
   -  ├── dateOfBirth: timestamp
   -  ├── role: string ("coder" or "problem_setter")
   -  ├── problemsSolved: number
   -  ├── problemsCreated: number
   -  ├── ratings: { averageRating: number, totalRatings: number }
   -  ├── createdAt: timestamp
   -  └── modifiedAt: timestamp
     ## challenges (collection)
- └── {challengeId} (document)
 -    ├── title: string
  -   ├── description: string
   -  ├── difficulty: string ("easy", "medium", "hard")
    - ├── testCases: array of {input: string, output: string}
    - ├── totalSubmissions: number
    - ├── successfulSubmissions: number
    - ├── tags: array of strings (e.g., ["arrays", "greedy"])
     -  ├── score: number
    - ├── timeLimit: number (in milliseconds)
   -  ├── memoryLimit: number (in bytes)
   -  ├── solutionAvailable: boolean
   -  ├── solution: string (optional, only available after solving)
   -  ├── categories: array of strings (e.g., ["Dynamic Programming", "Sorting"])
   -  ├── creatorId: string (userId of problem setter)
   -  ├── createdAt: timestamp
   -  └── modifiedAt: timestamp
## submissions (collection)
 └── {submissionId} (document)
     ├── userId: string (reference to users)
     ├── challengeId: string (reference to challenges)
     ├── code: string
     ├── language: string (e.g., "Python", "C++")
     ├── status: string ("Accepted", "Wrong Answer", "Runtime Error", etc.)
     ├── executionTime: number (in milliseconds)
     ├── memoryUsed: number (in bytes)
     ├── testCasesPassed: number
     ├── totalTestCases: number
     ├── score: number
     ├── createdAt: timestamp
     └── modifiedAt: timestamp
## contests (collection)
 └── {contestId} (document)
     ├── name: string
     ├── description: string
     ├── startTime: timestamp
     ├── endTime: timestamp
     ├── prizePool: number (optional)
     ├── challenges: array of {challengeId: string, points: number}
     ├── participants: array of {userId: string, score: number}
     ├── rankings: array of {userId: string, position: number, score: number}
     ├── createdAt: timestamp
     └── modifiedAt: timestamp
## ratings_reviews (collection)
 └── {reviewId} (document)
     ├── userId: string (reference to users)
     ├── targetUserId: string (who is being rated)
     ├── rating: number (1-5 scale)
     ├── comment: string (optional)
     ├── createdAt: timestamp
     └── modifiedAt: timestamp
## leaderboard (collection)
 └── {leaderboardId} (document)
     ├── type: string ("global" or "contest-specific")
     ├── contestId: string (optional, if contest-specific)
     ├── rankings: array of {userId: string, score: number, rank: number}
     └── updatedAt: timestamp
## notifications (collection)
 └── {notificationId} (document)
     ├── userId: string (who is receiving the notification)
     ├── type: string ("new_challenge", "contest_registration", "message_received", "review_received")
     ├── relatedId: string (e.g., challengeId, contestId, userId)
     ├── message: string (notification content)
     ├── isRead: boolean
     └── createdAt: timestamp
## messages (collection)
 └── {messageId} (document)
     ├── senderId: string (reference to users)
     ├── receiverId: string (reference to users)
     ├── body: string (message content)
     ├── relatedChallengeId: string (optional)
     ├── createdAt: timestamp
     ├── replyThread: array of {messageId: string, body: string, createdAt: timestamp} (optional)
     └── modifiedAt: timestamp
## wishlists (collection)
 └── {wishlistId} (document)
     ├── userId: string (reference to users)
     ├── name: string (e.g., "DP Challenges")
     ├── challenges: array of {challengeId: string}
     ├── privacy: string ("public" or "private")
     ├── createdAt: timestamp
     └── modifiedAt: timestamp
# Notes:
Relations:
        Firebase Firestore is a NoSQL database, meaning there are no direct "joins" between collections, but you can store references (userId, challengeId) to create relationships between entities.
        You can use Cloud Functions to trigger updates in related documents (e.g., when a submission is made, update the challenge’s totalSubmissions count).
 Scalability:
        This design allows for scalability, with collections like users, challenges, submissions, and contests being independently managed and accessed.
        Firebase Firestore handles scaling well, but as your app grows, indexing and query optimization will be crucial.


