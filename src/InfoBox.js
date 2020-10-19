import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
function InfoBox({ active,isRed,title, cases, total ,...props}) {
  return (
    <Card  onClick={props.onClick}  className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}>
      <CardContent>
        <Typography color="textSecondry" className="infoBox__title">
          {title}
        </Typography>
        <h2 className="infoBox__cases">{cases}</h2>
        <Typography color="textSecondry">{total} Total</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
