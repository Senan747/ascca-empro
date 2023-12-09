import React from "react";
import { Typography } from "@mui/material";
import ChartComponent from "./Chart";

function HomeDashboard() {
  const date = new Date();

  return (
    <div className="p-5 font-Inter flex items-center flex-wrap">
      <div className="flex  justify-between w-[700px] border-1 p-4 rounded-md">
        <div>
          <Typography variant="h5" sx={{ mb: 4.5 }}>
            Təbriklər <span className="font-semibold">Senan</span>! 🎉
          </Typography>
          <Typography variant="body2">
            Sənin <span className="font-semibold">87%</span>
            😎 ortalaman var.
          </Typography>
        </div>
        <div>
          <img src="john.png" alt="" />
        </div>
      </div>
      <ChartComponent />
    </div>
  );
}

export default HomeDashboard;
