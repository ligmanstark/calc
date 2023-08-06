import { Box, Button } from '@chakra-ui/react';

const Numbers = (props) => {
	const { Counter, Clear = Function.prototype } = props;
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const showNum = numbers.map((number) => {
		return (
			<Button
				key={number}
				value={number}
				onClick={Counter}
				onChange={(event) => {
					console.log(event.target);
				}}
			>
				{number}
			</Button>
		);
	});

	return (
		<Box display="flex" flexWrap="wrap" justifyContent="center">
			{showNum}
			<Box padding="20px">
				<Button padding="20px" onClick={Clear}>
					CLEAR
				</Button>
			</Box>
		</Box>
	);
};

export { Numbers };
