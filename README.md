# Angular 17 Firebase Authentication Project

## Description
This project is an Angular 17 application that uses Firebase for authentication. It includes a basic setup with services and components for user login and registration.


## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Contributing](#contributing)
5. [License](#license)
6. [Contact Information](#contact-information.

## Installation
Follow these steps to install and set up the project.

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/your-angular-firebase-auth.git
    cd your-angular-firebase-auth
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

## Setup Firebase
Set up Firebase for authentication and data storage.

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Navigate to **Authentication** and enable **Email/Password** sign-in method.
4. Navigate to **Project Settings** and create a new web app.
5. Copy the Firebase config object provided by Firebase.

## Configuration
Configure the Angular project with your Firebase credentials.

1. Open `src/environments/environment.ts` and `src/environments/environment.prod.ts`.
2. Replace the placeholder values with your Firebase config object.

    ```typescript
    // src/environments/environment.ts
    export const environment = {
      production: false,
      firebaseConfig: {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
      }
    };
    ```

    ```typescript
    // src/environments/environment.prod.ts
    export const environment = {
      production: true,
      firebaseConfig: {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
      }
    };
    ```

## Usage
Here are the steps to run and use the application.

1. **Start the project**

    ```bash
    ng serve
    ```

2. **Access the application**

    Open your browser and navigate to `http://localhost:4200`.

3. **Login and Registration**

    - Navigate to the login page at `http://localhost:4200/login` to log in.
    - Navigate to the registration page at `http://localhost:4200/register` to create a new account.

## Features
- **Authentication Service**: Handles user login and registration using Firebase.
- **Login Component**: Allows users to log in to their account.
- **Register Component**: Allows users to create a new account.
- **Firebase Integration**: Uses Firebase for backend authentication and data storage.

## Contributing
If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact Information
If you have any questions or feedback, feel free to contact me at [your.email@example.com](mailto:your.email@example.com).
