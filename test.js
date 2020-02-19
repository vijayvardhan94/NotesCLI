//write a function that prints 'your notes' and export it

const notes = () => {
    console.log("Your note:");
}

const addNote = (title, body) => {

}

// module.exports = notes; - this exports only one function. For it to export multiple functions we have to create
//an object that exports the multiple functions

module.exports = {
    notes: notes,
    addNotes: addNotes
}

//from the above export both the functions are being exported