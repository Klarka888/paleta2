import { palettes } from "../../palettes"

export const ShemeColor = ({palety}) => {
    return(
    
      
            
            <div className="scheme-colors">
                {
                    palety.colors.map(
                        (c) => (
                            <div className="scheme-color" style={{ backgroundColor: {c} }} >{c}</div>
                        )
                    )
                }
            </div>
        
       
        
    )
}