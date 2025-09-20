const express = require("express");
const router = express.Router();
const Candidate = require("../models/candidate");
const User = require("../models/user"); 
const { jwtAuthMiddleware, generateToken } = require("../jwt");
    const checkAdmin = async (userID) =>{
        try{
            const user =  await User.findById(userID);
            if(user.role === 'admin'){
              
              return true;
            }
            

        }catch(err){
            return false;
        }
    }





// POST route to add a candiate 
router.post('/', jwtAuthMiddleware, async (req, res) => {
  try {
    if(!(await checkAdmin(req.user.id)))
        return res.status(403).json({message: 'user has not admin role'});
    
    const data = req.body; // Assuming the request body contains the user  data

    // Create a new user document using the Mongoose model
    const newCandiate = new Candidate(data);

    // Save the new user to the database
    const response = await newCandiate.save();
    console.log("data saved");
    res.status(200).json({ response: response});
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// Profile route
router.put("/:candidateID", jwtAuthMiddleware, async (req, res) => {
  try {
    if(!checkAdmin(req.user.id))
        return res.status(404).json({message: 'user has not admin role'});

    const candidateID = req.params.candiateID;
    const updatedCandiateData = req.body;

    const response = await Candidate.findByIdAndUpdate(candidateID, updatedCandiateData, {
         new: true,
         runValidators: true,
    

    });
    if(!response){
        return res.status(404).json({message: 'candiate not found'});

    }
    console.log('Candiate Data updated successfully');
    res.status(200).json(response);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//delete 
router.delete("/:candidateID", jwtAuthMiddleware, async (req, res) => {
  try {
    if (!checkAdmin(req.user.id))
      return res.status(404).json({ message: "user has not admin role" });

    const candidateID = req.params.candidateID;

  //  const updatedCandiateData = req.body;

    const response = await Candiate.findByIdAndDelete(candidateID); 

    if (!response) {
      return res.status(404).json({ message: "candiate not found" });
    }

    console.log("Candiate Deleted ");
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//lets start voting 
router.post('/vote/:candidateID', jwtAuthMiddleware, async (req, res) => {

  //admin cant vote
  //user can vote 

  candiateID = req.params.candidateID;
  userID = req.user.id;

  try{
    const candidate = await Candidate.findById(candiateID);
    if(!candidate){
      return res.status(404).json({message: 'candidate not found'});
    }
    const user = await  User.findById(userID);
    if(!user){
      return res.status(404).json({message: 'user not found'});

    }
    if(user.isVoted){
      return res.status(400).json({message: 'user has already voted'});

    }
    if(user.role == 'admin'){
      return res.status(403).json({message: 'admin cannot vote'});
    }
    //update the candiate document to record the vote 
    candidate.votes.push({user: userID});
    candidate.voteCount++;
    await candidate.save();
    user.isVoted = true;
    await user.save();

    //update the user documents

    user.isVoted = true;
    await user.save();

    res.status(200).json({message: 'vote successful'});
      

    
  }catch(err){
    console.error(err)
    res.status(500).json({error: 'internal server error'})

  }

});

//vote count+++(add later)
router.get('/vote/count',  async (req, res) => {

  try{
    //find all candiate and sort by votecount 
    const candidate = await Candidate.find().sort({voteCount: 'descending'});

    //map candidate to only return theri name and votecount 
    const record = candidate.map((data)=>{
      return {
        party: data.party,
        voteCount: data.voteCount,
      }
    });
    res.status(200).json(record);
  }catch(err){
    console.error(err);
    res.status(500).json({error:'imternal server error'});

  }
});

//get the list of candiate here 
router.get('/candidate', async (req, res) => {
  try{
    //find all candiate and sort by votecount 
    const candidate = await Candidate.find({}, 'name party -id');
    res.status(200).json(candidate);
  }catch(err){
    console.error(err);
    res.status(500).json({error: 'internal server error'});

  }
  

});



module.exports = router;
