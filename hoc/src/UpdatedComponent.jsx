import React, { useState } from 'react'

function UpdatedComponent(OriginlComponent) {
    function NewComponent(){
        const [money , setMoney] = useState(10)

        function Handle(){
            setMoney(money * 2)
        }
            return <OriginlComponent money={money}  Handle={Handle} />
    }
    return NewComponent
  
}

export default UpdatedComponent 
