const vscode = require("vscode");
const { paletteOptions, themeNames } = require("./scripts/theme-variants.cjs");

const THEME_NAMES = themeNames;
const PALETTE_LABELS = new Map(paletteOptions.map((palette) => [palette.id, palette.label]));

function resolvePreferredTheme() {
  const config = vscode.workspace.getConfiguration("pastelColorTheme");
  const explicitTheme = config.get("preferredTheme");
  if (THEME_NAMES.includes(explicitTheme)) {
    return explicitTheme;
  }

  const mode = config.get("preferredMode", "light");
  const palette = config.get("preferredPalette", "aqua");
  const paletteLabel = PALETTE_LABELS.get(palette) ?? "Aqua";
  const resolved = `Soft Pastel ${paletteLabel} ${mode === "dark" ? "Dark" : "Light"}`;
  return THEME_NAMES.includes(resolved) ? resolved : THEME_NAMES[0];
}

async function applyTheme(themeName) {
  await vscode.workspace.getConfiguration("workbench").update("colorTheme", themeName, vscode.ConfigurationTarget.Global);
}

async function applyPreferredTheme() {
  const themeName = resolvePreferredTheme();
  await applyTheme(themeName);
  return themeName;
}

function activate(context) {
  context.subscriptions.push(vscode.commands.registerCommand("pastelColorTheme.applyPreferredTheme", async () => {
    const themeName = await applyPreferredTheme();
    vscode.window.showInformationMessage(`Applied theme: ${themeName}`);
  }));

  context.subscriptions.push(vscode.commands.registerCommand("pastelColorTheme.selectVariant", async () => {
    const selected = await vscode.window.showQuickPick(THEME_NAMES, {
      placeHolder: "Select a Pastel Color Theme variant"
    });

    if (!selected) {
      return;
    }

    const config = vscode.workspace.getConfiguration("pastelColorTheme");
    await config.update("preferredTheme", selected, vscode.ConfigurationTarget.Global);
    await applyTheme(selected);
    vscode.window.showInformationMessage(`Applied theme: ${selected}`);
  }));

  const config = vscode.workspace.getConfiguration("pastelColorTheme");
  if (config.get("applyOnStartup", true)) {
    applyPreferredTheme().catch(() => undefined);
  }

  context.subscriptions.push(vscode.workspace.onDidChangeConfiguration((event) => {
    if (!event.affectsConfiguration("pastelColorTheme")) {
      return;
    }

    const updatedConfig = vscode.workspace.getConfiguration("pastelColorTheme");
    if (updatedConfig.get("applyOnStartup", true)) {
      applyPreferredTheme().catch(() => undefined);
    }
  }));
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};