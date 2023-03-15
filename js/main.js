'use strict';

const { createApp } = Vue;

/////////////
// To Do List
/////////////
const app = createApp({
    data() {
        return {
            // Page title
            title: 'The Boolean Academy To Do List',

            // Completed tasks
            done: 'text-decoration-line-through',

            // Add new task
            newTask: '',

            // List
            toDoList: [
                {
                    text: 'Imparare a utilizzare VueJS',
                    done: true,
                },
                {
                    text: 'Iniziare a studiare il backend',
                    done: false,
                },
                {
                    text: 'Imparare a gestire il lato backend e affinare le abilità relative a quello frontend',
                    done: false,
                },
                {
                    text: 'Realizzare il progetto finale',
                    done: false,
                },
                {
                    text: 'Iniziare il career service',
                    done: false,
                },
                {
                    text: 'Realizzare il primo portfolio',
                    done: false,
                },
                {
                    text: 'Iniziare a lavorare come web developer',
                    done: false,
                }
            ]
        }
    },
    methods: {
        // Remove tasks
        remove(index) {
            this.toDoList.splice(index, 1);
        },

        // Add new tasks
        addTask() {
            if(this.newTask.trim() !== '') {
                const addedTask = {
                    text: this.newTask,
                    done: false,
                }
    
                this.toDoList.push(addedTask);
                this.newTask = '';    
            }
        }
    }
}).mount('#app');