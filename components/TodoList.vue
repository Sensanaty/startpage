<template>
  <div class="todo-wrapper">
    <div class="new-task-wrapper">
      <h1>TODO</h1>
      <input
          autofocus
          @keydown.enter="addTask"
          type="text"
          id="new-task"
          v-model="inputValue"
      />
    </div>

    <div class="list-wrapper">
      <ul>
        <li v-for="(item, index) in items" @dblclick.prevent="removeTask(index)" :key="index">
          {{ item }}
        </li>
      </ul>

      <button v-if="items.length > 0" @click.prevent="removeAllTasks">
        CLEAR
      </button>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@600&display=swap");
.todo-wrapper {
  height: 100%;
}
.todo-wrapper button {
  background: #ee3a47;
  border: none;
  color: #f7cb39;
  font-size: 1.7em;
  font-weight: bolder;
  padding: 9px 12px;
  font-family: "Aeonik", sans-serif;
}

.new-task-wrapper {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.new-task-wrapper h1 {
  margin: 0;
  padding: 0;
  text-align: center;
}
.new-task-wrapper input {
  background: #2f2f2f;
  color: #fdfdfd;
  border: none;
  transition: outline 150ms ease-in-out;
  outline: 2px solid #272727;
  padding: 7px 15px;
  font-size: 1.4em;
  font-weight: bolder;
  width: 70%;
  margin: 5px auto;
}
.new-task-wrapper input:focus {
  outline: 2px solid #ee3a47;
}

.list-wrapper {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 0;
}

ul {
  margin: 25px 0;
  padding: 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
ul li {
  font-family: "Fira Code", monospace;
  font-weight: bold;
  margin: 5px 0;
  padding: 0;
  font-size: 1.7em;
  list-style: none;
  user-select: text;
}
ul li:before {
  content: "›";
}
ul li:after {
  content: "‹";
}
ul li:hover:before {
  content: "»";
}
ul li:hover:after {
  content: "«";
}

/*# sourceMappingURL=style.css.map */

</style>

<script>
export default {
  data() {
    return {
      items: [],
      inputValue: null,
    };
  },
  methods: {
    addTask() {
      if (this.inputValue) {
        this.items.push(this.inputValue);
        this.inputValue = null;
        window.localStorage.setItem("todo-items", JSON.stringify(this.items));
        document.querySelector("#new-task").value = "";
      }
    },
    removeTask(item) {
      const localItems = JSON.parse(window.localStorage.getItem("todo-items"));
      localItems.splice(item, 1);
      window.localStorage.setItem("todo-items", JSON.stringify(localItems));
      this.items.splice(item, 1);
    },
    removeAllTasks() {
      this.items = [];
      window.localStorage.removeItem("todo-items");
    },
  },
  mounted() {
    if (window.localStorage.getItem("todo-items") !== null) {
      const localItems = JSON.parse(window.localStorage.getItem("todo-items"));
      localItems.forEach((item, index) => {
        if (item !== this.items[index]) {
          this.items.push(item);
        }
      });
    }
  },
};
</script>
