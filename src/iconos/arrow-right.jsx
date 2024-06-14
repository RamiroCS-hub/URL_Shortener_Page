export function ArrowRight({ clases, dimentions }) {
	return (
        <svg
        className={clases}
        xmlns="http://www.w3.org/2000/svg"
        width={dimentions}
        height={dimentions}
        viewBox="0 0 256 256"
    >
        <path
            fill="currentColor"
            d="M48 80v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0m24-8a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8m165.66 50.34l-96-96A8 8 0 0 0 128 32v40h-24a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h24v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32"
        />
    </svg>
	);
}
