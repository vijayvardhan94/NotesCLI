
const fs = require('fs');
const chalk = require('chalk');
const notes = () => {
    console.log("Your note:");
}

const addNotes = (title, body) => {
    const notes = loadNotes(); //when you add a note you also want it to show the exisitng notes
    //code for detecting duplicate notes 
    //checks each object for title and body and checks if it already exits and return either true or false
    //if true, it will keep the duplicate note in the duplicate note array
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })
    debugger;
    if (duplicateNotes.length === 0){
    
    notes.push({
        title: title,
        body: body

    })
    // console.log(notes);  

    saveNotes(notes);
    console.log(chalk.green.inverse('New note added'));
   

        
    }
    else {
        console.log(chalk.red.inverse('This note title has already been used'));

    }



}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}





const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json'); //read the json data
        const dataJSON = dataBuffer.toString(); //converting it into stringified json
        return JSON.parse(dataJSON); 

    }

    catch (e) {
            return [];
    }
  
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const notestoKeep = notes.filter(function(notes){
        return notes.title != title;
    
    })
        if(notes.length > notestoKeep){
            console.log(chalk.bgGreen.inverse('notes removed!'));  
            saveNotes(notestoKeep);
        }
        else {
            console.log(chalk.bgRed.inverse('No Note found'));
        }
       
    

}

const listNotes = () => {  //list notes doesnt need any arguments
    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes'));
    notes.forEach((note) =>{
        console.log(note.title);
    })
        
    
}

const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }
    else{
        console.log(chalk.inverse('Theres no note with this name!'));
    }
}

// module.exports = notes; - this exports only one function. For it to export multiple functions we have to create
//an object that exports the multiple functions

module.exports = {
    notes: notes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}

//from the above export both the functions are being exported