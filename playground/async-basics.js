console.log('Starting app'); // happens first and added to callstack. runs right away and is removed from callstack

setTimeout(() => { 
    console.log('inside of callback');
}, 2000); // 

setTimeout(() => {
    console.log('2nd set timeout works')
}, 0); // will not get executed right away. gets moved into callback cue and must wait for callstack to be empty before running.

console.log('Finishing up');