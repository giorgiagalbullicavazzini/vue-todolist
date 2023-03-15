'use strict';

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'La mia To Do List',
            toDoList: [
                {
                    text: 'Andare a fare la spesa',
                    done: false,
                }
            ]
        }
    }
}).mount('#app');