import { Request, Response } from "express";

interface Encounter {
  id: number;
  location: string;
  date: string;
  alienShipType: string;
  description: string;
  credibilityScore: number;   
}

const encounters: Encounter[] = [{"id": 1,
  "location": "Roswell, NM",
  "date": "1947-07-08",
  "alienShipType": "Flying Saucer",
  "description": "A shiny metallic disc flying at incredible speed.",
  "credibilityScore": 8}];
  
let encounterId = encounters.length + 1;


export class AlienEncounterController {
  constructor() {}

  createEncounter = async (req: Request, res: Response) => {

    const {location, date, alienShipType, description, credibilityScore} = req.body;

    if(!location || location.length === 0) {
      return res.status(422).json({            
          message: "Location of encounter is required"
      });
    }

    if(!date || date.length === 0) {
      return res.status(422).json({            
          message: "Date of encounter is required"
      });
    }

    if(!alienShipType || alienShipType.length === 0) {
      return res.status(422).json({            
          message: "Alien Ship Type of encounter is required"
      });
    }
    
    if(!description || description.length === 0) {
      return res.status(422).json({            
          message: "Description of encounter is required"
      });
    }

    if(!credibilityScore || credibilityScore.length === 0) {
      return res.status(422).json({            
          message: "Credibility Score field of encounter is required"
      });
    }

    const newEncounter: Encounter = {
      id: encounterId++,
      location,
      date ,
      alienShipType,
      description,
      credibilityScore
    }

    encounters.push(newEncounter);

    return res.status(201).json({
      message: "Encounter of Aliens has been created",
      encounter: newEncounter
    });
  };

  findAllEncounter = async (req: Request, res: Response) => {
    return res.status(200).json({
      message: "Success get all encounters of Alines",
      encounters:encounters
    });
  };


  findOneEncounter = async (req: Request, res: Response) => {

    const { id } = req.params;
    const encounterId = +id;

    if(isNaN(encounterId)){
        return res.status(400).json({
            message: "Invalid encounter id"
        })
    }      

    const encounter = encounters.find((t) => t.id === encounterId);

    if(!encounter){
        return res.status(404).json({
            message: `Encounter not found with id: ${encounterId}`
        });
    }
 
    return res.status(200).json({
      message: `Success get 1 encounter with id ${encounterId}`,encounter:encounter
    });
  };

  deleteEncounter = async (req: Request, res: Response) => {
    const { id } = req.params;
    const encounterId = +id;

    if(isNaN(encounterId)){
        return res.status(400).json({
            message: "Invalid encounter id"
        })
    }      

    const encounter = encounters.find((t) => t.id === encounterId);

    if(!encounter){
      return res.status(404).json({
          message: `Encounter not found with id: ${encounterId}`
      });
    }    

    encounters.splice(encounters.indexOf(encounter), 1);

    return res.status(200).json({
      message: "Success delete 1 encounter with id " + encounterId ,
      encounter: encounter
    });
  };

  patchEncounter = async (req: Request, res: Response) => {
    const {location, date, alienShipType, description, credibilityScore} = req.body;

    const { id } = req.params;
    const encounterId = +id;

    if(isNaN(encounterId)){
        return res.status(400).json({
            message: "Invalid encounter id"
        })
    }      

    const encounter = encounters.find((t) => t.id === encounterId);

    if(!location || location.length === 0) {
      return res.status(422).json({            
          message: "Location of encounter is required"
      });
    }

    if(!date || date.length === 0) {
      return res.status(422).json({            
          message: "Date of encounter is required"
      });
    }

    if(!alienShipType || alienShipType.length === 0) {
      return res.status(422).json({            
          message: "Alien Ship Type of encounter is required"
      });
    }
    
    if(!description || description.length === 0) {
      return res.status(422).json({            
          message: "Description of encounter is required"
      });
    }

    if(!credibilityScore || credibilityScore.length === 0) {
      return res.status(422).json({            
          message: "Credibility Score field of encounter is required"
      });
    }

    if (!encounter) {
        return res.status(404).json({
            message: `Encounter not found with id: ${encounterId}`
        });
    }

    encounter.location = location;
    encounter.date = date;
    encounter.alienShipType = alienShipType;
    encounter.description = description;
    encounter.credibilityScore = credibilityScore; 
    

    return res.status(200).json({
      message: "Success updated  1 encounter with id " + encounterId ,encounter:encounter
    });
  };  

  randomEncounter = async (req: Request, res: Response) => {
    const randomEncounter =Math.floor(Math.random() * encounters.length);

    return res.status(200).json({
      message: "Success get random encounter: Green lightning and tentacles! It definitely wasn't a cat! I think my neighbor is building a spaceship in the garage.",encounter:encounters[randomEncounter]
    });

  }

}
