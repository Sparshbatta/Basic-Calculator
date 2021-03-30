let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
let capture='';
for(item of buttons)
{
    item.addEventListener('click', (e)=>
    {
        buttonText=e.target.innerText;
        console.log("Button text is ",buttonText);
        
        if(buttonText=='C')
        {
            screenValue="";
            screen.value=screenValue;
        }

        
        else if(buttonText=='=')
        {
            if(screenValue.includes("tan")==false && screenValue.includes("cos")==false && screenValue.includes("sin")==false)
            {
            screen.value=eval(screenValue);
            }
            else if(screenValue.includes("tan")==true)
            {
                let temp=screenValue.split('(');
                let finalString=temp[1].split(')')[0];
                let number=parseInt(finalString);
                screenValue=Math.tan(number);
                screen.value=screenValue;
                capture='';
            }
            else if(screenValue.includes("cos")==true)
            {
                let temp=screenValue.split('(');
                let finalString=temp[1].split(')')[0];
                let number=parseInt(finalString);
                screenValue=Math.cos(number);
                screen.value=screenValue;
                capture='';

            }
            else if(screenValue.includes("sin")==true)
            {
                let temp=screenValue.split('(');
                let finalString=temp[1].split(')')[0];
                let number=parseInt(finalString);
                screenValue=Math.sin(number);
                screen.value=screenValue;
                capture='';

            }
            
        }  
        
        else if(buttonText=='x')
        {
            screenValue=screenValue.slice(0,-1);
            screen.value=screenValue;
        }

        else
        {
            
            if(screenValue.includes("tan"))
            {
                capture+=buttonText;
                screenValue="tan"+"("+capture+")";
            }
            else if(screenValue.includes("cos"))
            {
                capture+=buttonText;
                screenValue="cos"+"("+capture+")";
            }
            else if(screenValue.includes("sin"))
            {
                capture+=buttonText;
                screenValue="sin"+"("+capture+")";
            }
            else
            {
                screenValue+=buttonText;
            }
            screen.value=screenValue;
        }

    })
}