import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShowTodoList } from './components/showTodoList';
import { CreateTodo } from './components/createTodo';
import './App.scss';

function App() {
  return (
    <div className="app-contents">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={<ShowTodoList />} />
          <Route path="/create-todo" component={<CreateTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
