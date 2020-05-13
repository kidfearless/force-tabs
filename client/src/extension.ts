import {commands, workspace, ExtensionContext, TextDocumentChangeEvent, TextDocument, TextDocumentWillSaveEvent} from 'vscode';

export function activate(context: ExtensionContext)
{
	context.subscriptions.push(workspace.onWillSaveTextDocument(onWillSaveTextDocument));
}

async function onWillSaveTextDocument(event: TextDocumentWillSaveEvent)
{
	await commands.executeCommand("editor.action.indentationToTabs");
}