const url='http://localhost:5000/api/beans';

export async function getMenus(){
    return (await fetch(url)).json();
}