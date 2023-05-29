/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

//Wayne Barnett    Founder & CEO      wayne-barnett-founder-ceo.jpg

//Angela Caroll     Chief Editor      angela-caroll-chief-editor.jpg

//Walter Gordon     Office Manager    walter-gordon-office-manager.jpg

//Angela Lopez      Social Media      Manager  angela-lopez-social-media-manager.jpg

//Scott Estrada     Developer         scott-estrada-developer.jpg

//Barbara Ramos     Graphic Designer  barbara-ramos-graphic-designer.jpg

const members = [
    {
        name:'Wayne Barnett',
        role: 'Founder & Ceo',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name:'Angela Carrol',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name:'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name:'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name:'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name:'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
    }
]
const container= document.getElementById("output")

/*for (let key in members){
    const element=document.createElement('p');
    element.textContent = key + ':' + members[key];
    container.appendChild(element);
    
};
*/

for (let i = 0; i < members.length; i++) {
    const member = members[i];
    
    const memberInfo = document.createElement("p");
    memberInfo.textContent = "Name: " + member.name + ", Role: " + member.role + ", Photo: " + member.photo;
    container.appendChild(memberInfo);
  }