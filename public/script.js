var addButton = $("#addButton");
var completeButton = $("#completeButton");
var deleteButton = $(".deleteButton");
var itemInput = $("#itemInput");
var addEventButton = $("#addEventButton");
var todoListScrollContainer=$("#to-do-list");
var todoContainer = $("#todo-container");
var clickCount = 0;

$("#addButton").on("click", function() {
  // Increment the click count
  clickCount++;

  if (clickCount % 2 === 1) {
    // On odd clicks, show the elements
    $("#itemInput").removeClass("d-none");
    $("#addEventButton").removeClass("d-none");
    todoListScrollContainer.css("max-height", "300px");
    todoContainer.css("max-height", "400px");
  } else {
    // On even clicks, hide the elements
    $("#itemInput").addClass("d-none");
    $("#addEventButton").addClass("d-none");
    todoListScrollContainer.css("max-height", "400px");
    todoContainer.css("max-height", "390px");
  }
});
function toggleLineThrough(paragraph) {
    paragraph.classList.toggle('completed');
  }
    deleteButton.on('click', function() {
      this.previousElementSibling.querySelector('p').addClass("completed");
});