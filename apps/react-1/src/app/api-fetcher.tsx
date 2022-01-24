import {useEffect, useState} from "react";

export function ApiFetcher() {
  const [apiMessage, setApiMessage] = useState("")

  useEffect(() => {
    fetch('/api')
      .then((_) => _.json())
      .then(setApiMessage);
  },[])
  return (
    <>
      <p>API Fetcher: {JSON.stringify(apiMessage)}</p>
    </>
  )
}
