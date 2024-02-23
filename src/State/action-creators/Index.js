export const depositMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'deposite',
            payload: amount
        })
        console.log('deposited')
    }
}

export const withdrawMoney = (amount)=>{
    return (dispatch) =>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}