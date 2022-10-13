// var newEvent = $("#textBox").innerText;


function mainEvent(ev){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
            
        var newEventText = $(".textBox").val()
        $(".textBox").val("")
    
    
       
        console.log("go");
        $(".taskList").append(`
            <div class="listItem">
            </div>
        `
        );
    
        $(".listItem").last()
        .css("background-color",`rgb(${r},${g},${b})`)
        .append(
            $(`<div>`)
            .attr("class","content")
            .text(newEventText)
        )
      
        .append(
            $(`<button>`)
            .attr("class","btn-up")
            .text("⬆️")
            .mousedown((ev) => {
                $(ev.target).parent().insertBefore(
                   $(ev.target).parent().prev() 
                )
            })
        )
        .append(
            $(`<button>`)
            .attr("class","btn-down")
            .text("⬇️")
            .mousedown((ev) => {
                $(ev.target).parent().insertAfter(
                   $(ev.target).parent().next() 
                )
            })
        )
    
    
        .append(
            $(`<button>`)
            .attr("class","delete")
            .text("❌")
            .mousedown( (ev) => {
                $(ev.target).parent().remove();
            })
        )
    
        .dblclick((ev)=>{
            $(ev.target)
                .attr('contenteditable','true')
        })
    
}
    
   

$("#addEvent").mousedown(
    (ev) => {
        
        if( $(".textBox").val() == ""){
            $(".textBox").val("Enter some Value of the Event!!")
        }


        mainEvent(ev);
        
    }
)

$(document).keydown((ev) => {
    var ch = ev.key;
    console.log(ch);
    if(ch == "Enter"){

        if( $(".textBox").val() == ""){
            $(".textBox").val("Enter some Value of the Event!!")
        }


        mainEvent(ev);
    }
})




