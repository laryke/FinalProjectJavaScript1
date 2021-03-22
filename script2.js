"use strict";



(function () {
    var createLink = document.createElement("link");
    createLink.setAttribute("href", "ss_insert.css");
    createLink.setAttribute("rel", "stylesheet");

    document.head.appendChild(createLink);

    var createDiv = document.createElement("div");
    createDiv.setAttribute("class", "container");
    //create the form for the newspaper
    var createForm = document.createElement("form");
    //set the id to newspaper
    createForm.setAttribute("id", "newspaper");

    //create the fieldset
    var createField = document.createElement("fieldset");
    //add the text
    var createH1 = document.createElement("h1");
    var nameNewspaper = document.createTextNode("Sign for newspaper");
    //append the text to the h1
    createField.appendChild(nameNewspaper);

    //create the label for the emailField
    var createLabel = document.createElement("label");
    //its for the text input
    createLabel.setAttribute("for", "emailField");
    var labelText = document.createTextNode("Email: ");
    createLabel.appendChild(labelText);

    //here create the textfield for the email
    var createInputText = document.createElement("input");
    createInputText.setAttribute("name", "emailField");
    createInputText.setAttribute("id", "emailField");
    createInputText.setAttribute("type", "text");
    createInputText.setAttribute("size", "20");
    createInputText.appendChild(createLabel);
    //create a break line to separe the email from the checkboxes
    var br = document.createElement("br");

    var createLabelFRadio = document.createElement("label");
    createLabelFRadio.setAttribute("for", "inputBox");
    var labelForRadio = document.createTextNode("Card: ");

    createLabelFRadio.appendChild(labelForRadio);

    var createLabelForSelect = document.createElement("label");
    createLabelForSelect.setAttribute("for", "selectList");
    var labelTime = document.createTextNode("How many months: ");
    var createSelectList = document.createElement("select");
    createSelectList.setAttribute("name", "selectList");
    createSelectList.setAttribute("id", " selectList");

    createLabelForSelect.appendChild(labelTime);
    createLabelForSelect.appendChild(createSelectList);

    var createSubmitButton = document.createElement("input");
    createSubmitButton.setAttribute("type", "button");
    createSubmitButton.setAttribute("id", "subButton");
    createSubmitButton.setAttribute("value", "Submit");

    //append all the new elements
    createH1.appendChild(nameNewspaper);
    createField.appendChild(createH1);
    createField.appendChild(createLabel);
    createField.appendChild(createInputText);
    createField.appendChild(br);
    createField.appendChild(createLabelFRadio);


    createForm.appendChild(createField);
    createForm.appendChild(createSubmitButton);
    createDiv.appendChild(createForm);

    //get the lastParagraph and append the div  to it
    var getLastParagraph = document.getElementById("3");
    getLastParagraph.appendChild(createDiv);


    //create the radioBoxes using a for loop
    for (var i = 0; i < 4; i++) {
        var createBox = document.createElement("input");
        createBox.setAttribute("name", "inputBox");
        createBox.setAttribute("type", "radio");

        var createImg = document.createElement("img");
        createImg.setAttribute("class", "size");
        createImg.setAttribute("src", "/images/bank" + i + ".PNG");
        createField.appendChild(createBox);
        createField.appendChild(createImg);
    }

    for (var i = 0; i < 10; i++) {
        var createOption = document.createElement("option");
        createOption.setAttribute("value", i);
        createOption.setAttribute("id", "option");
        createOption.innerText = i + " Months";
        createSelectList.appendChild(createOption);
    }

    createField.appendChild(document.createElement("br"));
    createField.appendChild(createLabelForSelect);

    //add the container css style to the div which was created before
    document.querySelector("div").classList.add("container");


    document.getElementById("subButton").addEventListener("dblclick", function () {
        var removeNews = document.getElementById("newspaper");
        while (removeNews.firstChild) {
            removeNews.removeChild(removeNews.firstChild);

        }
        alert("You'll receive an email with instructions how to pay at the specified bank");
       
    });


})
    ();

  