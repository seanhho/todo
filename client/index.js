numEl = 0

function addUlItem () {
	var appendStr,
	textInputVal = $("#todoInput").val();
	if(numEl % 2 == 0) {
		appendStr = "<li class=\"todo-list-il li-even\">" + textInputVal + "</li>";
	}
	else {
		appendStr = "<li class=\"todo-list-il\">" + textInputVal + "</li>";
	}
	
	$("#todoUl").append(appendStr);
	numEl = numEl +  1;
	return false;
}