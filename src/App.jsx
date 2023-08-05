import { Box, Text } from '@chakra-ui/react';
import './App.css';
import { Numbers } from './components/Numbers';
import React, { useState } from 'react';
import { Expression } from './components/Expression';

function App() {
	const [count, setCount] = useState('0');
	const [result, setResult] = useState('0');

	const Counter = (event) => {
		const target = event.target;
		if (count !== '0') {
			setCount(count + target.innerHTML);
		} else {
			setCount(target.innerHTML);
		}
	};


	const applyExpression = (countedExpression) => {
		Counter(countedExpression);
		// eslint-disable-next-line
		setResult(eval(count));
	};

	const Clear = () => {
		setCount('0');
		setResult('0');
	};

	const Result = () => {
		// eslint-disable-next-line
		setResult(eval(count));
		// eslint-disable-next-line
		setCount(eval(count));
	};

	return (
		<div className="App">
			<Box minHeight="calc(100vh - 134px)" padding="1.5rem">
				<Box>
					<Box
						paddingLeft="12px"
						display="flex"
						gap="3rem"
						color="darkred"
						borderRadius="0.5rem"
						backgroundColor="darkgray"
						w="140px"
						position="sticky"
					>
						<Text>{count}</Text>
						<Text>Result:{result}</Text>
					</Box>
					<Numbers Counter={Counter} Clear={Clear} />
					<Expression
						count={count}
						applyExpression={applyExpression}
						Result={Result}
					/>
				</Box>
			</Box>
		</div>
	);
}

export default App;
