import { forwardRef } from "react"
import { twMerge } from "tailwind-merge";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className={twMerge(`
                w-full
                bg-green-500
                rounded-full
                text-black
                px-3
                py-3
                border
                border-transparent
                disabled:cursor-not-allowed
                disabled:opacity-50
                hover:opacity-75
                transition
                font-bold
            `,
            className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
}) 

Button.displayName = "Button";

export default Button
