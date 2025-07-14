// const { createElement } = require("react");

const search = document.getElementById('input');

const btn = document.getElementById('btn');

const result = document.getElementById('list-style');


// for to add li and span into li
function task () {
    if(search.value ===''){
        alert('Please enter something !')
    }else{
        let li = document.createElement('li'); //append li
        li.innerHTML = search.value;
        result.appendChild(li)
        
        let span = document.createElement('span'); // append span
        span.innerHTML = 'Delete'
        li.appendChild(span)
        
        save(); // for the save data
    }
    search.value = '';
}

// for the button click
btn.addEventListener('click',task);

// for the result clik
result.addEventListener('click', (e) =>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("ck");
        save();
    }else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        save();
    }
})

// for the save data
function save () {
    localStorage.setItem('data',result.innerHTML);
}

// for the get data form localStorage
function get () {
    result.innerHTML = localStorage.getItem('data');
}
get();
