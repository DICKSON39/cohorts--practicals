document.addEventListener("DOMContentLoaded", function() {
    //smooth scroll for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            })
        })
    })

    //handle the submisssion

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message received successfully")
    this.reset()
})
})
//console.log("HTML")
