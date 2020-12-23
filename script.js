console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	localStorage.setItem('theme', mode)
}

fetch('https://reqres.in/api/users?page=2').then(response => response.json())
.then(responseJSON => createUsersList(responseJSON.data)).catch(err => console.log(err));

function createUsersList(users) {
    console.log(users);
    const curr_main = document.querySelector("main");
    for (let user of users) {
        const section = document.createElement("section");
        section.innerHTML = `
            <br>
            <img src="${user.avatar}" alt="Profile Picture"/>
            <div>
                <span>${user.first_name} ${user.last_name}</span>
                <br>
                <a href="mailto:${user.email}">${user.email}</a>
            </div>`;
        curr_main.appendChild(section);
    }
}