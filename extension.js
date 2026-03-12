const vscode = require("vscode");
const { paletteOptions, themeNames } = require("./scripts/theme-variants.cjs");

const THEME_NAMES = themeNames;
const PALETTE_LABELS = new Map(paletteOptions.map((palette) => [palette.id, palette.label]));

function parseThemeName(themeName) {
  const match = /^Soft Pastel (.+) (Light|Dark)$/.exec(themeName);
  if (!match) {
    return undefined;
  }

  const [, paletteLabel, modeLabel] = match;
  const palette = paletteOptions.find((entry) => entry.label === paletteLabel);
  if (!palette) {
    return undefined;
  }

  return {
    palette: palette.id,
    mode: modeLabel.toLowerCase()
  };
}

function resolvePreferredTheme() {
  const config = vscode.workspace.getConfiguration("pastelColorTheme");
  const explicitTheme = config.get("preferredTheme");
  if (typeof explicitTheme === "string" && explicitTheme && THEME_NAMES.includes(explicitTheme)) {
    return explicitTheme;
  }

  const mode = config.get("preferredMode", "light");
  const palette = config.get("preferredPalette", "aqua");
  const paletteLabel = PALETTE_LABELS.get(palette) ?? "Aqua";
  const resolved = `Soft Pastel ${paletteLabel} ${mode === "dark" ? "Dark" : "Light"}`;
  return THEME_NAMES.includes(resolved) ? resolved : THEME_NAMES[0];
}

async function applyTheme(themeName) {
  const workbenchConfig = vscode.workspace.getConfiguration("workbench");
  await workbenchConfig.update("colorTheme", themeName, vscode.ConfigurationTarget.Global);
  await workbenchConfig.update("preferredLightColorTheme", themeName, vscode.ConfigurationTarget.Global);
  await workbenchConfig.update("preferredDarkColorTheme", themeName, vscode.ConfigurationTarget.Global);
}

async function applyPreferredTheme() {
  const themeName = resolvePreferredTheme();
  await applyTheme(themeName);
  return themeName;
}

async function clearExplicitThemeSelection() {
  const config = vscode.workspace.getConfiguration("pastelColorTheme");
  const explicitTheme = config.get("preferredTheme");
  if (explicitTheme) {
    await config.update("preferredTheme", "", vscode.ConfigurationTarget.Global);
  }
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
    const parsed = parseThemeName(selected);
    if (parsed) {
      await config.update("preferredMode", parsed.mode, vscode.ConfigurationTarget.Global);
      await config.update("preferredPalette", parsed.palette, vscode.ConfigurationTarget.Global);
    }
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

    const shouldClearExplicitTheme = event.affectsConfiguration("pastelColorTheme.preferredMode")
      || event.affectsConfiguration("pastelColorTheme.preferredPalette");

    const applyChanges = async () => {
      const updatedConfig = vscode.workspace.getConfiguration("pastelColorTheme");
      if (shouldClearExplicitTheme) {
        await clearExplicitThemeSelection();
      }

      if (updatedConfig.get("applyOnStartup", true)) {
        await applyPreferredTheme();
      }
    };

    applyChanges().catch(() => undefined);
  }));
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};