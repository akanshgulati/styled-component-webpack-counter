import React, {Suspense} from 'react';
import Counter from "./components/counter"
import styled from "styled-components"
const App = styled.div`
    text-align: center;
    min-height: 100vh;
    background-color: #319795;
`;
const H1 = styled.h1`
	text-align: center;
	font-weight: 600;
	font-size: 50px;	
`;
const APP = () => {
	return (
		<App>
			<H1>Hello World! </H1>
			<Suspense fallback={<div>Loading...</div>}>
				{[1,2,3,4,5,6,7,8,9].map(item => <Counter key={item}/>)}
			</Suspense>
		</App>
	);
};

export default APP;
