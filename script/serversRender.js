//servers получаем командой fetch 
let servers  =[{
    id: "0",
    name: "mikrotik",
    ip: "192.168.88.1",
    available: true
},
{
    id: "1",
    name: "mikrotik_2",
    ip: "192.168.88.2",
    available: false
},
]





const render = async function(){
    let div = document.createElement('div');
    div.className = "main_serversAvaleble";
    div.innerHTML = ``;
    availableStatus="available"
     for(i in servers){
        availableStatus=(servers[i].available)?"available":"notavailable";
        div.innerHTML += `
        <div class="main_serversAvaleble_server">
        Name: ${servers[i].name}  Ip: ${servers[i].ip} Available: <div class="${availableStatus}">${servers[i].available}</div>
        </div>
        `;
        document.body.append(div)
    }
    
    
}

render()
