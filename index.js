$( function(){
  $('h1').on('click', function(){
    alert("Hi...")
  })

  $('input#note-title').on('change', function(){
    console.log('changed!!!')
  })

  $('form#new-todo').on('submit', function(event){
    event.preventDefault()
    const $input = $('form').children().first()
    // Now let's make a request to the database to save that new note
    const todo = $input.val()
    const button = "<button id='delete'>delete</button>"
    const listItem = `<li class="list-item">${todo} ${button}</li>`
    $('ul#notes').prepend(listItem)

    $input.val('')
    const $delete = $('#delete')
    $delete.click(function(){
      // delete this element
      this.parentNode.remove()
    });
   })

})// end document

// be able to delete notes
// append a button
// associate button with list item
