# Automate Twitch

Automate the collection of [channel points](https://help.twitch.tv/s/article/channel-points-guide) on Twitch.

## Usage

1. Download and load the Add-on in your browser.
2. Go to the `twitch.tv` page of the stream you want to see.
3. Make sure you are logged in and it's go.

## Dependency

Ensure you have [Node.js](https://nodejs.org) 10 or later installed.

## Development

1. Run `npm install` to install dependencies.
2. To watch file changes in development, run `npm run dev:<chrome|firefox|opera>`.
3. And load extension in browser

  - ### Chrome

    - Go to the browser address bar and type `chrome://extensions`
    - Check the `Developer Mode` button to enable it.
    - Click on the `Load Unpacked Extension…` button.
    - Select your extension’s extracted directory.

  - ### Firefox

    - Load the Add-on via `about:debugging` as temporary Add-on.
    - Choose the `manifest.json` file in the extracted directory

  - ### Opera

    - Load the extension via `opera:extensions`
    - Check the `Developer Mode` and load as unpacked from extension’s extracted directory.

## Production

- `npm run build` builds the extension for all the browsers to `extension/BROWSER` directory respectively.