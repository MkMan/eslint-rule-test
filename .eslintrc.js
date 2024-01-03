module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:react/recommended", "plugin:@atlaskit/design-system/recommended",],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "@atlaskit/design-system",
    ],
    "rules": {
    }
}
