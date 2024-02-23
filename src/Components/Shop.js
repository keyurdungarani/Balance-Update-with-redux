import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../State'

const Shop = () => {
  const dispatch = useDispatch()
   const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch) 
   const amount = useSelector(state => state.amount) 
  return (
    <div>
      <h3>Apple vison pro</h3>
        {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}> + </button>
            Add to Cart
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}> - </button>
         */}
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}> - </button>
            Available Balance: ({amount})
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}> + </button>
    </div>
  )
}

export default Shop