import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children, authentication = true}) {
    const {loader, setLoader} = useState(true)
    const authStatus = useSelector(state => state.auth.status)
  return (
    <div>Protected</div>
  )
}

export default Protected