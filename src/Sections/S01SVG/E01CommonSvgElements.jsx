import React from 'react'

const E01CommonSvgElements = () => {
    return (
        <div>
          <h3>E01CommonSvgElements</h3>
          <svg widths={800} height={800} style={{border:"1px solid red"}}>
            <rect width={200} height={200} x={100} y={100} fill="blue"/>

            <circle cx={100} cy={400} y={200} r={50} fill="yellow"/>

            <text x={100} y={500} fill="blue" fontSize={"18"}>
                Hello
            </text>
          </svg>
                
            
        </div>
    )
}

export default E01CommonSvgElements