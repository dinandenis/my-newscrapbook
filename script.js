let buttonSubmit = document.getElementById("buttonSubmit");
        let buttonClear = document.getElementById("buttonClear");
        let commentBoxInput = document.getElementById("commentBoxInput");
        let exampleText = "";
        buttonClear.addEventListener('click', function() {commentBoxInput.value = exampleText;},false);
        buttonSubmit.addEventListener('click', function() {alert(commentBoxInput.value);},false);