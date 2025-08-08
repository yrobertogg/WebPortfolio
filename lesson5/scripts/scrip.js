const input = document.querySelector('#favCha');
const button = document.getElementsByTagName('button');
const list = document.querySelector('#list');

button[0].addEventListener('click', function(){
    const inputValue = input.value;
    input.value = '';

    const liElement = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    const spanElement = document.createElement('span');

    liElement.append(spanElement);
    spanElement.textContent = inputValue;
    liElement.append(deleteButton);
    deleteButton.textContent = '❌';
    deleteButton.ariaLabel = `Remove ${inputValue} chapter.`;
    console.log(deleteButton.ariaLabel);
    list.append(liElement);

    deleteButton.addEventListener('click', () => {
        list.removeChild(liElement);
    });
    input.focus();
});