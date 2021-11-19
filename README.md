# Puppeteer testing example

## Setup

1. Copy the file `tests/environment/environment.example.ts` and name it `tests/environment/environment.ts`.
2. Set your credentials in `tests/environment/environment.ts`.
3. Run `npm install`

## Running the tests

#### Store tests

`npm run test:store`

#### Wallet tests

`npm run test:wallet`

## Notes

- If your Ultra client is installed in a different location than `C:/Program Files/Ultra_Dev/Application/ultra.exe` you can change it in `jest-puppeteer.config.js`
