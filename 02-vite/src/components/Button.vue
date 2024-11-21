<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  background-color: lightgray;
  cursor: pointer;
  border: 0;
  padding: 5px 10px;
  margin-bottom: 10px;
}

button:hover {
  background-color: gray;
}
</style>
