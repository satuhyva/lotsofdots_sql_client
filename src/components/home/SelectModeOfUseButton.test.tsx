import React from 'react'
import { render } from '@testing-library/react'
import SelectModeOfUseButton from './SelectModeOfUseButton'
import { modeOfUse } from '../../state/modeOfUse'
import { BrowserRouter as Router} from 'react-router-dom'



const modeWithDescription =     {
    modeOfUse: modeOfUse.CREATE,
    title: 'CREATE',
    to: '/create',
    description: 'With this tool you can create a new Dot Voting event.' 
}

const createComponent = () => {
    const selectModeOfUseMock = jest.fn()
    return render(
        <div>
            <Router>
                <SelectModeOfUseButton
                    modeWithDescription={modeWithDescription}
                    selectModeOfUse={selectModeOfUseMock}
                />
            </Router>
        </div>
    )
}



describe('SELECT MODE OF APP USE -BUTTON', () => {

    it('can be rendered', async () => {
        const component = createComponent()
            
        const selectButton = component.container.querySelector('[data-testid="select-button-CREATE"]')
        expect(selectButton).not.toBeNull()
    })

    it('contains the correct link', async () => {
        const component = createComponent()
            
        const selectButton = component.container.querySelector('[data-testid="select-button-CREATE"]')
        expect(selectButton).not.toBeNull()
        expect(selectButton?.getAttribute('href')).toEqual('/create')
    })  


    it('contains the correct title', async () => {
        const component = createComponent()

        const titleText = component.container.querySelector('[data-testid="mode-title-CREATE"]')
        expect(titleText).not.toBeNull()
        expect(titleText?.textContent).toEqual('CREATE')

    })

    it('contains the correct description', async () => {
        const component = createComponent()

        const descriptionText = component.container.querySelector('[data-testid="mode-description-CREATE"]')
        expect(descriptionText).not.toBeNull()
        expect(descriptionText?.textContent).toEqual('With this tool you can create a new Dot Voting event.')

    })
})