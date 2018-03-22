var word = "space";


for (var i = 0; i < word.length; i++){
	if(word[i] === 'a')
	{
		//console.log(word[i]);
		word[i] = 'o';
		console.log(word[i]);
		break;
	}
	//console.log(word);
	continue;
}

