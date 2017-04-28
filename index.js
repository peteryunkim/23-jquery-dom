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
    const listItem = `<li>${todo}</li>`
    $('ul#notes').prepend(listItem)

    $input.val('')
   })
})
