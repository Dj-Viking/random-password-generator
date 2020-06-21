# random-password-generator

## Deployment Link


## Screenshot

![Landing Page Example](./assets/images/password-gen-page.png/)

## Summary

Here I have created in Javascript- an random password generator that you can choose a password length of 8 characters up to 128 characters.

Clicking the "Generate Password" button will begin the generation process. There will be a series of prompts which will guide you through some questions.
    - Do you want Upper Case letters?
    - Do you want Lower Case letters?
    - Do you want Special Characters?
    - Do you want Numbers?

Each of these questions will provide a unique password. The longer password lengths are more reliable in creating something with more variety. As having passwords around 8 characters will not shuffle nicely and might not include some of your choices.

Listed below are the current reliable choice sequences that will provide the best result.
Currently answering "No" or closing the window prompt to every question will not generate a password and the text area will be blank.

## Choice combinations

Uppercase   Lowercase  Symbols  Numbers 

YES, YES, YES, YES
YES,YES, YES, NO
YES, YES, NO, NO
YES, NO, NO, NO
NO, NO, NO, NO
NO, YES, YES, YES
NO, NO, YES, YES
NO, NO, NO, YES

# Bugged choices
 -YES NO YES YES 
 doesn't give any upper case letters. They all disappear only contains symbols and numbers.

 -YES NO YES NO  
 only gives special characters and no uppercase letters
