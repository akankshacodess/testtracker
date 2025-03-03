import React from 'react'
import {useForm} from 'react-hook-form'
import History from './History'
import {default as api} from '../reduxstore/apiSlice'

function Form() {

  const {register, handleSubmit, resetField}=useForm()
  const [addTransaction] = api.useAddTransactionMutation()


  const onSubmit=async (data)=>{
    if(!data)  return {};
    await addTransaction(data).unwrap();
    resetField('name')
    resetField('amount')
    
  }
  return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className="font-bold pb-4 text-xl">Transaction</h1>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="input-group">
              <input type="text" {...register('name')} placeholder='Salary, House Rent, SIP' className='mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm' />
            </div>
            <select className='mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm' {...register('type')}>
              <option value="Investment" defaultValue>Investment</option>
              <option value="Expense">Expense</option>
              <option value="Savings" >Savings</option>
            </select>
            <div className="input-group" >
            <input type="text" {...register('amount')} placeholder='Amount' className='mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-md focus:outline-none focus:ring-indigo-500 sm:text-sm' />
            </div>
            <div className="submit-btn">
              <button className='border py-2 text-white bg-indigo-500 w-full'>Make Transaction</button>
            </div>
            </div>
        </form>
        <History/>
    </div>
  )
}

export default Form
