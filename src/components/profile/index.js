import useSWR from 'swr'
import fetcher from '../../utils/swr-helper'

export default function Profile() {

	const { data, error } = useSWR('/api/profile-data', fetcher)

	if (error) return <div>Failed to load</div>
	if (!data) return <div>Loading...</div>

	return (
		<div>
			<h1>{data.name}</h1>
			<p>{data.bio}</p>
		</div>
	)
}