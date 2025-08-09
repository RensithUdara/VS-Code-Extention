# develo# Developer Productivity Tools 🚀

A powerful VS Code extension designed to supercharge your development workflow! This extension brings together the most commonly needed productivity tools that developers use daily, all in one convenient package.

## ✨ Key Features

### 🔧 Advanced Text Manipulation
- **Smart Line Duplication** (`Ctrl+Shift+D`): Instantly duplicate any line with cursor positioning
- **Intelligent Line Sorting**: Sort selected text alphabetically (ascending/descending)
- **Clean Code Tools**: Remove empty lines to clean up your codebase
- **Quick Text Operations**: Streamline your editing workflow

### 📊 Real-time Text Analytics
- **Live Statistics**: Dynamic word, character, and line counting in the status bar
- **Comprehensive Analysis**: Detailed text statistics including:
  - Word count and character count (with/without spaces)
  - Line count and paragraph analysis
  - Selection-based or document-wide analysis

### ⚡ Developer Utilities
- **Instant Timestamps** (`Ctrl+Shift+T`): Insert ISO-formatted timestamps
- **UUID Generation**: Generate RFC4122 compliant UUIDs instantly
- **Multi-window Workflow**: Open files in new VS Code windows
- **Context-aware Menus**: Smart right-click options based on your selection

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
- Added context menu integration
