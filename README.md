# LeetCode Stealth Mode

A Chrome extension that enhances privacy while practicing coding problems by removing identifying website elements.

## Features

- Removes website favicon
- Hides website logo
- Lightweight and performance-optimized

## Installation

### Local Installation (Developer Mode)

1. Clone this repository:
```bash
git clone https://github.com/linghutiantian/leetcode-stealth.git
```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the extension directory

### Chrome Web Store Installation (Coming Soon)

The extension will be available on the Chrome Web Store in the future.

## Usage

After installation, the extension will automatically:
- Replace the website favicon with a blank icon
- Hide the website logo

No additional configuration is required.

## How It Works

The extension uses MutationObservers to monitor DOM changes and maintain privacy features even when the page content updates dynamically. It includes:

- Favicon replacement system
- Logo hiding mechanism

## Project Structure

```
leetcode-stealth/
├── manifest.json
├── stealth.css
├── stealth.js
├── README.md
└── LICENSE
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Privacy

This extension:
- Doesn't collect any user data
- Doesn't modify any problem content
- Only affects visual elements for privacy
- Works entirely client-side

## Development

### Prerequisites

- Google Chrome
- Basic knowledge of JavaScript and Chrome Extension development

### Setting Up Development Environment

1. Clone the repository
2. Load the extension in developer mode
3. Make changes to `stealth.js` `stealth.css` as needed
4. Reload the extension to test changes

## Roadmap

- [ ] Create Chrome Web Store listing
- [ ] Add customizable settings

---

Made with ❤️ for the coding community