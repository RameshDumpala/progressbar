import React from "react";

const Progressbar = ({ average, benchMark,minimum }) => {
  return (
    <div>
     
      <div className="progressbar">
        <div
          style={{
            height: "100%",
            width: `${benchMark > 100 ? 100 : benchMark}%`,
            backgroundColor: "green",
            transition: "width 0.10s",
          }}
        >  </div>
          {/* <span>{filled}%</span> */}

          <div
            style={{
              height: "60px",
              // position: "absolute",
              top: "-10px",
              left: `${average > 100 ? 100 : average}%`,
              width: 0,
              borderLeft: "2px solid #000",
              transition: "left 0.10s",
            }}
          > </div>
            <div style={{
                 height: "60px",
                 position: "absolute",
                 top: "-10px",
                 left: `${minimum > 100 ? 100 : minimum}%`,
                 width: 0,
                 borderLeft: "2px solid red",
                 transition: "left 0.10s",
                
            }}>

            </div>
            {/* <span>{average}%</span> */}
         
      
      </div>
    </div>
  );
};

export default Progressbar;
