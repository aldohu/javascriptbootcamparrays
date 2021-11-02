const notes = [
    {
        title:"Note 1",
        body:"I would like to go to Spain"
    },
    {
        title:"Note 2",
        body:"Exercise. Eatiing a bit better"
     },
     { 
         title:"Note 3",
        body:"Get a new seat"
     }
    ];
/*console.log(notes);
console.log(notes.length);
console.log(notes[0]);
console.log(notes[notes.length-1]);
console.log(notes.at(-1));*/
notes.pop();
notes.push("Note 4")
notes.pop();
console.log(notes);


notes.indexOf("Note 2");

const findNotes = function (note, query) {
    return note.filter((e,index)=>{
        const isTitleMatch = e.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = e.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch; 
        })
}

/*
console.log(findNotes(notes, "Note 1"));
//filter doesnt edit original array
const filteredNotes = notes.filter((e,index)=>{
const isTitleMatch = e.title.toLowerCase().includes("ne");
const isBodyMatch = e.body.toLowerCase().includes("ne");
return isTitleMatch || isBodyMatch; 
})*/