import React from 'react'
import { UploadableFButton } from 'uploadablef-components'

const App = () => {
  const uploadImageObj = {
    "documentList": [
      {
        documentName: "Aadhar Card",
        id: "1",
        limit: 200,
        type: "jpeg",
        uploadURL: "https://abc.com/api/"
      },
      {
        documentName: "School XI Marksheet",
        id: "2",
        limit: 350,
        type: "jpeg",
        uploadURL: "https://abc.com/api/"
      }
    ]
  }

  return(
    <UploadableFButton
      QRCodedata={uploadImageObj}
      ButtonName={'Scan and Upload'}
      ButtonVariant={'primary'}
    />
  )
}

export default App
