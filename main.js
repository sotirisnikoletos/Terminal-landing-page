const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');
const cv=document.querySelector('#cv2');
const cvContent=document.querySelector('#cv-content');


about.addEventListener('click' , ()=>{
    const aboutBox = new WinBox({
        title:'About me',
        background:'#00aa00',
        width:'400px',
        height:'400px',
        top:'50',
        right:'50',
        bottom:'50',
        left:'50',
        mount:aboutContent,
        onfocus:function(){
            this.setBackground('#00aa00');
        },
        onblur:function(){
            this.setBackground('#777');
        }
    })

})

contact.addEventListener('click' , ()=>{
    const contactBox = new WinBox({
            title:'Contact me',
            background:'#00aa00',
            width:'400px',
            height:'400px',
            top:'50',
            right:'150',
            bottom:'150',
            left:'250',
            mount:contactContent,
            onfocus:function(){
                this.setBackground('#00aa00');
            },
            onblur:function(){
                this.setBackground('#777');
            }
        })

    })


    cv.addEventListener('click' ,()=>{
        
        const cvBox = new WinBox({
                title:'curriculum vitae',
                background:'#00aa00',
                width:'400px',
                
                height:'400px',
                top:'50',
                right:'150',
                bottom:'150',
                left:'250',
                mount:cvContent,
                onfocus:function(){
                    this.setBackground('#00aa00');
                },
                onblur:function(){
                    this.setBackground('#777');
                }
                
        })
        
    
    })


   