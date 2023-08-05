import { Box, Button } from '@chakra-ui/react';

const Expression = (props) => {
	const { count } = props;
	const { Result, applyExpression = Function.prototype } = props;
	return (
		<Box display="flex" flexWrap="wrap" w="10%" justifyContent="center">
			<Button
				padding="20px"
				count={count}
				expression={'+'}
                onClick={applyExpression}
			>
				+
			</Button>
			<Button
				padding="20px"
				count={count}
				expression={'-'}
                onClick={applyExpression}
			>
				-
			</Button>
			<Button
				padding="20px"
				count={count}
				expression={'*'}
                onClick={applyExpression}
			>
				*
			</Button>
			<Button
				padding="20px"
				count={count}
				expression={'/'}
                onClick={applyExpression}
			>
				/
            </Button>
            <Button
				padding="20px"
				count={count}
				expression={'='}
                onClick={Result}
			>
				=
            </Button>
		</Box>
	);
};

export { Expression };
