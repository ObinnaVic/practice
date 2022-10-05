const btn = document.querySelectorAll('.icon');
let question = document.querySelectorAll('.textsection');

btn.forEach(function(event) {
    event.addEventListener('click', function(e) {
       let getParent = e.currentTarget.parentElement.parentElement;
       question.forEach(function(item) {
        if (item !== getParent) {
            item.classList.remove('showtext');
        }
       getParent.classList.toggle('showtext');
       
    })
       
    })
})


