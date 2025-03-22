export default function RegularButton({ children, handleClick }) {
    return (
        <button
            onClick={handleClick}
        >
            {children}
        </button>
    )
}