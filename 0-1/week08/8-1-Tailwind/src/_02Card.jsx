import React from 'react';

const _02Card = ({ title, orderCount, amount }) => {
  return (
    <div className='bg-white text-black rounded shadow-sm grid grid-cols-3'>
      <div>
        {title}
      </div>
      <div className="flex justify-between">
        <div>
          {amount}
        </div>
        {orderCount ? <div>{orderCount}</div> : null}
      </div>
    </div>
  )
}

export default _02Card