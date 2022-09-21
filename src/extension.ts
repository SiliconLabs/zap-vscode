import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Extension "zap" is now active!');

	let disposable = vscode.commands.registerCommand('zap.test', () => {
		vscode.window.showInformationMessage('ZAP Integration!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
