import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from '@/utils/utils';

const ScrollArea = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<ScrollAreaPrimitive.Root
		ref={ref}
		className={cn('relative w-full overflow-hidden', className)}
		{...props}
	>
		<ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
			{children}
		</ScrollAreaPrimitive.Viewport>
		<ScrollBar />
		<ScrollAreaPrimitive.Corner />
	</ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
	React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
	<ScrollAreaPrimitive.ScrollAreaScrollbar
		ref={ref}
		orientation={orientation}
		className={cn(
			'bg-transparent flex touch-none select-none',
			// ScrollArea의 Scroll 표시
			// orientation === 'vertical' && 'border-l-transparent h-full w-2.5 border-l p-[1px]',
			// orientation === 'horizontal' && 'border-t-transparent h-2.5 flex-col border-t p-[1px]',
			className,
		)}
		{...props}
	>
		<ScrollAreaPrimitive.ScrollAreaThumb className="bg-slate-200 dark:bg-slate-800 relative flex-1 rounded-full" />
	</ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
