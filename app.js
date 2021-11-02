let side = document.getElementById("side1");
let sideClass = side.className;
let side2 = document.getElementById("side2");
let side2Class = side2.className;
new Vue({
    el: "#flashcards-app",
    data: {
        cards:[
            {
                question:"What year was IUPUI founded?",
                answer:"1969",
                category:"history",
                flipped:false
            },
            {
                question:"What is 2+2?",
                answer:"Fish",
                category:"math",
                flipped:false
            },
            {
                question:"Is mayonnaise an instrument?",
                answer:"No",
                category:"science",
                flipped:false
            }
        ]
    },
    methods:{

    }
})
