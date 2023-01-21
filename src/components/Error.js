import { useRouteError } from "react-router-dom"


const Error = () => {
    const err = useRouteError()
    const {data,status,statusText} = err
  return (
    <div>
        Your custom error page... Goes here😪😫
       <p> {data}</p>
       {status +":"+ statusText}
    </div>
  )
}

export default Error
