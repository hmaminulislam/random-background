window.onload = () => {
    main();
}
function main() {
    document.getElementById("button").addEventListener('click', function() {
        document.body.style.backgroundColor = bgColor();
    })
}
function bgColor () {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const black = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${black})`;
    
}