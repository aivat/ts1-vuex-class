<template>
  <div id="app">
    <header class="header">
      <h3>Todos</h3>
      <input autofocus autocomplete="off" placeholder="Добавьте новый элемент" @keyup.enter="addTodoSet">    
    </header>
    <main>
      <ul>
        <TodoItem v-for="(todo, index) in filteredTodosGet" :key="index" :todo="todo"/> 
      </ul>
      <button @click="done = !done">{{ done ? 'Посмотреть новые' : 'Посмотреть исполненные' }}</button>  
      <ul>
        <TodoItem v-for="(todo, index) in filteredTodosGetSecond" :key="index" :todo="todo"/> 
      </ul>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Mutation, Action } from 'vuex-class'
import TodoItem from '@/components/TodoItem.vue'
import { ITodo, ITodoGetter, IAddTodoAction } from './types'

@Component({
  components: {TodoItem} 
})
export default class App extends Vue {
  done: boolean = false

  @Action addTodo!: IAddTodoAction
  @Getter filteredTodos!: ITodoGetter

  get filteredTodosGet() {
    return this.filteredTodos(this.done)
  }
  get filteredTodosGetSecond() {
    return this.$store.getters.filteredTodos(this.done)
  }
  addTodoSet (e:any) {
    const text = e.target.value
    if (text.trim()) {
      this.addTodo(text)
    }
    e.target.value = ''
  }
}
</script>

<style>

</style>
