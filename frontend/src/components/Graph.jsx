import React from 'react'
import {Chart, ArcElement} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
import Labels from './Labels'
import {default as api} from '../reduxstore/apiSlice'
import { chart_Data, getTotal } from '../helper/helper'


Chart.register(ArcElement)
  // const config = {
  //   data: {
  //     datasets: [{
  //       label: 'My First Dataset',
  //       data: [300, 50, 100],
  //       backgroundColor: [
  //         'rgb(255, 99, 132)',
  //         'rgb(54, 162, 235)',
  //         'rgb(255, 205, 86)'
  //       ],
  //       hoverOffset: 4,
  //       borderRadius: 30,
  //       spacing: 10
  //     }] 
  //   },
  //   options: {
  //     cutout:115,
  //   }
  // }

function Graph() {

  const {data, isFetching, isSuccess, isError} = api.useGetLabelsQuery()
    let graphData;
    
    if(isFetching){
      graphData = <div>Fetching</div>
    }else if(isSuccess){
      
      console.log(getTotal(data));
      
      graphData = <Doughnut {...chart_Data(data)}></Doughnut> 
    }else if(isError){
      graphData = <div>Error</div>
    }


  return (
    <div className='flex justify-content max-w-xs mx-auto'>
      <div className="item">
        <div className="chart relative">
          {/* for options and config both we used spread op */}
          {graphData}
          <h3 className="m-4 font-bold title absolute left-0 ml-auto mr-auto right-0 top-28">Total</h3>
          <span className='block text-3xl text-emerald-400 absolute left-0 ml-auto mr-auto right-0 top-40'>Rs. {getTotal(data) ?? 0}</span>
        </div>

        <div className="flex flex-col py-10 gap-4">
          <Labels/>
        </div>
      </div>
    </div>
  )
}

export default Graph
