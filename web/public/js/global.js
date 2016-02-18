var userListData = [];
$(document).ready(function(){
	populateTable();
});

function populateTable(){
	var tableContent = ''
	$.getJSON('scripts/oracle',function(data){
		$.each(data,function(){
			tableContent += '<tr>';
			tableContent += '<td>HOLA</td>';
			tableContent += '<td>HOLA</td>';
			tableContent += '<td>HOLA</td>';
		});
		$('userList table tbody').html(tableContent);    
	});
}

