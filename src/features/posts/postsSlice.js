import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // postAdded(state, action) {
    //   state.push(action.payload)
    // }, 这样写具体对状态的操作逻辑分散在各个组件中 需要内聚道状态管理

    postAdded: {
        reducer(state, action) {
            state.push(action.payload)
        },
        prepare (title,content,userId) {
            // 利用 prepare 高内聚具体的数据加工步骤
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    user: userId

                }
            }
        }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, postUpdated } = postsSlice.actions
export default postsSlice.reducer
