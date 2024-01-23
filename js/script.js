const { createApp } = Vue
const app = createApp({
    data() {
        return {
            listItems,
            newListItem: { id: 4, done: false, text: '' }

        }
    },
    methods: {
        //funzione per cantellare un item
        deleteItem(id) {
            this.listItems = this.listItems.filter(listItem => id !== listItem.id)
        },
        //funzione per aggiungere un item
        addListItem() {
            this.listItems.push(this.newListItem)
        },
        //funzione per invertire true e false
        reverseValue(id) {
            this.listItems.forEach(listItem => {
                if (id === listItem.id) {
                    listItem.done = !listItem.done
                }
            });
        }
    },

})
app.mount('#root')