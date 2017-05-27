var channelId = [],channelTitle = [],channelThumbnail = [],temp =[];

function designHTML(){
	//document.getElementById('display').innerHTML = '';
	var count=1;
	for(var i=0;i<temp.length;i++){
		$('#display').append('<div id="'+channelId[i]+'"align="center"><img src="'+channelThumbnail[i]+'"/>\
			<a href="https://youtube.com/channel/'+channelId[i]+'" target="_blank"><H3>'+channelTitle[i]+'</H3></a>\
			</div>');
		if(count==3){
			$('#display').append('<br>');
			count=1;
		}
		if(i==temp.length-1){
		$('#display').append('<input id="searchBar" value="Developers@Work"/>\
			<button type="submit" onClick="buttonClicked()">Submit</button>');	
		}
		count++;
	}
}


function searchCode(keyword){
	this.keyword = keyword || 'Developers@Work';
	var Api = youtubeAPI();
	$.get('https://www.googleapis.com/youtube/v3/search',{
			q:this.keyword,
			key:Api,
			type:'channel',
			part:'snippet'
		},function(data){
			temp = data.items;
			for(var i=0;i<temp.length;i++){
				channelId[i] = temp[i].snippet.channelId;
				channelTitle[i] = temp[i].snippet.title;
				channelThumbnail[i] = temp[i].snippet.thumbnails.default.url;
			}
		});
		designHTML();
}

function buttonClicked(){
	var keyword = document.getElementById('searchBar').value;
	searchCode(keyword);
	
}








