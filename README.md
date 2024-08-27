# Chmod Calculator

A simple web-based calculator for converting Linux file permissions between octal and symbolic notation. This project allows users to easily toggle file permission settings for owner, group, and public, and see the corresponding octal and symbolic representations update in real-time.

##  [Live App](https://chmod-calc-five.vercel.app/)

## Key Files

- index.html: The main HTML file that contains the structure of the page.
- styles.css: CSS file that styles the HTML elements.
- script.js: JavaScript file responsible for handling user interactions and updating the displayed file permissions.
- calculate.js: A Node.js API endpoint that calculates the octal and symbolic representations of the selected permissions.


## Deployment

The project is designed to be deployed on Vercel, which is a platform optimised for static sites and serverless functions.

## Deploying to Vercel

1. Create an account on Vercel (if you don’t already have one).
2. Install Vercel CLI (if not installed):
    ```
    npm install -g vercel
    ```

3. Deploy the project:

    ```
    vercel
    ```

4. Follow the prompts to deploy the project. The deployment will create a live, shareable URL.

## Troubleshooting Deployment

- Static Files Not Loading: Ensure that paths in index.html are correct and relative. For example, styles.css should be referenced as styles.css instead of ./styles.css.

- API Endpoint Issues: Ensure that calculate.js is correctly configured and that the Vercel deployment recognizes it as a serverless function.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Steps to Contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
    ```
    git checkout -b feature-branch
    ```
3. Commit your changes.
    ```
    git commit -m "Description of changes"
    ```
4. Push to your fork.
    ```
    git push origin feature-branch
    ```
5. Create a pull request against the main repository.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

