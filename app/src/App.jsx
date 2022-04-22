import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Container } from '@mui/material'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import NewPostForm from './components/NewPostForm/NewPostForm'
import PageNotFound from './components/404/404'
import PostDetail from './components/PostDetail/PostDetail'
import PostList from './components/PostsList/PostsList'
import { RequireAuth } from './components/Auth/RequireAuth/RequireAuth'
import SignIn from './components/Auth/SignIn/SignIn'
import SignUp from './components/Auth/SignUp/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="md" className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/posts"
            element={(
              <RequireAuth>
                <PostList />
              </RequireAuth>
)}
          />
          <Route
            path="/posts/:id"
            element={(
              <RequireAuth>
                <PostDetail />
              </RequireAuth>
)}
          />
          <Route
            path="/postform"
            element={(
              <RequireAuth>
                <NewPostForm />
              </RequireAuth>
)}
          />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
