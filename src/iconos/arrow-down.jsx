export function ArrowDown({ clases, dimentions }) {
	return (
		// <svg
		// 	xmlns="http://www.w3.org/2000/svg"
		// 	width="65"
		// 	height="65"
		// 	className={clases}
		// 	viewBox="0 0 24 24"
		// >
		// 	<g fill="none" fillRule="evenodd">
		// 		<path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
		// 		<path
		// 			fill="#000000"
		// 			d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414m0 6a1 1 0 0 1 1.414 0L12 16.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414"
		// 		/>
		// 	</g>
		// </svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={dimentions}
			height={dimentions}
			viewBox="0 0 24 24"
            className={clases}
		>
			<path
				fill="#252525"
				fillRule="evenodd"
				d="M21.047 1.987c.654.685.94 1.768.473 2.816l-7.363 16.51a2.338 2.338 0 0 1-4.315 0L2.48 4.802a2.546 2.546 0 0 1 .473-2.816c.659-.69 1.735-1.009 2.767-.458l-.353.662l.353-.662l5.904 3.152l-.354.662l.354-.662a.789.789 0 0 0 .752 0l5.904-3.15l.353.662l-.353-.662c1.032-.55 2.108-.232 2.767.458m-2.06.865l-.351-.656zl-5.904 3.153a2.289 2.289 0 0 1-2.165 0L5.014 2.852c-.356-.19-.715-.103-.976.171c-.268.28-.388.72-.188 1.169l7.362 16.51c.326.73 1.25.73 1.575 0l7.363-16.51c.2-.448.08-.889-.188-1.169c-.262-.274-.62-.36-.976-.17"
				clipRule="evenodd"
			/>
		</svg>
	);
}