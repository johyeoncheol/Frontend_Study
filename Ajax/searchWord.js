$(document).ready(function(){
	$('#word').keyup(function(){ //입력칸에 글자가 입력된 후
	//1. 입력칸의 글자 알아내기
	var val=$("#word").val();
	//2. 비동기 요청
	if(val!=""){
		$.ajax({
			url:'searchWord.jsp',
			data:{
				word:val,
				num:'123'
			},
			success: function(result){//3. 결과오면 화면에 반영
				//['b','bb','bee','bear']
				process(result);
			}
		});
	}else{
		$('#popupPart').hide();
	}
	});
	function process(result){
		//['b','bb','bee','bear']
		var msg="";
		if(result != 'null'){ //검색 결과가 있는 경우
			var re = eval(result);
			var msg="";
			for(var i = 0 ; i < re.length;i++){
				msg += re[i]+"<br>";
			}
			$('#popupPart').html(msg);
			//$('#popupPart').css('display','block');
			$('#popupPart').show(); //hide()
		}else{//검색 결과가 없는 경우			
			$('#popupPart').html("no data");
		}
		
	}
});