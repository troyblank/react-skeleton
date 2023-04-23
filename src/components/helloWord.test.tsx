import React from 'react'
import { render } from '@testing-library/react'
import Chance from 'chance'
import { HELLO_WORD_COPY } from './constants'
import { HelloWorld } from './helloWorld'

describe( 'Hello World', () => {
	const chance = new Chance()

	it( 'should be able to render', () => {
		const { getByText, queryByText } = render( <HelloWorld /> )

		expect( getByText( HELLO_WORD_COPY ) ).toBeInTheDocument()
		expect( queryByText( chance.sentence() ) ).not.toBeInTheDocument()
	} )
} )
