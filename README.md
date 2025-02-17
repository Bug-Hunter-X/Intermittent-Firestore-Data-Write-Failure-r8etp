# Intermittent Firestore Data Write Failure

This repository demonstrates a bug where data intermittently fails to write to Firebase Firestore, even with successful authentication and no apparent errors. The issue is exacerbated by the asynchronous nature of the code.

## Bug Description

The primary problem is the unpredictable failure of Firestore's `set()` method.  While the method executes without throwing errors, the data is not consistently persisted to the database. This behavior makes debugging particularly challenging.

## Reproduction Steps

1. Clone this repository.
2. Install the required npm packages: `npm install`
3. Configure your Firebase project and credentials (replace placeholders in `bug.js`).
4. Run the application: `node bug.js`
5. Observe that the data is sometimes written, sometimes not written, inconsistently. 

## Solution

The solution involves ensuring all asynchronous operations related to the Firestore write are properly handled.  This might include better error handling, explicit transaction management, or confirming data consistency after a delay.