'use client';
import React from 'react';
import { Button, cn } from '@heroui/react';

const ButtonComponent = ({
  id,
  handleOnClick = () => false,
  buttonText = 'Sync from HRMS',
  buttonIcon = '',
  iconClassName = '',
  radius,
	backGroundColor,
  textClassName = '',
  isIcon = true,
  baseClassName = '',
  bgColor,
  ButtonVariant = 'light',

  type,
  ...rest
}) => {
  return (
    <Button
      className={cn(
        'border border-content2-200 rounded-[0.37rem] gap-1 h-[2.5rem] w-[10rem] transition-colors ',
        bgColor
          ? `${bgColor} hover:!${bgColor} data-[hover=true]:!${bgColor}`
          : 'bg-background hover:!bg-background data-[hover=true]:!bg-background',
        baseClassName,
      )}
      size="sm"
      radius={radius}
      variant={ButtonVariant}
      onClick={handleOnClick}
      type={type}
      id={`${id}-button`}
      {...rest}
    >
      {isIcon && (
        <div className={cn('flex items-center justify-center', iconClassName)}>
          {buttonIcon}
        </div>
      )}
      <p className={cn('text-[0.875rem] font-source font-semibold text-content2-600', textClassName)}>
        {buttonText}
      </p>
    </Button>
  );
};

export default ButtonComponent;
