import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const E11styleBarGraphInD3 = () => {
   
     const myElementRef = useRef(null)
   
       const [barData, setBarData] = useState([
        {
            name: 'John Doe',
            age: 24
        },
        {
            name: 'Will Smith',
            age: 50
        },
        {
            name: 'Jane Doe',
            age: 15
        },
        {
            name: 'Alice Doe',
            age: 90
        }
    ])

    //calculate max age
    const maxAge = d3.max(barData, (d)=> d.age)
    
    console.log(`max age is ${maxAge}`);
    
    
    const totalHeight = maxAge + 50;
    const rectWidth = 50;

    const margin={
        top:20,
        right:90,
        bottom:100,
        left:40
    }

       useEffect(() => {
   
           const svg = d3.select(myElementRef.current);
   
           const allRectData = svg.selectAll("rect")
                               .data(barData)
                               .enter()
                               .append("rect")
                               .attr("x", (d,i)=> i * rectWidth + margin.left)
                               .attr("y",(d,i)=> totalHeight - d.age + margin.top)
                               .attr("height", (d)=> d.age)
                               .attr("width", rectWidth)
                               .attr("stroke-width", 2)
                               .attr("stroke", '#38bcb2')
                               .attr("fill",'#97e3d5') 
   
           
               console.log("Create DOm elements",allRectData);
           
               //draw x axis

            svg.append('line')
            .attr('x1',margin.left)
            .attr('y1',margin.top + totalHeight)
            .attr('x2', margin.left + (rectWidth * barData.length) + rectWidth/2)
            .attr('y2', margin.top + totalHeight)
            .attr('stroke','black')
            .attr('stroke-width',2)

            //draw y-axis

            svg.append('line')
            .attr('x1', margin.left)
            .attr('y1', margin.top)
            .attr('x2', margin.left)
            .attr('y2', margin.top + totalHeight)
            .attr('stroke','black')
            .attr('stroke-width',2)

            //creating x-axis labels

            svg.selectAll(".name-label")
                .data(barData)
                .enter()
                .append('text')
                .text((d)=> d.name)
                .attr('class','name-label')
                .attr('x',(d,i)=>  i*rectWidth + margin.left + 10)
                .attr('y', totalHeight + margin.top)
                .attr('transform', (d,i)=> `rotate(45 ${i*rectWidth + margin.left} ${totalHeight + margin.top + 20})`)
                .attr('fill', 'gray')
   
       },[barData])
   
       return (
           <div>
               <h3>E09 create DOM Elements From Data</h3>
               <svg ref={myElementRef}
                   height={totalHeight + margin.top + margin.bottom}
                   style={{ border: "1px dashed" }}
               >
   
               </svg>
           </div>
       )
   
};

export default E11styleBarGraphInD3;
