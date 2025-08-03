import './style.css';
import { App } from './todos/app';
import todoStore from '../src/store/todo.store';

todoStore.initStore();

App('#app');
