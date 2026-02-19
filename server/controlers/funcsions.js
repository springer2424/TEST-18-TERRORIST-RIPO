import fs from "fs/promises";
import csv from "async-csv"

import path from "path";
const __dirname = path.resolve();
const teror_PATH = path.join(__dirname, "data", "terrorData.csv");

 


async function sdhfkjdsf() {
    

  
  const csvString = await fs.readFile(teror_PATH, 'utf-8');
 
  
  const data = await csv.parse(csvString);
  const rows = data.slice(0, 50)
  return rows
};


export const getDataCsv = async (req, res) => {
  try {
    

    const terorArr = await sdhfkjdsf();
    
    if (terorArr) {
      
        res.status(200).json({ msg: "success", data: terorArr });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "error" + err.message, data: null });
  }
};

