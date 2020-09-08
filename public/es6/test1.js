'use strict';

const sentences = [
    { subject: 'Java', verb: 'is', object: 'great' },
    { subject: 'Bublicks', verb: 'are', object: 'large' },
];

function say({ subject, verb, object }) {
    console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences) {
    say(s);
}