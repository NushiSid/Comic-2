AFRAME.registerComponent('caspian',{
    schema:{
        pages:{type:'array', default:[
            {
                page:'adara',
                color:"#d19cff"
            },
            {
                page:'ava',
                color:"#aaf3fa"
            },  
            {
                page:'rosie',
                color:"#faaaf9"
            },
            {
                page:'ella',
                color:"#aafad9"
            },
            {
                page:'luna',
                color:"#aac5fa"
            }
        ]},
        pageIndex:{type:'int', default:0}
    },
    init:function(){
        var pageEl= this.pageEl=document.querySelector('[layer]');
        pageEl.object3D.position.set(0, 1.8, -2.5);
        var pageIndex=this.data.pageIndex;
        window.addEventListener("keydown",(e) => {
            if(e.key==="ArrowRight" & pageIndex<4){
                pageIndex+=1;
                this.turnPage(pageIndex);
            }
            if(e.key==="ArrowLeft" & pageIndex>=1){
                pageIndex-=1;
                this.turnPage(pageIndex);
            }

            

        });

    },
    turnPage:function(pageIndex) {
        var pages=this.data.pages;
        var pageId=pages[pageIndex].page;
        var pageColor=pages[pageIndex].color;
        this.pageEl.setAttribute ('layer', 'src', '#' + pageId)
        this.el.sceneEl.setAttribute ('background', 'color', pageColor)
        

    }       

})

