import { useRouter } from 'next/router';
import Navbar from './../../components/navbar';

export default function Post() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <h2>Post Details</h2>
      <p>Post ID: {router.query.id}</p>
    </div>
  )
}