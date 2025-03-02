/* eslint-disable no-unused-vars */
'use client';
import { Input, Tooltip } from '@heroui/react';
import { cn } from '@heroui/theme';
import React, { useState } from 'react';

const InputField = ({
	id,
	className = 'w-full',
	customPlaceholderStyle = 'font-source font-semibold text-[1rem] font-normal text-content2-500',
	type = 'text',
	value = '',
	placeholder = '',
	inputOnChange = () => {},
	error = false,
	disabled = false,
	isRequired = false,
	variant = 'bordered',
	customInputValueStyle = 'font-source text-content2-700',
	inputWrapperClassName = '',
	mainWrapperClassName = `${!disabled && 'bg-background'}`,
	inputDefaultValue = '',
	paddingStyle = '',
	onBlur = () => {},
	onFocus = () => {},
	parentClassName = ''
}) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div className={cn('w-full', parentClassName)}>
			
			<Input
				id={id}
				value={value}
				defaultValue={inputDefaultValue}
				type={type}
				onChange={inputOnChange}
				placeholder={placeholder}
				isRequired={isRequired} 
				variant={variant}
				isDisabled={disabled}
				className={`${className}`}
				classNames={{
					base: 'h-[full] border-none',
					mainWrapper: cn('bg-red-800', mainWrapperClassName),
					input: [
						`${customInputValueStyle}`,
						`${!disabled && 'bg-gray-700 text-white'}`,
						`${error ? 'border-red-500' : customPlaceholderStyle}`
					],
					inputWrapper: cn(
						'border border-gray-600 rounded-lg p-2',
						customInputValueStyle,
						inputWrapperClassName,
						paddingStyle
					)
				}}
				onFocus={() => {
					setIsFocused(true);
					onFocus();
				}}
				onBlur={() => {
					setIsFocused(false);
					onBlur();
				}}
			/>

			{/* Error Message */}
			{/* {error && <p className="text-red-500 text-xs flex flex-col mt-1">This field is required</p>} */}
		</div>
	);
};

export default InputField;
