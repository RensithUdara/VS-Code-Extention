# develo# Developer Productivity Tools

A comprehensive VS Code extension packed with useful tools to boost developer productivity. This extension provides a collection of commonly-needed utilities that save time and reduce repetitive tasks.

## Features

### 🔧 Text Manipulation
- **Duplicate Line** (`Ctrl+Shift+D`): Quickly duplicate the current line
- **Sort Lines Ascending**: Sort selected lines in alphabetical order
- **Sort Lines Descending**: Sort selected lines in reverse alphabetical order
- **Remove Empty Lines**: Clean up your code by removing all empty lines from selection or entire document

### 📊 Text Analysis
- **Count Words/Lines/Characters**: Get detailed statistics about your text including:
  - Word count
  - Character count (with and without spaces)
  - Line count
  - Paragraph count
- **Live Selection Stats**: See real-time word, character, and line counts in the status bar when text is selected

### ⏰ Utilities
- **Insert Timestamp** (`Ctrl+Shift+T`): Insert current ISO timestamp at cursor position
- **Generate UUID**: Generate and insert a random UUID
- **Open in New Window**: Open the current file in a new VS Code window

### 🎯 Smart Context Menus
All text manipulation commands are available via right-click context menu when appropriate:
- Duplicate Line (always available)
- Sort Lines (when text is selected)
- Remove Empty Lines (when text is selected)

## Installation

1. Open VS Code
2. Press `Ctrl+P` to open Quick Open
3. Type `ext install developer-productivity-tools`
4. Press Enter

## Usage

### Command Palette
Open the Command Palette (`Ctrl+Shift+P`) and search for "Productivity" to see all available commands.

### Keyboard Shortcuts
- `Ctrl+Shift+D`: Duplicate current line
- `Ctrl+Shift+T`: Insert current timestamp

### Context Menu
Right-click in the editor to access text manipulation tools.

### Status Bar
When you select text, the status bar will show live statistics including word count, character count, and line count.

## Commands

| Command | Description | Keyboard Shortcut |
|---------|-------------|-------------------|
| `developer-productivity-tools.duplicateLine` | Duplicate the current line | `Ctrl+Shift+D` |
| `developer-productivity-tools.insertTimestamp` | Insert current ISO timestamp | `Ctrl+Shift+T` |
| `developer-productivity-tools.sortLinesAsc` | Sort selected lines ascending | - |
| `developer-productivity-tools.sortLinesDesc` | Sort selected lines descending | - |
| `developer-productivity-tools.removeEmptyLines` | Remove empty lines from selection/document | - |
| `developer-productivity-tools.countWords` | Show detailed text statistics | - |
| `developer-productivity-tools.generateUuid` | Generate and insert UUID | - |
| `developer-productivity-tools.openInNewWindow` | Open current file in new window | - |

## Development

### Prerequisites
- Node.js (v16 or higher)
- VS Code

### Setup
```bash
git clone <repository-url>
cd developer-productivity-tools
npm install
```

### Running the Extension
1. Open the project in VS Code
2. Press `F5` to open a new Extension Development Host window
3. Test the extension commands in the new window

### Building
```bash
npm run compile
```

### Testing
```bash
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### 0.0.1
- Initial release
- Added line duplication functionality
- Added timestamp insertion
- Added text sorting capabilities
- Added empty line removal
- Added text statistics
- Added UUID generation
- Added status bar integration
- Added context menu integration-productivity-tools README

This is the README for your extension "developer-productivity-tools". After writing up a brief description, we recommend including the following sections.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
