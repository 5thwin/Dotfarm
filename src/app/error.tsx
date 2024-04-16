'use client'; // -> error component는 client component여아함

import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<h2>Something went wrong!</h2>
			<button
				onClick={
					// 재시도
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	);
}
