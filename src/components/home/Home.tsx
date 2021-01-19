import React, { useContext } from 'react'
import AppContext from '../../state/context'
import SelectModeOfUseButton from './SelectModeOfUseButton'
import { useHomeStyles } from './useHomeStyles'
import { UseModesWithDescription } from './UseModesWithDescription'
import { modeOfUse } from '../../state/modeOfUse'
import { actionTypes } from '../../state/actions'


const Home: React.FC = () => {

  const classes = useHomeStyles()
  const { dispatch } = useContext(AppContext)

  const selectModeOfUse = (modeOfUse: modeOfUse) => {
    dispatch({ type: actionTypes.SET_MODE_OF_USE, data: modeOfUse })
  }

  return(
    <div className={classes.container}>
      {UseModesWithDescription.map(modeWithDescription =>
        <SelectModeOfUseButton
          key={modeWithDescription.title}
          modeWithDescription={modeWithDescription}
          selectModeOfUse={selectModeOfUse}
        />
      )}
    </div>
      
  )
}

export default Home