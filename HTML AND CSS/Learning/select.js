document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('select').onchange =function ()  {
        document.querySelector('#example').style.color = this.value
    }
}) 

