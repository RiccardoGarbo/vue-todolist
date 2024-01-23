const { createApp } = Vue
const app = createApp({
    data() {
        return {
            listItems

        }
    },
    methods: {
        deleteItem(id) {
            this.listItems = this.listItems.filter(listItem => id !== listItem.id)

        }
    }
})
app.mount('#root')