/*
Hengameh Khajehpour
SN# 301122261
Midterm project
Comp 229 Sec009
Fall 2021
*/

console.log('Goes to the client side.');

if(getTitle == "Book List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}