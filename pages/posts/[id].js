import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();

  return (
    <div>
      <h2>Post Details</h2>
      <p>Post ID: {router.query.id}</p>
    </div>
  )
}