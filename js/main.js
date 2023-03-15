'use strict';

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'The Boolean Academy To Do List',
            done: 'text-decoration-line-through',
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
    }
}).mount('#app');