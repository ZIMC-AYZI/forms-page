# Angular Forms Application

## Overview

This Angular application allows users to dynamically create and submit multiple forms. Each form has three fields: Country, Username, and Birthday. The application includes form validation, dynamic form creation, and a submission timer with a cancel option.

## Features

- **Dynamic Form Creation**: Users can create up to 10 forms by pressing the "Add Form" button.
- **Form Validation**: Each form includes validation for the Country, Username, and Birthday fields.
- **Submission Timer**: Upon submitting the forms, a 15-second timer starts during which the user can cancel the submission to edit the forms.
- **Form Submission**: If the timer expires, the forms are submitted, and all fields are cleared.

## Form Fields

1. **Country**
- **Type**: Text Input
- **Validation**: The value must be one of the following enum values:
  ```typescript
  const countryRegion = {
    [Country.Australia]: 'Australia',
    [Country.Poland]: 'Europe',
    [Country.Ukraine]: 'Europe',
    [Country.Austria]: 'Europe',
    [Country.USA]: 'America',
    [Country.Mexico]: 'America',
    [Country.Nepal]: 'Asia',
  };
  ```
- **Tooltip**: Suggests valid country names while typing.

2. **Username**
- **Type**: Text Input
- **Validation**: The username must include the word "new". This is validated by sending the value to the `/api/checkUsername` endpoint.
- **Backend Validation**:
  - `{isAvailable: true}` if the username includes "new".
  - `{isAvailable: false}` otherwise.
- **Tooltip**: Displays a message if the username is not available.

3. **Birthday**
- **Type**: Date Picker
- **Validation**: The selected date cannot be later than the current date.
- **Tooltip**: Displays a message if the date is invalid.

## Form Submission Process

1. **Add Form**: Users can add new forms by pressing the "Add Form" button. A maximum of 10 forms can be created.
2. **Submit All Forms**: Pressing the "Submit All Forms" button will:
- Disable all forms.
- Start a 15-second timer.
- Change the button to "Cancel".
- Display the countdown timer.
3. **Cancel Submission**: Users can cancel the submission during the 15-second countdown. This will:
- Stop the timer.
- Enable all forms for editing.
- Change the "Cancel" button back to "Submit All Forms".
4. **Complete Submission**: If the timer runs out:
- The forms' values are sent to the `/api/submitForm` endpoint.
- All forms are cleared.
- The timer disappears.
- The button reverts to "Submit All Forms".

# Version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy

Switch to the gh-pages branch.
Run `ng build --base-href https://ZIMC-AYZI.github.io/forms-page/` and unwrap all files from the browser folder to the docs folder.

