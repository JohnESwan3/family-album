import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'JohnESwan3',
    userImg:
      'https://www.theloadout.com/wp-content/uploads/2022/02/elden-ring-pot-boy-location-1.jpg',
    img: 'https://www.theloadout.com/wp-content/uploads/2022/02/elden-ring-pot-boy-location-1.jpg',
    caption: 'Pot Boy 420',
  },
  {
    id: '456',
    username: 'JohnESwan3',
    userImg:
      'https://www.theloadout.com/wp-content/uploads/2022/02/elden-ring-pot-boy-location-1.jpg',
    img: 'https://www.theloadout.com/wp-content/uploads/2022/02/elden-ring-pot-boy-location-1.jpg',
    caption: 'Pot Boy 420',
  },
]
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  )
}

export default Posts
