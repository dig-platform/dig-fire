# DigFire Libraries

DigFire libraries connect Ionic UI with Dig Firebase resources.

## Creating a library

First create the Angular library

`ng g library dig-fire-profile`

Then update the project's `package.json` file: 

1. prepend the name with `@dig-platform/`
2. add any required packages as peer dependencies

```json
{
  "name": "@dig-platform/dig-fire-profile",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^11.2.0",
    "@angular/core": "^11.2.0",
    "@dig-platform/dig-fire-user": "^0.0.1"
  },
  "dependencies": {
    "tslib": "^2.0.0"
  }
}
```

Then update the name of the package in your `tsconfig.json` file:

```json
{
    "paths": {
      "@dig-platform/dig-fire-profile": [
        "dist/dig-fire-profile/dig-fire-profile",
        "dist/dig-fire-profile"
      ]
    }
}
```

Finally add a build command to the app's `package.json` scripts section:

```json
{
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "build:dig-fire": "ng build dig-fire --watch",
    "build:dig-fire-profile": "ng build dig-fire-profile --watch",
    "build:lib": "npm run build:dig-fire && npm run build:dig-fire-profile",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  }
```

### Create your demo

> todo
