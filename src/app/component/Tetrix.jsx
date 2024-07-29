"use client"
import react from "react";
import { useEffect,useRef } from "react";

const TetrixFondo = ()=>{
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const section = canvas.parentElement;
        const ctx = canvas.getContext('2d');
        const blockSize = 30;
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFEB33'];

        const  updateCanvasSize = () =>{
            canvas.width = section.clientWidth;
            canvas.height =  section.clientHeight;
        };

        updateCanvasSize();

        const rows = Math.ceil(canvas.height / blockSize)
        const cols = Math.ceil(canvas.width / blockSize)

        const drawBlock = (x,y) =>{
            const color =  colors[Math.floor(Math.random()* colors.length)];
            ctx.fillStyle = color;
            ctx.fillRect(x* blockSize, y * blockSize, blockSize - 1 ,blockSize - 1);
        };

        const drawFondo = () =>{
            ctx.clearRect(0,0, canvas.width, canvas.height);
            for (let y=0; y < rows; y++) {
                for (let x=0; x < cols; x++){
                    if(Math.random()> 0.9){
                        drawBlock(x,y)
                    }
                }
            }
        
        };

        const startAnimation = () =>{
            drawFondo();
            setInterval(drawFondo, 1000)
        };

        updateCanvasSize();
        startAnimation();

        window.addEventListener('resize',updateCanvasSize);
        return()=>{
            window.removeEventListener('resize',updateCanvasSize);
        };
    },[]);
    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-[75vh]" />;
};

export default TetrixFondo;
