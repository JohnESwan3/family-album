import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  DownloadIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import Moment from 'react-moment'

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState(false)

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'asc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  )

  useEffect(
    () =>
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  )

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  )

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      })
    }
  }

  const sendComment = async (e) => {
    e.preventDefault()

    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  return (
    <div className="my-7 rounded-md border border-slate-300 bg-white shadow-md">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt={username}
          className="mr-3 h-12 w-12 rounded-full border object-fill p-1"
        />
        <p className="flex-1 font-bold">{username}</p>
        {/* <DotsHorizontalIcon className="h-5" /> */}
      </div>
      {/* img */}
      <img src={img} className="w-full object-cover" alt="" />

      {/* Buttons */}
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          {hasLiked ? (
            <HeartIconFilled onClick={likePost} className="btn text-sky-500" />
          ) : (
            <HeartIcon onClick={likePost} className="btn" />
          )}
          <ChatIcon className="btn" />
          {/* <DownloadIcon className="btn" /> */}
        </div>
        {/* <BookmarkIcon className="btn" /> */}
      </div>

      {/* Caption */}

      <p className="space-y-4 truncate p-5">
        <span className="mr-1 font-bold">{username} </span> {caption}
        <div className="flex flex-row space-x-4">
          {likes.length == 1 && (
            <p className="mb-1 font-semibold">{likes.length} like</p>
          )}
          {likes.length > 1 && (
            <p className="mb-1 font-semibold">{likes.length} likes</p>
          )}
          {comments.length == 1 && (
            <p className="mb-1 font-semibold">{comments.length} comment</p>
          )}
          {comments.length > 1 && (
            <p className="mb-1 font-semibold">{comments.length} comments</p>
          )}
        </div>
      </p>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="h-20 overflow-y-scroll bg-slate-100 p-3 scrollbar-thin scrollbar-thumb-black">
          {comments.map((comment) => (
            <div key={comment.id} className="mb-3 flex items-center space-x-2">
              <img
                src={comment.data().userImage}
                alt={comment.data().username}
                className="h-7 rounded-full object-fill"
              />
              <p className="flex-1 text-sm">
                <span className="mr-2 font-bold">
                  {comment.data().username}
                </span>
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-sm">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* Input Box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 w-7" />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 border-none outline-none focus:ring-0"
        />
        <button
          type="submit"
          disabled={!comment.trim()}
          onClick={sendComment}
          className="font-semibold text-sky-500"
        >
          Post
        </button>
      </form>
    </div>
  )
}

export default Post
