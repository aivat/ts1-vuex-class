<template>
  <li>
    <input class="toggle" type="checkbox" :checked="todo.done" @change="toggleTodo(todo)">
    <label for="">{{ todo.text }}</label>
    <button class="destroy" @click="removeTodo(todo)">Удалить</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Todo',
  props: ['todo'],
  methods: {
    ...mapActions([
        'toggleTodo',
        'removeTodo'
    ])
  }
}
</script>

<style scoped>

li {
  list-style-type: none;
  padding: 5px 0;
}
label {
  padding: 0 5px;
}
</style>
