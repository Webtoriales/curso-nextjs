import Title from '../../components/title';
import Layout from '../../components/layout';
import Link from 'next/link';

export default function Posts() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const newPosts = await res.json();
      // console.log("newPosts", newPosts);
      setPosts(newPosts);
    }

    fetchPosts();
  }, []);

  console.log('posts', posts);

  return(
    <Layout>
      <Title>Posts Page</Title>
      <div>
        {posts.map(post => {
          return(
            <Link href={`/posts/[id]`} as={`posts/${post.id}`}>
              <a>
                <h3>Post</h3>
                <p>{post.title}</p>
              </a>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}