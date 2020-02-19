const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

// const result = notesApp();

// console.log(chalk.green(result));
//console.log(process.argv);


//command = (process.argv[2]);
// if (command === 'add'){
//     console.log('Adding a note');
// }
// else if(command === 'remove'){
//     console.log('removing your note');
// }

//changing yargs version 
yargs.version('1.1.0');


//notes app operations - add, remove/delete, list, view/read
//using yargs.command we are registering a new command such as add, remove and so on. 
//this can be verfiied by 
yargs.command({
    command: 'add',
    describe: 'Creating a new note',
    builder:{
        title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'

        },
        body: { 
            describe: 'Body of the note',
            demandOption: true, //means its a required field or option
            type: 'string'
        }
    },
    handler: function(argv){
        // console.log('Title: ' +  argv.title);
        // console.log('Body: ' + argv.body);
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing the note',
    builder: {
        title: {
             describe: 'note title',
             demandOption: true,
             type: 'string'
        }
    },
    handler: function(argv){
       // console.log('Deleting the note');
       notes.removeNotes(argv.title);
    }
})

// we now add two more commands to list and read the notes
yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler: function(){
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'reading a specific note',
    builder:{
        title:{
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.readNotes(argv.title);
    }
})
//console.log(yargs.argv);
yargs.parse();




