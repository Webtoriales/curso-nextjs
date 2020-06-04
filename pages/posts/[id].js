import { useRouter } from 'next/router';
import Title from '../../components/title';
import Layout from '../../components/layout';

export default function Post() {
  const router = useRouter();

  return (
    <Layout>
      <Title>Post Details</Title>
      <p>Post ID: {router.query.id}</p>
    </Layout>
  )
}