/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

// file => /docs/[id].jsx
// route => /docs/a/b/c

export default function NotePage({note}) {
	// const router = useRouter()
	// const {id} = router.query
	// console.log(id)
	// params === ['a', 'b', 'c']

	return (
		<>
			<div sx={{variant: 'containers.page'}}>
				<h1>Note: {note.title} </h1>
			</div>
		</>

	)
}


export async function getServerSideProps({params, req, res}) {
	const response = await fetch(`https://localhost:3000/api/note/${params.id}`)
	if (!response.ok) {
		res.writeHead(302, {
			Location:'/notes'
		})
		res.end()

		return {
			props: {}
		}
	}
	const {data} = await response.json()

	return {
		props: {note: data}
	}
}