import React, { useEffect, useState } from 'react';
import CandidateService from '../services/CandidateService';
export default function SigninCandidate() {
  const [candidates,setCandidates] = useState([]);
  
  useEffect(()=>{

    let candidateService = new CandidateService();
    candidateService.getCandidates().then(result => setCandidates(result.data.data))
    console.log(candidates);
  },[])
  return <div>
      <h1>Candidate Sign in</h1>
      
  </div>;
}
