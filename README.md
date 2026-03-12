# pastel-color-theme

この拡張は 1 つの中に複数のパステルテーマを持つ theme pack です。設定から Light / Dark と palette を選び、既定テーマとして自動適用できます。

## Flow

JSONC
↓
コメント削除
↓
JSON
↓
VS Code theme として読み込み

## Variants

- White
- Black
- Pink
- Aqua
- Yellow
- Orange
- Green
- Gray
- Brown

各 palette に `Light` と `Dark` があり、合計 18 テーマです。Light も真っ白ではなく、少し色味を持たせた背景にしています。

## Settings

- `pastelColorTheme.applyOnStartup`: 起動時に preferred theme を適用
- `pastelColorTheme.preferredMode`: `light` / `dark`
- `pastelColorTheme.preferredPalette`: `white` / `black` / `pink` / `aqua` / `yellow` / `orange` / `green` / `gray` / `brown`
- `pastelColorTheme.preferredTheme`: 個別 variant を直接指定

コマンドパレットからも次を実行できます。

- `Pastel Color Theme: Apply Preferred Theme`
- `Pastel Color Theme: Select Theme Variant`

## Files

- `themes/*.json`: 生成物
- `scripts/theme-variants.cjs`: palette と token 配色の元データ
- `scripts/build-theme.mjs`: theme JSON を生成するスクリプト
- `extension.js`: 設定値に応じて theme variant を適用する拡張コード

## Build

```bash
npm install
npm run build
```

`scripts/theme-variants.cjs` の定義から、すべての theme JSON を生成します。

## How To Use

1. `npm install`
2. `npm run build`
3. `F5` で Extension Development Host を起動
4. Settings で `Pastel Color Theme` を検索
5. `Preferred Mode` と `Preferred Palette`、または `Preferred Theme` を選択

手動で切り替える場合は、コマンドパレットから `Pastel Color Theme: Select Theme Variant` を使えます。

## Publishing

公開前に埋める項目:

- `publisher` in `package.json`
- `repository` in `package.json`

パッケージ確認:

```bash
vsce package --allow-missing-repository
```

Marketplace へ publish する前に、実際の publisher 名と repository URL を設定してください。

## .properties の確認

`samples/application.properties` を Extension Development Host で開き、`Developer: Inspect Editor Tokens and Scopes` を使うと、どの scope に色が当たっているか確認できます。

想定マッピング:

- キー: `variable.other.key.properties` または `entity.other.attribute-name.properties`
- `=`: `punctuation.separator.key-value.properties`
- 値: `string.unquoted.properties` または `meta.property-value.properties`
- コメント: `comment.line.number-sign`
- 数値: `constant.numeric`
- 真偽値: `constant.language.boolean.properties`
- エスケープ: `constant.character.escape.properties`
