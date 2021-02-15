# DigFireDemo

## Installation



## Running the demo



## Creating Libraries

### Create and configure the library

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

### Building your library

Now you are ready to build your library:

`ng build dig-fire-profile --watch`

### Create your demo
