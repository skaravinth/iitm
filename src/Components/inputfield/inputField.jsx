'use client';
import { Question } from '@exa/ui/assets';
import { Input, Tooltip } from '@heroui/react';
import { cn } from '@heroui/theme';
import React, { useState } from 'react';

const InputField = ({
	id,
	className = 'w-full',
	customPlaceholderStyle = 'font-source font-semibold text-[1rem] font-normal text-content2-500',
	customErrorStyle = 'font-source text-[0.875rem] text-danger-200 font-normal mt-1 ml-1',
	type,
	value,
	onKeyClickEnter,
	placeholder = '',
	inputOnChange = () => {},
	startContent,
	endContent,
	error = false,
	disabled = false,
	isRequired = false,
	errorMessage = '',
	label = '',
	customHeight = '',
	labelPlacement = 'inside',
	customLabelStyle = '',
	variant = 'bordered',
	customBackgroundColor,
	customInputValueStyle = 'font-source text-content2-700',
	inputWrapperClassName,
	mainWrapperClassName = `${!disabled && 'bg-background'}`,
	inputDefaultValue,
	paddingStyle,
	showLabelIcon = false,
	tooltipContent,
	onBlur = () => {},
	onFocus = () => {},
	parentClassName = ''
}) => {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div className={cn('w-full', parentClassName)}>
			{/* Input field */}
			{label && (
				<label
					htmlFor={id}
					aria-label='A label'
					className={`inline-block font-source text-body3 font-regular text-content2-600 ${customLabelStyle} mb-[6px] flex flex-row items-center gap-1`}
				>
					<div className={`flex ${showLabelIcon ? 'gap-2' : 'gap-1'} items-center mb-[3px]`}>
						{label} {isRequired && <span className='text-danger-100'>*</span>}
						{showLabelIcon && (
							<div>
								<Tooltip
									content={
										<div>
											<p className='font-regular text-body4 p-2 leading-5 font-source'>
												{tooltipContent}
											</p>
										</div>
									}
									placement='right'
									showArrow={true}
									color='foreground'
								>
									<span className='cursor-pointer hover:text-content2-500'>
										<Question />
									</span>
								</Tooltip>
							</div>
						)}
					</div>
				</label>
			)}
			<Input
				value={value}
				defaultValue={inputDefaultValue}
				type={type}
				onChange={inputOnChange}
				labelPlacement={labelPlacement}
				placeholder={placeholder}
				isRequired={isRequired}
				startContent={startContent}
				endContent={endContent}
				variant={variant}
				isDisabled={disabled}
				className={`${className}`}
				classNames={{
					base: 'h-[full] border-none',
					mainWrapper: cn('bg-background', customBackgroundColor, mainWrapperClassName),
					label: 'text-body3 font-source font-regular text-content2-600',
					input: [
						`${customInputValueStyle}`,
						`${!disabled && 'bg-background'}`,
						`${error ? 'placeholder:text-danger-200' : customPlaceholderStyle}`
					],
					inputWrapper: cn(
						'border border-content2-200 data-[hover=true]:border-content2-200',
						'outline-none rounded-[0.5rem]',
						customHeight,
						'shadow-none',
						`${paddingStyle}`,
						`${disabled && 'bg-content2-100'}`,
						`${!disabled && 'bg-background'}`,
						inputWrapperClassName,
						error
							? '!border-danger-200 data-[hover=true]:!border-danger-200 group-data-[focus=true]:!border-danger-200'
							: isFocused
							? '!border-primary-100 data-[hover=true]:!border-primary-100 group-data-[focus=true]:!border-primary-100'
							: ''
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
				onKeyDown={onKeyClickEnter}
				id={id}
			/>
			{error && errorMessage && <p className={`${customErrorStyle}`}>{errorMessage}</p>}
		</div>
	);
};

export default InputField;
