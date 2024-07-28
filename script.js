function removeDuplicates() {
    const input = document.getElementById('inputArray').value;
    const array = input.split(',').map(Number);
    const uniqueArray = [...new Set(array)];
    document.getElementById('output').innerText = `Unique values: ${uniqueArray}`;
}
