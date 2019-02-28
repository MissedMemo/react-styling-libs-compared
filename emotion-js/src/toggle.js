import React, { useState } from 'react'

export const useToggle = ( initialState = false ) => {

  const [toggled, setIsToggled] = useState(initialState)

  const handleToggle = () => setIsToggled( toggled => !toggled )

  return [ toggled, handleToggle]
}
