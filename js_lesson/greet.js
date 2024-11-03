function greeting(){
    let name = document.getElementById('fname').value
    
    console.log(`Hello, ${name}`);
    document.getElementById("greet").innerHTML = `Hello, ${name}`
    alert(`Hello, ${name}`);
}