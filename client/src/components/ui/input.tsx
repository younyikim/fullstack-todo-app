import * as React from 'react';

import { cn } from '@/utils/utils';
import { VariantProps, cva } from 'class-variance-authority';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof InputVariants> {}

const InputVariants = cva(
	'border-primary bg-background ring-offset-white file:bg-transparent placeholder:text-slate-500 focus-visible:ring-slate-950 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 flex rounded-md border px-3 py-2 text-sm file:border-0 file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'w-full h-16 text-lg',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, variant, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(InputVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = 'Input';

export { Input };
