import { useEffect } from "react"

export default function Title() {

  
  useEffect(() => {    //mount
    const interval = setInterval(()=>{    
      console.log("mount");
    },1000)
    
    return () => {  //unmount
      console.log("unmount");
      clearInterval(interval)
    }
  }, [])  //dep array
  
  return (
    <div>
    <h1>Wellcome daz</h1>
    </div>
  )
}
