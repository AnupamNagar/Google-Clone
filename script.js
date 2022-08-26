const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keydown" , function(event){
    if(event.code === "Enter"){
        search();
    }
});

function search(){
    const input = searchInput.value ;
    window.location.href = "https://www.google.com/search?q="+ input+ "&sxsrf=ALiCzsbxrBZOCupfNQ5TFz32OXf6FU5JZQ%3A1661528208985&ei=kOgIY7fjO5HMmAWz0IbgCg&ved=0ahUKEwi367j16uT5AhURJqYKHTOoAawQ4dUDCA4&uact=5&oq="+ input + "&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyCgguELEDENQCEEMyBAgAEEMyBAgAEEMyCgguEMcBENEDEEMyBAguEEMyCgguELEDENQCEEMyCgguELEDENQCEEMyCgguELEDENQCEEMyCggAELEDEIMBEEM6BwgjEOoCECc6BwguEOoCECc6BAgjECc6CwgAELEDEIMBEJECOggIABCRAhCLAzoOCAAQgAQQsQMQgwEQiwM6CwgAEIAEELEDEIsDOhEILhCABBCxAxCDARDUAhCLAzoNCAAQsQMQgwEQChCLAzoHCC4Q1AIQQzoQCAAQgAQQhwIQsQMQgwEQFDoKCC4QsQMQgwEQQ0oECEEYAEoECEYYAFCqCliJEGCTFGgBcAF4AIABwgOIAYYTkgEFMy0xLjWYAQCgAQGwAQq4AQLAAQE&sclient=gws-wiz"
}