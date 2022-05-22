import { useRouter } from 'next/router'

// file => /docs/[...params].jsx
// route => /docs/a/b/c

export default function NotePage() {
	const router = useRouter()
	const { params }= router.query
	console.log(params)
	// params === ['a', 'b', 'c']

	return (
		<h1>hello</h1>
	)
}