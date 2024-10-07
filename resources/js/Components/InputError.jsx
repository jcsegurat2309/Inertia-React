export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p
            {...props}
            className={'text-sm text-red-600 dark:text-red-400 my-2 ' + className}
        >
            {message}
        </p>
    ) : null;
}
