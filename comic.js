AFRAME.registerComponent('Caspian',{
    schema:{
        pages:{type:'array', default:[
            {
                page:'adara',
                color:"#d19cff"
            },
            {
                page:'ava',
                color:"#d19cff"
            },  
            {
                page:'rosie',
                color:"#d19cff"
            },
            {
                page:'ella',
                color:"#d19cff"
            },
            {
                page:'luna',
                color:"#d19cff"
            }
        ]},
        pageIndex:{type:'int', default:0}
    },
    init:function(){
        var pageEl= this.pageEl=document.querySelector('[layer]');
        pageEl.object3d.position.set(0, 1.8, -2.5);
        var pageIndex=this.data.pageIndex;
        window.addEventListener("keydown",(e) => {
            if(e.key==="ArrowRight" & pageIndex<4)
                pageIndex+=1;
                this.turnPage(pageIndex);
        })
    }
})