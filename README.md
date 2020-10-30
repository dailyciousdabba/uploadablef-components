# uploadablef-components

> This is for the use of API of uploadableF app

[![NPM](https://img.shields.io/npm/v/uploadablef-components.svg)](https://www.npmjs.com/package/uploadablef-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save uploadablef-components
```

## Usage

```jsx
import React from 'react'
import { ExampleComponent } from 'uploadablef-components'

const App = () => {
  const uploadImageObj = {
    documentList: [
      {
        documentName: 'Aadhar Card',
        id: '1',
        limit: 200,
        type: 'jpeg',
        uploadURL: 'https://abc.com/api/'
      },
      {
        documentName: 'School XI Marksheet',
        id: '2',
        limit: 350,
        type: 'jpeg',
        uploadURL: 'https://abc.com/api/'
      }
    ]
  }

  return (
    <ExampleComponent
      QRCodedata={uploadImageObj}
      ButtonName={'Scan and Upload'}
      ButtonVariant={'primary'}
    />
  )
}
```

## License

MIT © [dailyciousdabba](https://github.com/dailyciousdabba)
