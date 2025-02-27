import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form, Input, notification } from 'antd';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// Компонент для отображения всех постов
const PostList = ({ posts, onDelete }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Button onClick={() => onDelete(post.id)} type="danger">
            Удалить
          </Button>
        </div>
      ))}
    </div>
  );
};

// Компонент для добавления нового поста
const AddPostForm = ({ onAdd }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post('https://dummyjson.com/posts/add', data)
      .then(() => {
        toast.success('Пост добавлен!');
        onAdd();
        reset();
      })
      .catch(() => {
        toast.error('Ошибка при добавлении поста');
      });
  };

  return (
    <Form onSubmitCapture={handleSubmit(onSubmit)}>
      <Form.Item label="Заголовок">
        <Input {...register('title', { required: 'Заголовок обязателен' })} />
      </Form.Item>
      <Form.Item label="Контент">
        <Input.TextArea {...register('body', { required: 'Контент обязателен' })} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Добавить пост
      </Button>
    </Form>
  );
};

// Главный компонент приложения
const App = () => {
  const [posts, setPosts] = useState([]);

  // Получаем посты при монтировании компонента
  useEffect(() => {
    axios
      .get('https://dummyjson.com/posts')
      .then(response => setPosts(response.data.posts))
      .catch(error => toast.error('Ошибка при загрузке постов'));
  }, []);

  // Функция для добавления нового поста
  const fetchPosts = () => {
    axios
      .get('https://dummyjson.com/posts')
      .then(response => setPosts(response.data.posts))
      .catch(error => toast.error('Ошибка при загрузке постов'));
  };

  // Функция для удаления поста
  const handleDelete = (id) => {
    axios
      .delete(`https://dummyjson.com/posts/${id}`)
      .then(() => {
        toast.success('Пост удален!');
        fetchPosts();
      })
      .catch(() => {
        toast.error('Ошибка при удалении поста');
      });
  };

  return (
    <div className="App">
      <h1>Новости</h1>
      <AddPostForm onAdd={fetchPosts} />
      <PostList posts={posts} onDelete={handleDelete} />
      <ToastContainer />
    </div>
  );
};

export default App;
