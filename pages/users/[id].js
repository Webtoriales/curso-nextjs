import { useRouter } from 'next/router';
import Navbar from './../../components/navbar';

export default function user1() {
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <h2>User Details</h2>
      <p>User ID: {router.query.id}</p>
    </div>
  )
}

