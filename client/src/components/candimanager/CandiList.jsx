import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCandi } from '../../redux/candidateSlice';

const CandiList = () => {
  const auth = useSelector((state) => state.auth);
  const candi = useSelector((state)=> state.candidate);

  const {currentUser} = auth;
  const {AllCandidate} = candi;

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllCandi(currentUser.token, currentUser.id));
  }, [dispatch,currentUser.token, currentUser.id]);

  return (
    <div><h3>Candidate List</h3>
      {Object.values(AllCandidate).map(item=>{
        return <li key={item._id}>{item.name}</li>
      })}
    </div>
  )
}

export default CandiList