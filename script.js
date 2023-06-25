function compile() {

    //get value
    var html = document.getElementById("html_code");
    var css = document.getElementById("css_code");
    var js = document.getElementById("js_code");
    var output = document.getElementById("output");

    //output
    output.contentDocument.body.innerHTML = html.value + "<style>" + css.value + "</style>";
    output.contentWindow.eval(js.value);
}

//Change Title Project Function
document.addEventListener("DOMContentLoaded", function() {
    var websiteTitle = document.getElementById("website-title");
    var editTitleInput = document.getElementById("edit-title");
    var buttonTitle = document.getElementById("button-title");

    //button click
    buttonTitle.addEventListener("click", function() {
        websiteTitle.style.display = "none";
        buttonTitle.style.display = "none";
        editTitleInput.style.fontFamily = "'Cabin', sans-serif";
        editTitleInput.style.display = "inline-block";
        editTitleInput.style.paddingLeft = "15px";
        editTitleInput.value = websiteTitle.textContent;
        editTitleInput.focus();
    });

    //finish edit
    editTitleInput.addEventListener("blur", function() {
        editTitleInput.style.display = "none";
        buttonTitle.style.display = "inline-block";
        websiteTitle.style.display = "inline-block";
        websiteTitle.style.paddingLeft = "15px";
        websiteTitle.textContent = editTitleInput.value;

        if(editTitleInput.value == "") {
            websiteTitle.textContent = "Untitled";
        }
    });
});
