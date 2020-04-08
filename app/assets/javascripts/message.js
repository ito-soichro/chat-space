$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
                `<div class="main_chat__message__position1">
                    <div class="main_chat__message__position1__user1">
                      <div class="main_chat__message__position1__user1__name">
                        ${message.user_name}
                      </div>
                      <div class="main_chat__message__position1__user1__date">
                        ${message.created_at}
                      </div>
                   </div>
                   <div class="main_chat__message__position1__text1">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                  </div>
                </div>`
       return html;
     } else {
       var html = 
                 `<div class="main_chat__message__position1">
                    <div class="main_chat__message__position1__user1">
                      <div class="main_chat__message__position1__user1__name">
                        ${message.user_name}
                      </div>
                      <div class="main_chat__message__position1__user1__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <div class="main_chat__message__position1__text1">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                    </div>
                 </div>`              
       return html;
     };
   }
  $('#new_message').on('submit', function(e){
    e.preventDefault() 
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,  
      type: "POST", 
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
  });
});
