

function openModal(){
	
	var modalAddForm = document.getElementById('addForm');
	showBlock(modalAddForm);
}

function closeModal(){
	
	var modalAddForm = document.getElementById('addForm');

	hide(modalAddForm);
}

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
//span.onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	var modalAddForm = document.getElementById('addForm');
    if (event.target == modalAddForm) {
        hide(modalAddForm); // closeModal();
    }
}

function hide(element){
	element.style.display = "none";
}

function showBlock(element){
	element.style.display = "block";	
}