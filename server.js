import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.post("/bfhl", (req, res) => {
  var numbers = req.body.numbers;
  var success = true;
  var odd = [];
  var even = [];
  var final = {};
  for(var i=0;i<numbers.length;i++)
  {
      var temp = parseInt(numbers[i]);
      if(temp>=0&&temp<=9)
      {
        if(temp%2==0)
        even.push(temp);
        else
        odd.push(temp);
      }
      else
      {
          success = false;
          break;
      }
  }
  var user = "abhishek_singh_"+"22011998";
  if(success === true)
  {
    final["is_success"] = success;
    final["user_id"] = user;
    final["odd"] = odd;
    final["even"] = even;
  }
  else
  {
    final["is_success"] = success;
    final["user_id"] = user;
  }
  return res.send(final);
});





// set port, listen for requests
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});