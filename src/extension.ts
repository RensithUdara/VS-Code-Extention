// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Developer Productivity Tools extension is now active!');

	// Status bar item for word count
	const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	context.subscriptions.push(statusBarItem);

	// Update status bar on selection change
	const updateStatusBar = () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const selection = editor.selection;
			if (!selection.isEmpty) {
				const text = editor.document.getText(selection);
				const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
				const charCount = text.length;
				const lineCount = text.split('\n').length;
				statusBarItem.text = `$(pencil) ${wordCount} words, ${charCount} chars, ${lineCount} lines`;
				statusBarItem.show();
			} else {
				statusBarItem.hide();
			}
		}
	};

	vscode.window.onDidChangeTextEditorSelection(updateStatusBar);
	vscode.window.onDidChangeActiveTextEditor(updateStatusBar);

	// Duplicate current line command
	const duplicateLineCommand = vscode.commands.registerCommand('developer-productivity-tools.duplicateLine', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const position = editor.selection.active;
		const line = editor.document.lineAt(position.line);
		const lineText = line.text;

		editor.edit(editBuilder => {
			editBuilder.insert(new vscode.Position(position.line + 1, 0), lineText + '\n');
		}).then(() => {
			// Move cursor to the duplicated line
			const newPosition = new vscode.Position(position.line + 1, position.character);
			editor.selection = new vscode.Selection(newPosition, newPosition);
		});
	});

	// Insert timestamp command
	const insertTimestampCommand = vscode.commands.registerCommand('developer-productivity-tools.insertTimestamp', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const timestamp = new Date().toISOString();
		editor.edit(editBuilder => {
			editBuilder.insert(editor.selection.active, timestamp);
		});
	});

	// Sort lines ascending command
	const sortLinesAscCommand = vscode.commands.registerCommand('developer-productivity-tools.sortLinesAsc', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor || editor.selection.isEmpty) {
			return;
		}

		const selectedText = editor.document.getText(editor.selection);
		const lines = selectedText.split('\n');
		const sortedLines = lines.sort((a, b) => a.localeCompare(b));

		editor.edit(editBuilder => {
			editBuilder.replace(editor.selection, sortedLines.join('\n'));
		});
	});

	// Sort lines descending command
	const sortLinesDescCommand = vscode.commands.registerCommand('developer-productivity-tools.sortLinesDesc', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor || editor.selection.isEmpty) {
			return;
		}

		const selectedText = editor.document.getText(editor.selection);
		const lines = selectedText.split('\n');
		const sortedLines = lines.sort((a, b) => b.localeCompare(a));

		editor.edit(editBuilder => {
			editBuilder.replace(editor.selection, sortedLines.join('\n'));
		});
	});

	// Remove empty lines command
	const removeEmptyLinesCommand = vscode.commands.registerCommand('developer-productivity-tools.removeEmptyLines', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const selection = editor.selection;
		const text = selection.isEmpty ? editor.document.getText() : editor.document.getText(selection);
		const lines = text.split('\n');
		const nonEmptyLines = lines.filter(line => line.trim() !== '');

		editor.edit(editBuilder => {
			if (selection.isEmpty) {
				const fullRange = new vscode.Range(
					editor.document.positionAt(0),
					editor.document.positionAt(editor.document.getText().length)
				);
				editBuilder.replace(fullRange, nonEmptyLines.join('\n'));
			} else {
				editBuilder.replace(selection, nonEmptyLines.join('\n'));
			}
		});
	});

	// Open current file in new window command
	const openInNewWindowCommand = vscode.commands.registerCommand('developer-productivity-tools.openInNewWindow', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const uri = editor.document.uri;
		vscode.commands.executeCommand('vscode.openWith', uri, 'default', vscode.ViewColumn.Beside);
	});

	// Count words/lines/characters command
	const countWordsCommand = vscode.commands.registerCommand('developer-productivity-tools.countWords', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		const selection = editor.selection;
		const text = selection.isEmpty ? editor.document.getText() : editor.document.getText(selection);
		
		const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
		const charCount = text.length;
		const charCountNoSpaces = text.replace(/\s/g, '').length;
		const lineCount = text.split('\n').length;
		const paragraphCount = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;

		const scope = selection.isEmpty ? 'entire document' : 'selection';
		
		vscode.window.showInformationMessage(
			`Statistics for ${scope}:\n` +
			`Words: ${wordCount}\n` +
			`Characters: ${charCount} (${charCountNoSpaces} without spaces)\n` +
			`Lines: ${lineCount}\n` +
			`Paragraphs: ${paragraphCount}`,
			{ modal: true }
		);
	});

	// Generate UUID command
	const generateUuidCommand = vscode.commands.registerCommand('developer-productivity-tools.generateUuid', async () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		// Generate UUID without external dependency
		const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			const r = Math.random() * 16 | 0;
			const v = c === 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});

		editor.edit(editBuilder => {
			editBuilder.insert(editor.selection.active, uuid);
		});
	});

	// Register all commands
	context.subscriptions.push(
		duplicateLineCommand,
		insertTimestampCommand,
		sortLinesAscCommand,
		sortLinesDescCommand,
		removeEmptyLinesCommand,
		openInNewWindowCommand,
		countWordsCommand,
		generateUuidCommand
	);
}

// This method is called when your extension is deactivated
export function deactivate() {}
