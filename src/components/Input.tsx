interface Props {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: Props) => {
	return (
		<input
			type="text"
			name="character"
			value={value}
			onChange={onChange}
			placeholder="Character Search"
			className="border-0 bg-transparent focus:border-0 focus:outline-none w-full"
		/>
	);
};

export default Input;
