import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	vscode.window.showInformationMessage('Extension "zap" is now active!');

	let simpleMessage = vscode.commands.registerCommand('zap.test', () => {
		vscode.window.showInformationMessage('ZAP Integration!');
	});

	let showZapUi = vscode.commands.registerCommand('zap.show', () => {
		vscode.commands.executeCommand('simpleBrowser.show', 'http://localhost:9070')
	})

	context.subscriptions.push(simpleMessage);
	context.subscriptions.push(showZapUi);
}

export function deactivate() {}
