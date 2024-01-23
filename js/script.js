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
        }
    },

})
app.mount('#root')