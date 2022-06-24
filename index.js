// all nav-bar option items
var items = document.getElementsByTagName('li');
var projects = document.getElementsByClassName('project_tile');
var closeButton = document.getElementsByClassName('closeButton');

var current_page = 0;

navItemClickListener(current_page);
// projectsClickListener(0);

setUpEventListeners();

function setUpEventListeners(){
	// Navbar items Click listener
	items[0].addEventListener('click', function(){ navItemClickListener(0) });
	items[1].addEventListener('click', function(){ navItemClickListener(1) });
	items[2].addEventListener('click', function(){ navItemClickListener(2) });
	items[3].addEventListener('click', function(){ navItemClickListener(3) });

	// Projects Sub-section Click listener
	projects[0].addEventListener('click', function(){ projectsClickListener(0) });
	projects[1].addEventListener('click', function(){ projectsClickListener(1) });
	projects[2].addEventListener('click', function(){ projectsClickListener(2) });

	// Projects Sub-section close listener
	closeButton[0].addEventListener('click', function(){ 
		navItemClickListener(2);
		var parent = document.getElementsByClassName('experience_container')[1];
		var childArr = parent.getElementsByClassName('experience_board');

		for(var i = 0; i <childArr.length; i++){
			parent.removeChild(childArr[i]);
		}
	});

	//Navbar items interaction listener
	items[0].addEventListener('mouseover', function(){ navItemEnterListener(0) });
	items[1].addEventListener('mouseover', function(){ navItemEnterListener(1) });
	items[2].addEventListener('mouseover', function(){ navItemEnterListener(2) });
	items[3].addEventListener('mouseover', function(){ navItemEnterListener(3) });

	items[0].addEventListener('mouseleave', function(){ navItemExitListener(0) });
	items[1].addEventListener('mouseleave', function(){ navItemExitListener(1) });
	items[2].addEventListener('mouseleave', function(){ navItemExitListener(2) });
	items[3].addEventListener('mouseleave', function(){ navItemExitListener(3) });

	document.addEventListener('wheel', (e) => {
		if(current_page == 1 || current_page == 2){
			let ele = document.getElementsByClassName('experience_container')[current_page-1];
			var boards = ele.getElementsByClassName('experience_board');
			if(e.deltaY > 0){
				// console.log("moved up");
				for(var i= 0; i<boards.length; i++){
					var left = boards[i].style.left;
					left = parseInt(left.substring(0, left.length-1));
					
					boards[i].style.left = left-1+"%";
				}
			}
			else{
				// console.log("moved down");	
				for(var i= 0; i<boards.length; i++){
					var left = boards[i].style.left;
					left = parseInt(left.substring(0, left.length-1));
					
					boards[i].style.left = left+1+"%";
				}
			}
		}
	});
}

function populateBoards(element, boards_data){
	var firstLeft = 10;
	element.textContent = '';

	for (var i = 0; i < boards_data.length; i++) {
		//create board.
		var board = document.createElement('div');
		board.className = 'experience_board';
		board.style.left = firstLeft.toString()+'%';
		board.style.top = '7%';
		// add Title
		var title = document.createElement('span');
		title.className = 'experience_title';
		title.innerHTML = boards_data[i].getTitle();
		board.appendChild(title);
		// add date
		var dateText = document.createElement('span');
		dateText.className = 'experience_date';
		dateText.innerHTML = boards_data[i].getDate();
		board.appendChild(dateText);
		// add description
		var desc = document.createElement('span');
		desc.className = 'experience_description';
		desc.innerHTML = boards_data[i].getDesc();
		board.appendChild(desc);
		// append the whole card
		element.appendChild(board);
		//increase left offset;
		firstLeft += 35;
	}
}

function projectsClickListener(index){
	document.getElementsByClassName('lines')[0].style.transform = "rotateZ(0deg)";
	document.getElementsByClassName('lines')[1].style.transform = "rotateZ(0deg)";
	document.getElementsByClassName('lines')[2].style.transform = "rotateZ(0deg)";
	setTimeout(function(){
		document.getElementsByClassName('projects_container')[0].style.display = "none";
		alterAvtar(20, 10, 200, 200);
		document.getElementsByClassName('selected_pro')[0].style.display = "block";
		document.getElementsByClassName('selected_pro')[0].innerHTML = projects[index].innerHTML;
		setTimeout(function(){
			document.getElementsByClassName('experience_container')[1].style.display = "block";
			document.getElementsByClassName('experience_container')[1].style.animation = "mymove 0.75s 1";
			document.getElementsByClassName('experience_container')[1].style.animationPlayState = "initial";
			var el = document.getElementsByClassName('experience_container')[1];
			populateBoards(el, getData(1,index));
		}, 2000);
	}, 1800);
}

function navItemClickListener(index){
	items[current_page].getElementsByTagName('div')[0].style.width = "0%";
	items[index].getElementsByTagName('div')[0].style.width = "100%";
	current_page = index;

	changePageContent(current_page);
}

function navItemEnterListener(index){
	items[index].getElementsByTagName('div')[0].style.width = "100%";
}

function navItemExitListener(index){
	if (current_page != index) {
		items[index].getElementsByTagName('div')[0].style.width = "0%";
	}
}

function initialPageSetup(){
	document.getElementsByClassName('avtar')[0].style.display = "none";
	document.getElementsByClassName('about_text')[0].style.display = "none";
	document.getElementsByClassName('contact')[0].style.display = "none";
	document.getElementsByClassName('experience_container')[0].style.display = "none";
	document.getElementsByClassName('experience_container')[1].style.display = "none";
	document.getElementsByClassName('projects_container')[0].style.display = "none";
	document.getElementsByClassName('selected_pro')[0].style.display = "none";
	document.getElementsByClassName('blogs_container')[0].style.display = "none";
}

function alterAvtar(top_val, left_val, width_val, height_val){
	document.getElementsByClassName('avtar')[0].style.top = top_val.toString()+"%";
	document.getElementsByClassName('avtar')[0].style.left = left_val.toString()+"%";
	document.getElementsByClassName('avtar')[0].style.width = width_val.toString()+"px";
	document.getElementsByClassName('avtar')[0].style.height = height_val.toString()+"px";
}

function aboutPageRenderer(){
	document.getElementsByClassName('avtar')[0].style.display = "block";
	document.getElementsByClassName('about_text')[0].style.display = "block";
	document.getElementsByClassName('contact')[0].style.display = "block";
	alterAvtar(20,50,200,200);
}

function experiencePageRenderer(){
	document.getElementsByClassName('avtar')[0].style.display = "block";
	alterAvtar(20,10,150,150);
	setTimeout(function(){
		document.getElementsByClassName('experience_container')[0].style.display = "block";
		document.getElementsByClassName('experience_container')[0].style.animation = "mymove 0.75s 1";
		document.getElementsByClassName('experience_container')[0].style.animationPlayState = "initial";
		var el = document.getElementsByClassName('experience_container')[0];
		populateBoards(el, getData(0));
	}, 2000);
}

function projectsPageRenderer(){
	document.getElementsByClassName('avtar')[0].style.display = "block";
	document.getElementsByClassName('avtar')[0].style.top = "60%";
	document.getElementsByClassName('avtar')[0].style.left = "50%";
	document.getElementsByClassName('avtar')[0].style.width = "200px";
	document.getElementsByClassName('avtar')[0].style.height = "200px";
	alterAvtar(40,50,200,200);

	document.getElementsByClassName('projects_container')[0].style.display = "block";
	document.getElementsByClassName('lines')[0].style.transform = "rotateZ(0deg)";
	document.getElementsByClassName('lines')[1].style.transform = "rotateZ(0deg)";
	document.getElementsByClassName('lines')[2].style.transform = "rotateZ(0deg)";
	document.getElementsByClassName('lines')[0].style.visibility = "hidden";
	document.getElementsByClassName('lines')[1].style.visibility = "hidden";
	document.getElementsByClassName('lines')[2].style.visibility = "hidden";
	document.getElementsByClassName('project_tile')[0].style.visibility = "hidden";
	document.getElementsByClassName('project_tile')[1].style.visibility = "hidden";
	document.getElementsByClassName('project_tile')[2].style.visibility = "hidden";

	setTimeout(function(){
		document.getElementsByClassName('lines')[0].style.visibility = "visible";
		document.getElementsByClassName('lines')[1].style.visibility = "visible";
		document.getElementsByClassName('lines')[2].style.visibility = "visible";
		document.getElementsByClassName('project_tile')[0].style.visibility = "visible";
		document.getElementsByClassName('project_tile')[1].style.visibility = "visible";
		document.getElementsByClassName('project_tile')[2].style.visibility = "visible";
		document.getElementsByClassName('lines')[0].style.transform = "rotateZ(330deg)";
		document.getElementsByClassName('lines')[1].style.transform = "rotateZ(90deg)";
		document.getElementsByClassName('lines')[2].style.transform = "rotateZ(210deg)";
		document.getElementsByClassName('project_tile')[2].style.transform = "rotateZ(180deg) translate(0% ,50%)";
		document.getElementsByClassName('project_tile')[1].style.transform = "rotateZ(270deg) translate(25%, -50%)";
	}, 2000);
}

function populateBlogs(element, itemsArray){
	var firstLeft = 0;

	for (var i = 0; i < itemsArray.length; i++) {
		//create board.
		var board = document.createElement('div');
		board.className = 'blog_card';
		board.style.left = firstLeft.toString()+'%';
		board.style.top = '40%';
		// add Title
		var title = document.createElement('span');
		title.className = 'blog_title';
		title.innerHTML = itemsArray[i].getTitle();
		board.appendChild(title);
		// add date
		var dateText = document.createElement('span');
		dateText.className = 'blog_date';
		dateText.innerHTML = itemsArray[i].getDate();
		board.appendChild(dateText);
		// add description
		var desc = document.createElement('span');
		desc.className = 'blog_desc';
		desc.innerHTML = itemsArray[i].getDesc();
		board.appendChild(desc);
		// add description
		var link = document.createElement('a');
		link.className = 'blog_link';
		link.innerHTML = "Read More";
		var url = itemsArray[i].getLink();
		link.href = url;
		board.appendChild(link);
		// append the whole card
		element.appendChild(board);
		//increase left offset;
		firstLeft += 35;
	}

	addReadMoreCard(element, firstLeft);
}

function addReadMoreCard(element, firstLeft){
	var readMoreCard = document.createElement('div');
	readMoreCard.className = 'blog_card';
	readMoreCard.style.left = firstLeft.toString()+'%';
	readMoreCard.style.top = '40%';
	readMoreCard.style.height = '280px';

	var link = document.createElement('a');
	link.className = 'blog_link';
	link.innerHTML = "All Posts";
	var url = './allposts.html';
	link.href = url;
	link.style.marginTop = '50%';
	link.style.transform = 'translate(0, -150%)';
	readMoreCard.appendChild(link);

	element.appendChild(readMoreCard);
}

function blogsPageRenderer(){
	document.getElementsByClassName('avtar')[0].style.display = "block";
	alterAvtar(20, 50, 150, 150);
	setTimeout(function(){
		var el = document.getElementsByClassName('blogs_container')[0];
		el.style.display = "block";
		populateBlogs(el, getData(2));
	}, 2000);
}

function changePageContent(current_page){
	initialPageSetup();

	if (current_page  == 0) {
		aboutPageRenderer();
	}
	else if(current_page == 1){
		experiencePageRenderer();
	}
	else if(current_page == 2){
		projectsPageRenderer();
	}
	else if(current_page == 3){
		blogsPageRenderer();
	}
}

function getData(index, sub_index=0){
	/* here index parameter is for page to fetch the data, where
	0 = experience,
	1 = Projects,
	2 = Blogs

	And sub_index is sub-category of page, such as Android and front-end
	by default sub-index = 0, but would change according to number of 
	sub-categories.
	*/
	if (index == 0) {
		let b1 = new boardData('Web Developer Intern', 
			'Created website to convert human acted video to animated character video, implemented <b>Posenet</b> deep-learning model to predict the human pose for each frame in the video and map that pose to animated character.', 
			'Jan, 2020 - April, 2020');
		let b2 = new boardData('Lead',
			'As Lead at Developer Student Club, we helped students from various background to learn technologies such as Android, Web Development, Machine Learning and Google Developer Platforms.',
			'Feb, 2019 - Aug, 2020');
		let b7 = new boardData('Software Engineer',
					'Currently Working at <b>Seawoods Ventures Inc.</b> as a Software Engineer. Having responsibilities from designing, prototyping and creating front-end to implementing back-end and bringing everything together as a product.',
					'July, 2021 - Current');
		let b8 = new boardData('Android Developer',
					'Worked as a Freelancer, build Quiz Platform for Android platform with Management app.<br>Integrated Features like Payment Gateway, Push Notification, Third Party Authentication.',
					'Dec, 2020 - Feb, 2021');
		return [b7, b8, b1, b2];
	}
	else if(index == 1){
		switch(sub_index){
			case 0: 
				// for Android
				let b1 = new boardData('CryptoApp', 
					'An android app for ciphering text and images into a secret language. Check it out <a href="https://play.google.com/store/apps/details?id=srivastava995.akash.cryptoapp" target="_blank">here</a>',
					'Aug, 2018');
				let b2 = new boardData('UniQR', 
					'An android app focused on improved UI design for reading and creating QR-codes. Check it out <a href="https://play.google.com/store/apps/details?id=srivastava995.akash.bbc" target="_blank">here</a>', 
					'Sept, 2020');
				return [b1, b2];
				break;
			case 1:
				//for front-end
				let b5 = new boardData('JamBread - Music App UI', 
					'This is a UI/UX project of a music web-app designed with pure HTML/CSS, having implementation of Neomorphism style, animations, motion graphics and smooth transitions. Check it out <a href="https://dev-akash.github.io/JamBreadUI/" target="_blank">here</a>', 'Jan, 2021');
				let b6 = new boardData('NeonPortfolio - A sci-fi UI', 
					'This is a UI/UX project of a portfolio website designed with pure HTML/CSS, having implementation of Sci-Fi vibe as of Iron Man Movie style, motion graphics and some amazing animations, glitch effects, interactions, etc. Check it out <a href="https://dev-akash.github.io/NeonPortfolio/" target="_blank">here</a>', 'April, 2021');
				return [b5, b6];
				break;
			case 2:
				//for software
				let b3 = new boardData('Bulkren', 
					'Bulkren is a simple PYPI package for bulk renaming files inside a folder.<b> Having Downloads more than 15K</b> as of now. It is a CLI tool for renaming the files in bulk - helpful in managing data and in data pre-processing. Check it out <a href="https://pypi.org/project/Bulkren/1.0.6/" target="_blank">here</a></b>',
					'March, 2020');
				let b4 = new boardData('Chromatica', 
					'An open source project for chromatic editing in videos. It allows user to edit there chromatic background with whatever image they want and they can do it freely. Check it out <a href="https://github.com/Dev-Akash/Chromatica" target="_blank">here</a>', 
					'Nov, 2018');
				return [b3, b4];
				break;
			default:
				return null;
		}
	}
	else if(index == 2){
		let b1 = new blogsData('How To Add a View programmatically in Android', 
			'So, today we will go through how to create this feature in an android application. I hope before reading this article, you are familar with the coding in android and know how to create views and attach callback listeners to it.', 
			'April 16, 2020', "./posts/how-to-add-a-view-programmatically-in-android-using-java.html");
		let b2 = new blogsData('How to Bulk Rename Files',
			'So, most of the time we encounter a situation for renaming the files in large quantity, persons who create datasets to the persons who just want to organize a folder with some conventional names',
			'Aug 20, 2020', "./posts/how-to-bulk-rename-files.html");
		let b3 = new blogsData('Getting Started with Videos in OpenCV',
			"Hi there, and welcome again to Dev-akash's blog post, so today we will be getting started with videos in OpenCV",
			'Jan 20, 2021', "./posts/getting-started-with-videos-in-opencv.html");
		return [b1, b2];
	}
}

class boardData{
	constructor(title, desc, date){
		this.title = title;
		this.desc = desc;
		this.date = date;
	}

	getDate(){
		return this.date;
	}

	getTitle(){
		return this.title;
	}

	getDesc(){
		return this.desc;
	}
}

class blogsData{
	constructor(title, desc, date, link){
		this.title = title;
		this.desc = desc; 
		this.date = date;
		this.link = link;
	}

	getTitle(){
		return this.title;
	}

	getDesc(){
		return this.desc;
	}

	getDate(){
		return this.date;
	}

	getLink(){
		return this.link;
	}
}