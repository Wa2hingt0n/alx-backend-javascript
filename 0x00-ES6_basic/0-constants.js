export function taskfirst() {
    const task = 'I prefer const when I can.';
    return task;
}

export function getlast() {
    return ' is okay';
}

export function tasklast() {
    let combination = 'But sometimes let';
    combination += getlast();

    return combination;
}
