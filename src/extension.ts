/*******************************************************************************
 * Copyright 2022 Silicon Laboratories Inc. www.silabs.com
 *******************************************************************************
 *
 * The licensor of this software is Silicon Laboratories Inc. Your use of this
 * software is governed by the terms of Silicon Labs Master Software License
 * Agreement (MSLA) available at
 * www.silabs.com/about-us/legal/master-software-license-agreement. This
 * software is distributed to you in Source Code format and is governed by the
 * sections of the MSLA applicable to Source Code.
 *
 ******************************************************************************/

// Main extension entry point.
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
